import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../constants/Colors';
import { useTimer } from '@/constants/TimerContext'; // Assuming the timer context is already implemented
import { useRouter } from 'expo-router';

const feedingImage = require('../../assets/images/breastfeeding-illustration-mother-feeding-a-baby-with-breast-with-nature-and-leaves-background-concept-illustration-in-cartoon-style-vector.png');

const Tracking = () => {
  const { leftTimer, rightTimer, activeTimer } = useTimer(); 
  const router = useRouter();

 
  const timer = activeTimer === 'left' ? leftTimer : activeTimer === 'right' ? rightTimer : 0;
  const side = activeTimer === 'left' ? 'L' : activeTimer === 'right' ? 'R' : '';
  const formattedTime = new Date(timer * 1000).toISOString().substr(14, 5); 


  if (!activeTimer) return null;

  return (
    <View style={styles.feedContainer}>
      <View style={styles.trackingDetails}>
        <Image source={feedingImage} style={styles.babyImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.trackerTitle}>Breastfeeding Tracker</Text>
          <Text style={styles.trackerTime}>
            {formattedTime} - {side}
          </Text>
        </View>
        <TouchableOpacity onPress={() => router.push('/dialogs/feeding' as any)}>
          <MaterialIcons name={'chevron-right'} size={40} color={Colors.dark} />
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
    backgroundColor: 'white',
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
});

export default Tracking;
