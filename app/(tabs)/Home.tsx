import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Button, Alert } from 'react-native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import { supabase } from '../../supabase';
import ScreenWrapper from '../../components/ScreenWrapper';
import { useRouter } from 'expo-router';

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const babyImage = require('../../assets/images/babyImage.png');
const feedingImage = require('../../assets/images/breastfeeding-illustration-mother-feeding-a-baby-with-breast-with-nature-and-leaves-background-concept-illustration-in-cartoon-style-vector.png');
const sleepImage = require('../../assets/images/sleep.png'); 
const nappyImage = require('../../assets/images/nappy.png');
const growthImage = require('../../assets/images/growth home.png'); 
const healthImage = require('../../assets/images/health home.png');

type IconWithLabelProps = {
  image: any;
  label: string;
  onPress: () => void;
};

export default function HomePage() {
  const router = useRouter();

  const onLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert('Sign Out', 'Error signing out!');
    } else {
      Alert.alert('Sign Out', 'You have been signed out.');
      router.replace('/login');  // Redirect to login screen after logout
    }
  };

  return (
    <ScreenWrapper bg="white">
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hi Hinata</Text>
          <Image source={profile} style={styles.avatar} />
        </View>

        <View style={styles.iconsRow}>
          <IconWithLabel 
            image={feedingImage} 
            label="Feeding" 
            onPress={() => router.push('/dialogs/feeding')} 
          />
          <IconWithLabel 
            image={sleepImage} 
            label="Sleep" 
            onPress={() => router.push('/dialogs/sleeping')} 
          />
          <IconWithLabel 
            image={nappyImage} 
            label="Nappy" 
            onPress={() => router.push('/dialogs/nappy')} 
          />
          <IconWithLabel 
            image={growthImage} 
            label="Growth" 
            onPress={() => router.push('/')} 
          />
          <IconWithLabel 
            image={healthImage} 
            label="Health" 
            onPress={() => router.push('/')} 
          />
        </View>

        <View style={styles.imageContainer}>
          <Image source={babyImage} style={styles.babyPhoto} />
          <Text style={styles.birthday}>
            Birthday: <Text style={styles.textBig}>24</Text> JUNE
          </Text>
        </View>

        <View style={styles.quoteContainer}>
          <Text style={styles.quote}>
            "Raising a child is like planting a seed and watching it grow into a beautiful flower." — Lisa Wingate
          </Text>
        </View>

        <Button title="Logout" onPress={onLogout} />
      </ScrollView>
    </ScreenWrapper>
  );
}

function IconWithLabel({ image, label, onPress }: IconWithLabelProps) {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      <Image source={image} style={styles.iconImage} accessibilityLabel={label} /> 
      <Text style={styles.iconLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 400, 
    marginBottom: 20,
  },
  babyPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  birthday: {
    position: 'absolute', 
    bottom: 10, 
    left: 10, 
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', 
    padding: 4, 
    borderRadius: 4, 
  },
  textBig: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%', 
    backgroundColor: 'white', 
    zIndex: 1, 
  },  
  iconContainer: {
    alignItems: 'center',
  },
  iconImage: {
    width: width * 0.15,  
    height: width * 0.15, 
  },
  iconLabel: {
    marginTop: 4,
    fontSize: 12,
    color: 'gray',
  },
  quoteContainer: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  quote: {
    color: 'white',
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
