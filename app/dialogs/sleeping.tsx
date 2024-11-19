import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { hp, wp } from '@/helpers/common';
import { Colors } from '@/constants/Colors';

const smile = require('../../assets/images/Smile.png')
const sleep = require('../../assets/images/Sleep (1).png')

type Props = {}

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');


export default function sleeping() {
    const [Timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    let interval: any = null;



    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const toggleTimer = () => {
        if (isRunning) {
            clearInterval(interval);
            setIsRunning(false);
        } else {
            setIsRunning(true);
        }
    };

    useEffect(() => {
        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prevTime) => prevTime + 1);
            }, 1000);
        } else if (!isRunning && Timer !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning]);  
    
    const stopTimer = () => {
        setIsRunning(false);
        clearInterval(interval);

        router.push('/dialogs/sleepingHistory' as any)

    };

    // Function to reset the timer
    const resetTimer = () => {
        setIsRunning(false);
        setTimer(0);
        clearInterval(interval);


    };
    
    const router = useRouter();
  return (
    <ScreenWrapper bg='white'>
        <View style={styles.container}>
            <View style={styles.headerProfile}>
                <MaterialIcons name="cancel" size={30} color="#000" onPress={() => router.back()} />
                <Text style={styles.header}>Sleeping</Text>
                <Image source={profile} style={styles.avatar} />
            </View>

            <View style={styles.BoxContainer}>
                <Text style={styles.timerText}>Tap to start the timer</Text>
                <View>
                    <TouchableOpacity style={styles.circle} onPress={toggleTimer}>
                        <Image style={styles.insideImage} source={isRunning ? sleep : smile }/>
                        <Text style={styles.insideText}>{isRunning ? 'Hold' : 'Start'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.singleCirle}>{formatTime(Timer)}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add manual entry</Text>
            </TouchableOpacity>

            

            </View>
            
            {isRunning && (
                        <View style={styles.actionButtonContainer}>
                            <TouchableOpacity
                                style={styles.actionbutton}
                                onPress={resetTimer}
                            >
                                <Text style={styles.actionbuttonText}>Reset</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.actionbutton}
                                onPress={stopTimer}
                            >
                                <Text style={styles.actionbuttonText}>Stop</Text>
                            </TouchableOpacity>
                        </View>
            )}
        </View>
    </ScreenWrapper>
  )
}


const styles = StyleSheet.create({
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
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    BoxContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        height: hp(55),
        backgroundColor: Colors.secondary,
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    timerText: {
        fontSize: 16,
        color: Colors.primary,
        fontWeight: '600',
        textAlign: 'center', 
        flexWrap: 'wrap',    
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
        width: 147,
        height: 147,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#4F8DD1',
        borderWidth: 2.5,
        backgroundColor: '#FFFFFF66'

    },
    circleText: {
        fontSize: 24,
        fontWeight: 'bold',
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
    insideText: {
        marginTop: 10,
        fontWeight: '600',
        color: Colors.primary
    },
    insideImage: {
        marginTop: 30
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
    
})