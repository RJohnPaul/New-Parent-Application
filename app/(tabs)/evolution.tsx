import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import  ScreenWrapper  from '../../components/ScreenWrapper';

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const weekImage = require('../../assets/images/weekEvolution.png');
const monthImage = require('../../assets/images/monthEvolution.png');

export default function BabyEvolution() {
  const router = useRouter();
  return (
    <ScreenWrapper bg="white">

    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>Evolution</Text>
      
      </View>
      
      <View style={styles.flexContainer}>
        <LinearGradient colors={['#FFFFFF', '#CBE6F9']} style={styles.imageBox}>
        <Text style={styles.imageText}>1st to 8th week</Text>
          <TouchableOpacity onPress={() => router.push('/evolutionPresets/week1' as any)}>
            <Image source={weekImage} style={styles.iconImage}/>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient colors={['#FFFFFF', '#CBE6F9']} style={styles.imageBox1}>
        <Text style={styles.imageText}>2nd - 12th month</Text>
          <TouchableOpacity onPress={() => router.push('/evolutionPresets/month3' as any)}>
            <Image source={monthImage} style={styles.iconImage}/>
          </TouchableOpacity>
        </LinearGradient>

        </View>
       
        
      </View>
      </ScreenWrapper>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  flexContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: "center",
    
  },
  imageText: {
    position: 'absolute',
    top: 8,
    left: 8,
    fontSize: 17,
    fontWeight: 'light',
    color: 'black', 
  },
  iconImage: {
    marginTop: 30,
    width: 200,
    height: 100,
    resizeMode: 'center',
  },
 
  imageBox: {

    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    width: '45%', 
  },
  imageBox1: {

    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    width: '45%',
    right: 12,
  },
  image: {
    width: 110,
    height: 140,
    borderRadius: 10,
    marginBottom: -3.5,
  },
  
});

