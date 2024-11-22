import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../constants/Colors';
import { useTimer } from '@/constants/TimerContext'; // Assuming the timer context is already implemented
import { useRouter } from 'expo-router';

const images = {
  breastfeeding: require('../../assets/images/breastfeeding-illustration-mother-feeding-a-baby-with-breast-with-nature-and-leaves-background-concept-illustration-in-cartoon-style-vector.png'),
  sleep: require('../../assets/images/sleep.png'),
};

const Tracking = () => {
  const { leftTimer, rightTimer, sleepTimer , activeTimer, type } = useTimer();
  const router = useRouter();

  // Determine the timer and side based on the active tracking type
  let timer = 0;
  let side = '';
  
  // For breastfeeding and sleep, we need to handle their types correctly
  if (activeTimer === 'left' || activeTimer === 'right') {
    timer = activeTimer === 'left' ? leftTimer : rightTimer;
    side = activeTimer === 'left' ? 'L' : 'R';
  } else if (activeTimer === 'sleep') {
    timer = sleepTimer;
  }

  const formattedTime = new Date(timer * 1000).toISOString().substr(14, 5);

  // Determine the route and title based on the tracking type
  const route = type === 'breastfeeding' ? '/dialogs/feeding' : '/dialogs/sleeping';
  const title = type === 'breastfeeding' ? 'Breastfeeding Tracker' : 'Sleep Tracker';
  const image = images[type];

  if (!activeTimer || !timer) return null;

  return (
    <View style={styles.container}>
      <View style={styles.trackingDetails}>
        <Image source={image} style={styles.babyImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.trackerTitle}>{title}</Text>
          <Text style={styles.trackerTime}>
            {formattedTime} {type === 'breastfeeding' && side && `- ${side}`}
          </Text>
        </View>
        <TouchableOpacity onPress={() => router.push(route)}>
          <MaterialIcons name="chevron-right" size={40} color={Colors.dark} />
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
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
