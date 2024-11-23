import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../constants/Colors';
import { hp, wp } from '@/helpers/common';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../../components/ScreenWrapper';
import { supabase } from '../../supabase';
import { useUser } from '../UserContext'; // Import useUser

const mixed = require('../../assets/images/mixed.png');
const solid = require('../../assets/images/solid.png');
const wet = require('../../assets/images/wet.png');
const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const diaper = require('../../assets/images/baby_diaper.png')

export default function Nappy() {
  const [selectedOption, setSelectedOption] = useState('None');
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const router = useRouter();
  const { user } = useUser(); // Get the logged-in user

  const saveNappyChoice = async (choice: string) => {
    if (!user) {
      Alert.alert('Error', 'User not authenticated.');
      return;
    }

    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    try {
      // Fetch the current profile data to determine which columns are available
      const { data: profileData, error: fetchError } = await supabase
        .from('Profiles')
        .select('NAPPY_1, NAPPY_2, NAPPY_3, NAPPY_4, NAPPY_DATE_1, NAPPY_DATE_2, NAPPY_DATE_3, NAPPY_DATE_4')
        .eq('email', user.email)
        .single();

      if (fetchError) {
        console.error('Error fetching profile data:', fetchError);
        Alert.alert('Error', 'Failed to fetch profile data.');
        return;
      }

      // Determine the next available set of columns
      let updateData = {};
      if (!profileData.NAPPY_1) {
        updateData = { NAPPY_1: choice, NAPPY_DATE_1: today };
      } else if (!profileData.NAPPY_2) {
        updateData = { NAPPY_2: choice, NAPPY_DATE_2: today };
      } else if (!profileData.NAPPY_3) {
        updateData = { NAPPY_3: choice, NAPPY_DATE_3: today };
      } else if (!profileData.NAPPY_4) {
        updateData = { NAPPY_4: choice, NAPPY_DATE_4: today };
      } else {
        // All slots are filled, start replacing from the first slot
        updateData = {
          NAPPY_1: choice,
          NAPPY_DATE_1: today,
          NAPPY_2: profileData.NAPPY_1,
          NAPPY_DATE_2: profileData.NAPPY_DATE_1,
          NAPPY_3: profileData.NAPPY_2,
          NAPPY_DATE_3: profileData.NAPPY_DATE_2,
          NAPPY_4: profileData.NAPPY_3,
          NAPPY_DATE_4: profileData.NAPPY_DATE_3,
        };
        Alert.alert('Notice', 'All nappy choices are filled. The oldest entry has been replaced.');
      }

      // Update the profile with the new nappy choice and date
      const { error: updateError } = await supabase
        .from('Profiles')
        .update(updateData)
        .eq('email', user.email);

      if (updateError) {
        console.error('Error saving nappy choice:', updateError);
        Alert.alert('Error', 'Failed to save nappy choice.');
      } else {
        Alert.alert('Success', 'Nappy choice saved successfully.');
      }
    } catch (error) {
      console.error('Error saving nappy choice:', error);
      Alert.alert('Error', 'An error occurred while saving nappy choice.');
    }
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    saveNappyChoice(option);
  };

  const handleSave = () => {
    router.push('/dialogs/nappyHistory'); // Navigate to the summary screen
  };

  return (
    <ScreenWrapper bg='white'>
      <ScrollView style={styles.container}>
        <View style={styles.headerProfile}>
          <MaterialIcons name="cancel" size={30} color="#000" onPress={() => router.back()} />
          <Text style={styles.header}>Nappy</Text>
         
        </View>

        <View style={styles.timerContainer}>
          {/* Mixed Option */}
          <View style={styles.secondRow}>
            <TouchableOpacity
              style={[
                styles.circle,
                selectedOption === 'Mixed' && styles.selectedCircle,
              ]}
              onPress={() => handleOptionSelect('Mixed')}
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
                onPress={() => handleOptionSelect('Wet')}
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
                onPress={() => handleOptionSelect('Solid')}
              >
                <Image source={solid} style={styles.circleImage} />
              </TouchableOpacity>
              <Text style={styles.singleCircle}>Solid</Text>
            </View>
          </View>
        </View>

        

        <View>
          <Text style={styles.instext}>How to change diaper</Text>
          <View style={styles.imageBox}>
          <Image source={diaper} style={styles.diaperImg}/>
          </View>
        </View>
        <TouchableOpacity style={styles.summaryButton} onPress={() => router.push('/dialogs/nappyHistory' as any)}>
        <Text style={styles.summaryButtonText}>Summary</Text>
      </TouchableOpacity>

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
    alignItems: 'center',
    right: 150,
  },
  imageBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  diaperImg: {
    width: '100%',           // Make the image take up the full width of the container
    aspectRatio: 3,          // Maintain the aspect ratio (adjust as needed)
    resizeMode: 'contain',  
  },
  headerProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
   
  },

  timerContainer: {
    justifyContent: 'space-between',
    height: hp(55),
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
    borderWidth: 1, 
  },
  selectedCircle: {
    borderWidth: 3, 
    backgroundColor: '#d3d3d3', 
  },
  circleImage: {
    width: '100%',
    height: '100%',
  },


  secondRow: {
    marginTop: hp(8),
    justifyContent: 'center',
  },

  summaryButton: {
    backgroundColor: '#e0f7ff',
    borderRadius: 9,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 30,
    
  },
  summaryButtonText: {
    fontSize: 18,
    color: '#0078A4',
    fontWeight: 'bold',
  },

  instext: {
    marginTop: 10,
    color: '#4F8DD1',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  }

});