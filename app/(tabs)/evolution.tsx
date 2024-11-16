import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import  ScreenWrapper  from '../../components/ScreenWrapper'


const weekImage = require('../../assets/images/weekEvolution.png');
const monthImage = require('../../assets/images/monthEvolution.png');

export default function BabyEvolution() {
  const router = useRouter();
  return (

    <View style={styles.container}>
      <Text style={styles.title}>Evolution</Text>
      <View style={styles.imageContainer}>
        <View style={styles.imageWrapper}>
        <TouchableOpacity onPress={() => router.push('/evolutionPresets/week1' as any)}>
          <Image 
            source={weekImage}
            style={styles.image}
          />
           
          <Text style={styles.label}>1st - 8th Week</Text>
          </TouchableOpacity>
        </View>
       
        <View style={styles.imageWrapper}>
        <TouchableOpacity onPress={() => router.push('/evolutionPresets/month3' as any)}>
          <Image 
            source={monthImage}
            style={styles.image}
          />
          <Text style={styles.label}>2nd - 12th Month</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    
   
  },
  imageWrapper: {
    alignItems: 'center',
    backgroundColor: '#CBE6F9',
    borderRadius: 12,
    width: 153,
    height: 160
  
  },
  image: {
    width: 130,
    height: 140,
    borderRadius: 10,
    marginBottom: -3.5,
  },
  label: {
    fontSize: 18,
  },
});

