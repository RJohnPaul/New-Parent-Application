import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../constants/Colors';
import { hp, wp } from '@/helpers/common';
const feedingImage = require('../../assets/images/breastfeeding-illustration-mother-feeding-a-baby-with-breast-with-nature-and-leaves-background-concept-illustration-in-cartoon-style-vector.png');

const Tracking = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <View style={styles.feedContainer}>
            <View style={styles.trackingDetails}>
                <Image source={feedingImage} style={styles.babyImage} />
                <View style={styles.infoContainer}>
                    <Text style={styles.trackerTitle}>Breastfeeding Tracker</Text>
                    <Text style={styles.trackerTime}>15:25 - L</Text>
                </View>
                <TouchableOpacity onPress={handlePlayPause}>
                    <MaterialIcons
                        name={'chevron-right'}
                        size={40}
                        color={Colors.dark}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    feedContainer: {
        backgroundColor: '#2E98BF',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 10,
        alignItems: 'center',
    },
    trackingDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    babyImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'white'
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10,
    },
    trackerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    trackerTime: {
        fontSize: 14,
        color: '#fff',
    },
    progressBarContainer: {
        width: '100%',
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 5,
        marginTop: 10,
    },
    progressBar: {
        width: '50%', // Set dynamically based on progress
        height: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 5,
    },
});

export default Tracking;
