import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../constants/Colors';
import { hp, wp } from '@/helpers/common';
import {  useRouter } from 'expo-router';
import  ScreenWrapper  from '../../components/ScreenWrapper'

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');

export default function AddFeedScreen() {
    const [selectedOption, setSelectedOption] = useState('Breastfeeding');
    const [leftTimer, setLeftTimer] = useState(0);
    const [rightTimer, setRightTimer] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);

    const [feedingHistory, setFeedingHistory] = useState<{ type: string; duration: number }[]>([]);

    const router = useRouter()
    const leftIntervalId = useRef<NodeJS.Timeout | null>(null);
    const rightIntervalId = useRef<NodeJS.Timeout | null>(null);

    const [activeTimer, setActiveTimer] = useState<'left' | 'right' | null>(null);


    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const toggleLeftTimer = () => {
        if (activeTimer === 'left') {
            clearInterval(leftIntervalId.current!);
            leftIntervalId.current = null;
            setActiveTimer(null);
        } else {
            if (activeTimer === 'right') {
                clearInterval(rightIntervalId.current!);
                rightIntervalId.current = null;
                setActiveTimer(null);
            }

            leftIntervalId.current = setInterval(() => {
                setLeftTimer(prev => prev + 1);
            }, 1000);
            setActiveTimer('left');
        }
    }

    const toggleRightTimer = () => {
        if (activeTimer === 'right') {
            clearInterval(rightIntervalId.current!);
            rightIntervalId.current = null;
            setActiveTimer(null);
        } else {
            if (activeTimer === 'left') {
                clearInterval(leftIntervalId.current!);
                leftIntervalId.current = null;
                setActiveTimer(null);
            }

            rightIntervalId.current = setInterval(() => {
                setRightTimer(prev => prev + 1);
            }, 1000);
            setActiveTimer('right');
        }
    };

    const resetTimer = () => {
        clearInterval(leftIntervalId.current!);
        clearInterval(rightIntervalId.current!);
    
        setLeftTimer(0);
        setRightTimer(0);
    
        setActiveTimer(null);
    };

    const stopTimers = () => {
        if (leftTimer > 0) {
            setFeedingHistory(prev => [...prev, { type: 'Left', duration: leftTimer }]);
        }
        if (rightTimer > 0) {
            setFeedingHistory(prev => [...prev, { type: 'Right', duration: rightTimer }]);
        }

        clearInterval(leftIntervalId.current!);
        clearInterval(rightIntervalId.current!);
        leftIntervalId.current = null;
        rightIntervalId.current = null;

        setLeftTimer(0);
        setRightTimer(0);
        setActiveTimer(null);
        setOpenDialog(true);
        router.push('/dialogs/feedingHistory' as any)
    };

    return (
        <ScreenWrapper bg='white'>
            <ScrollView style={styles.container}>
            <View style={styles.headerProfile}>
                <MaterialIcons name="cancel" size={30} color="#000" onPress={() => router.back()} />
                <Text style={styles.header}>Add feed</Text>
                <Image source={profile} style={styles.avatar} />
            </View>

            <View style={styles.tabContainer}>
                <View style={styles.toggleContainer}>
                    <TouchableOpacity 
                        style={[styles.toggleUnselected, selectedOption === 'Breastfeeding' && styles.toggleButton]}
                        onPress={() => setSelectedOption('Breastfeeding')}
                    >
                        <Text style={styles.toggleText}>Breastfeeding</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.toggleUnselected, selectedOption === 'Bottle Feeding' && styles.toggleButton]}
                        onPress={() => setSelectedOption('Bottle Feeding')}
                    >
                        <Text style={styles.toggleText}>Bottle Feeding</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {selectedOption === 'Breastfeeding' ? (
                <View>
                    <View style={styles.timerContainer}>
                        <Text style={styles.timerText}>Tap the L or R button {'\n'}to start the timer</Text>
                        <View style={styles.circleContainer}>
                            <View>
                                <TouchableOpacity 
                                    style={styles.circle} 
                                    onPress={toggleLeftTimer}
                                >
                                    <Text style={styles.circleText}>L</Text>
                                </TouchableOpacity>
                                <Text style={styles.singleCirle}>{formatTime(leftTimer)}</Text>
                            </View>

                            <View>
                                <TouchableOpacity 
                                    style={styles.circle} 
                                    onPress={toggleRightTimer}
                                >
                                    <Text style={styles.circleText}>R</Text>
                                </TouchableOpacity>
                                <Text style={styles.singleCirle}>{formatTime(rightTimer)}</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Add manual entry</Text>
                        </TouchableOpacity>
                    </View>

                    {activeTimer && (
                        <View style={styles.actionButtonContainer}>
                            <TouchableOpacity
                                style={styles.actionbutton}
                                onPress={resetTimer}
                            >
                                <Text style={styles.actionbuttonText}>Reset</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.actionbutton}
                                onPress={stopTimers}
                            >
                                <Text style={styles.actionbuttonText}>Stop</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    
                </View>

            ) : (
            <View style={styles.timerContainer}>
                
                <View style={styles.circleContainer2}>
                    <TouchableOpacity style={styles.circle}>
                        <Text style={styles.circleText2}>Breast{'\n'} milk</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circle}>
                    <Text style={styles.circleText2}>Formula</Text>

                    </TouchableOpacity>
                </View>

                <View style= {styles.boxContainer}>
                    <View style={styles.horizontalLine} />
                        <View style={styles.enterBox}>
                            <Text style={styles.bottleText}>Feed</Text>
                            <Text>Enter</Text>
                        </View>
                    <View style={styles.horizontalLine} />
                        <View style={styles.enterBox}>
                            <Text style={styles.bottleText}>Amount</Text>
                            <Text>Add</Text>
                        </View>
                    <View style={styles.horizontalLine} />
                </View>



                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save feed </Text>
            </TouchableOpacity>
            </View>
            ) }
            
        </ScrollView>
        </ScreenWrapper>
    );
}


const styles = StyleSheet.create({
    toggleContainer: {
        flexDirection: 'row',
        padding: 3,
        width: '100%',
      },
      toggleUnselected: {
        display: 'flex',
        justifyContent: 'center',
        width: '50%',
      },
      toggleButton: {
        height: hp(5),
        width: '50%',
        backgroundColor: 'white',
        borderRadius: 10,
   
      },
      toggleText: {
        color: Colors.primary,
        fontSize: 16,
        display: 'flex',
        height: hp(5),
        fontWeight: '600',
        textAlign: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
      },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerProfile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
  
      },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        backgroundColor: '#7676801F',
        borderRadius: 13,
        height: hp(6)
    },

    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    tabText: {
        fontSize: 16,
    },
    timerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        height: hp(55),
        backgroundColor: Colors.secondary,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    timerText: {
        fontSize: 16,
        color: Colors.primary,
        fontWeight: '600',
        textAlign: 'center', 
        flexWrap: 'wrap',    
    },
    circleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: hp(10),
        marginBottom: 50

    },
    circleContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 50

    },
    singleCirle:{
        display: 'flex',
        justifyContent: 'center',
        margin: 10,
        fontSize: 16,
        color: '#4F8DD1',
        fontWeight: '500',
        textAlign: 'center'
    },
    circle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#4F8DD1',
        borderWidth: 2.5,
        backgroundColor: '#FFFFFF66'

    },
    
    circleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4F8DD1',
    },
    circleText2: {
        fontSize: 14,
        fontWeight: '500',
        color: '#4F8DD1',
        textAlign: 'center',
    },
    button: {
        display: 'flex',
        backgroundColor: 'white',
        height: hp(4),
        width: '70%',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        
    },
    buttonText: {
        color: Colors.primary,
        fontSize: 16,
        height: hp(3.5),
        fontWeight: '600',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    boxContainer: {
        flexGrow: 1,
        width: wp(80),
        alignItems: 'center'
    },

    horizontalLine: {
        width: '112%',        
        height: 1,            
        backgroundColor: '#C4C3C3', 
        marginVertical: 10,   
    },
    bottleText:{
        color: Colors.primary,
        fontWeight: '500'
    },
    enterBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%', 
    },  
    actionButtonContainer: {
        flexDirection: 'row',
        width: '100%',
        gap: 20,
        marginTop: 10,
        marginBottom: 20
    },
    actionbutton: {
        display: 'flex',
        backgroundColor: Colors.ResetButton,
        height: hp(4),
        width: wp(42),
        justifyContent:'center',
        marginLeft: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,        
    },
    actionbuttonText: {
        color: Colors.ResetText,
        fontSize: 16,
        fontWeight: '600',
        display: 'flex',
        justifyContent: 'center',
        marginVertical: 5,
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    infoContainer: {
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
    },
    infoHeader: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    infoText: {
        textAlign: 'center',
        marginVertical: 10,
    },
    readMore: {
        color: '#007BFF',
    },
    summaryButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
    },
    summaryButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
