import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../constants/Colors';
import { hp, wp } from '@/helpers/common';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../../components/ScreenWrapper';

const mixed = require('../../assets/images/mixed.png');
const solid = require('../../assets/images/solid.png');
const wet = require('../../assets/images/wet.png');
const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');

export default function Nappy() {
    const [selectedOption, setSelectedOption] = useState('None');
    const router = useRouter();

    
    return (
        <ScreenWrapper bg='white'>
            <ScrollView style={styles.container}>
                <View style={styles.headerProfile}>
                    <MaterialIcons name="cancel" size={30} color="#000" onPress={() => router.back()} />
                    <Text style={styles.header}>Nappy</Text>
                    <Image source={profile} style={styles.avatar} />
                </View>

                <View style={styles.timerContainer}>
                    {/* Mixed Option */}
                    <View style={styles.secondRow}>
                        <TouchableOpacity
                            style={[
                                styles.circle,
                                selectedOption === 'Mixed' && styles.selectedCircle,
                            ]}
                            onPress={() => setSelectedOption('Mixed')}
                        >
                            <Image source={mixed} style={styles.circleImage} />
                        </TouchableOpacity>
                        <Text style={styles.singleCircle}>Mixed</Text>
                    </View>

                    {/* Wet and Solid Options */}
                    <View style={styles.circleContainer}>
                        <View>
                            <TouchableOpacity
                                style={[
                                    styles.circle,
                                    selectedOption === 'Wet' && styles.selectedCircle,
                                ]}
                                onPress={() => setSelectedOption('Wet')}
                            >
                                <Image source={wet} style={styles.circleImage} />
                            </TouchableOpacity>
                            <Text style={styles.singleCircle}>Wet</Text>
                        </View>

                        <View>
                            <TouchableOpacity
                                style={[
                                    styles.circle,
                                    selectedOption === 'Solid' && styles.selectedCircle,
                                ]}
                                onPress={() => setSelectedOption('Solid')}
                            >
                                <Image source={solid} style={styles.circleImage} />
                            </TouchableOpacity>
                            <Text style={styles.singleCircle}>Solid</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => router.push('/dialogs/nappyHistory' as any)}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
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
    timerContainer: {
        justifyContent: 'space-between',
        height: hp(65),
        backgroundColor: Colors.secondary,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    circleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: hp(2),
    },
    singleCircle: {
        margin: 10,
        fontSize: 16,
        color: '#4F8DD1',
        fontWeight: '500',
        textAlign: 'center',
    },
    circle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#4F8DD1',
        backgroundColor: '#FFFFFF66',
        borderWidth: 1, // Default border width for unselected circles
    },
    selectedCircle: {
        borderWidth: 3, // Thicker border for selected circle
        backgroundColor: '#d3d3d3', // Gray background shade for selected circle
    },
    circleImage: {
        width: '100%',
        height: '100%',
    },
    button: {
        backgroundColor: 'white',
        height: hp(4),
        width: '70%',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: Colors.primary,
        fontSize: 16,
        fontWeight: '600',
    },
    secondRow: {
        marginTop: hp(10),
        justifyContent: 'center',
    },
});
