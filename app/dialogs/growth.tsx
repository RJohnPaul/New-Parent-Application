import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { supabase } from '../../supabase';
import { useUser } from '../UserContext'; // Import useUser
import  ScreenWrapper  from '../../components/ScreenWrapper';

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');

const AddGrowthDataScreen: React.FC = () => {
  // State for holding input data
  const [date, setDate] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const router = useRouter();
  const { user } = useUser(); // Get the logged-in user

  const saveGrowthData = async () => {
    if (!user) {
      Alert.alert('Error', 'User not authenticated.');
      return;
    }

    try {
      // Fetch the current profile data to determine which columns are available
      const { data: profileData, error: fetchError } = await supabase
        .from('Profiles')
        .select('GROW_DATE, GROW_HEIGHT, GROW_WEIGHT, GROW_DATE_2, GROW_HEIGHT_2, GROW_WEIGHT_2, GROW_DATE_3, GROW_HEIGHT_3, GROW_WEIGHT_3, GROW_DATE_4, GROW_HEIGHT_4, GROW_WEIGHT_4, GROW_DATE_5, GROW_HEIGHT_5, GROW_WEIGHT_5')
        .eq('email', user.email)
        .single();

      if (fetchError) {
        console.error('Error fetching profile data:', fetchError);
        Alert.alert('Error', 'Failed to fetch profile data.');
        return;
      }

      // Determine the next available set of columns
      let updateData = {};
      if (!profileData.GROW_DATE) {
        updateData = {
          GROW_DATE: date,
          GROW_HEIGHT: parseInt(height, 10),
          GROW_WEIGHT: parseInt(weight, 10),
        };
      } else if (!profileData.GROW_DATE_2) {
        updateData = {
          GROW_DATE_2: date,
          GROW_HEIGHT_2: parseInt(height, 10),
          GROW_WEIGHT_2: parseInt(weight, 10),
        };
      } else if (!profileData.GROW_DATE_3) {
        updateData = {
          GROW_DATE_3: date,
          GROW_HEIGHT_3: parseInt(height, 10),
          GROW_WEIGHT_3: parseInt(weight, 10),
        };
      } else if (!profileData.GROW_DATE_4) {
        updateData = {
          GROW_DATE_4: date,
          GROW_HEIGHT_4: parseInt(height, 10),
          GROW_WEIGHT_4: parseInt(weight, 10),
        };
      } else if (!profileData.GROW_DATE_5) {
        updateData = {
          GROW_DATE_5: date,
          GROW_HEIGHT_5: parseInt(height, 10),
          GROW_WEIGHT_5: parseInt(weight, 10),
        };
      } else {
        // All slots are filled, start replacing from the first slot
        updateData = {
          GROW_DATE: date,
          GROW_HEIGHT: parseInt(height, 10),
          GROW_WEIGHT: parseInt(weight, 10),
          GROW_DATE_2: profileData.GROW_DATE,
          GROW_HEIGHT_2: profileData.GROW_HEIGHT,
          GROW_WEIGHT_2: profileData.GROW_WEIGHT,
          GROW_DATE_3: profileData.GROW_DATE_2,
          GROW_HEIGHT_3: profileData.GROW_HEIGHT_2,
          GROW_WEIGHT_3: profileData.GROW_WEIGHT_2,
          GROW_DATE_4: profileData.GROW_DATE_3,
          GROW_HEIGHT_4: profileData.GROW_HEIGHT_3,
          GROW_WEIGHT_4: profileData.GROW_WEIGHT_3,
          GROW_DATE_5: profileData.GROW_DATE_4,
          GROW_HEIGHT_5: profileData.GROW_HEIGHT_4,
          GROW_WEIGHT_5: profileData.GROW_WEIGHT_4,
        };
        Alert.alert('Notice', 'All growth data slots are filled. The oldest entry has been replaced.');
      }

      // Update the profile with the new growth data
      const { error: updateError } = await supabase
        .from('Profiles')
        .update(updateData)
        .eq('email', user.email);

      if (updateError) {
        console.error('Error saving growth data:', updateError);
        Alert.alert('Error', 'Failed to save growth data.');
      } else {
        Alert.alert('Success', 'Growth data saved successfully.');
      }
    } catch (error) {
      console.error('Error saving growth data:', error);
      Alert.alert('Error', 'An error occurred while saving growth data.');
    }
  };

  return (
    <ScreenWrapper bg="white">
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="cancel" size={30} color="#000" onPress={() => router.back()} />
        <Text style={styles.headerText}>Add growth data</Text>
        
      </View>

      {/* Data Entry Fields */}
      <View style={styles.dataContainer}>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Date</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="Enter date (YYYY-MM-DD)"
            value={date}
            onChangeText={setDate}
          />
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Height</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="Add height in inches"
            value={height}
            onChangeText={setHeight}
            keyboardType="numeric" // Use numeric keyboard for numbers
          />
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Weight</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="Add weight in kgs"
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric" // Use numeric keyboard for numbers
          />
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={saveGrowthData}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      {/* Summary Button */}
      <TouchableOpacity style={styles.summaryButton} onPress={() => router.push('/dialogs/growthHistory' as any)}>
        <Text style={styles.summaryButtonText}>Summary</Text>
      </TouchableOpacity>
    </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    right: 95,
  },
  
  dataContainer: {
    backgroundColor: '#CBE6F6',
    borderRadius: 8,
    padding: 12,
    marginBottom: 300,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C3C3',
  },
  dataLabel: {
    fontSize: 18,
    color: '#0078A4',
    flex: 1,
  },
  dataInput: {
    fontSize: 16,
    color: '#525252',
    flex: 2,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  saveButton: {
    backgroundColor: '#f28b82',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: -6,
  },
  saveButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  summaryButton: {
    backgroundColor: '#e0f7ff',
    borderRadius: 9,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  summaryButtonText: {
    fontSize: 18,
    color: '#0078A4',
    fontWeight: 'bold',
  },
});

export default AddGrowthDataScreen;