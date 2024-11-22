import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import  ScreenWrapper  from '../../components/ScreenWrapper';
import { supabase } from "../../supabase"; // Ensure you import your Supabase client
import { useUser } from '../UserContext'; // Adjust the path as needed

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');

// Define the types for the vaccine sections
interface VaccineSection {
  age: string;
  vaccines: string[];
  status: boolean[];
}

const VaccinationScreen: React.FC = () => {
  const [vaccines, setVaccines] = useState<VaccineSection[]>([]);
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    const fetchVaccineData = async () => {
      if (!user) {
        Alert.alert('Error', 'User not authenticated.');
        return;
      }

      try {
        const { data: profileData, error } = await supabase
          .from('Profiles')
          .select('*')
          .eq('email', user.email)
          .single();

        if (error) {
          console.error('Error fetching vaccine data:', error);
          Alert.alert('Error', 'Failed to fetch vaccine data.');
          return;
        }

        if (profileData) {
          const fetchedVaccines: VaccineSection[] = [
            {
              age: '2 Months',
              vaccines: ['6-in-1 vaccine', 'PCV', 'MenB vaccine', 'Rotavirus vaccine'],
              status: [
                profileData['2M_6in1'],
                profileData['2M_PCV'],
                profileData['2M_MENB'],
                profileData['2M_ROV'],
              ],
            },
            {
              age: '4 Months',
              vaccines: ['6-in-1 vaccine', 'MenB vaccine', 'Rotavirus vaccine'],
              status: [
                profileData['4M_6in1'],
                profileData['4M_MENB'],
                profileData['4M_ROV'],
              ],
            },
            {
              age: '6 Months',
              vaccines: ['6-in-1 vaccine', 'MenC vaccine', 'PCV'],
              status: [
                profileData['6M_6in1'],
                profileData['6M_MENC'],
                profileData['6M_PCV'],
              ],
            },
            {
              age: '10 Months',
              vaccines: ['MMR', 'MenB vaccine (third dose)'],
              status: [
                profileData['10M_MMR'],
                profileData['10M_MENB'],
              ],
            },
            {
              age: '12 Months',
              vaccines: ['Hib/MenC vaccine', 'PCV (fourth dose)'],
              status: [
                profileData['12M_MENC'],
                profileData['12M_PCV'],
              ],
            },
          ];
          setVaccines(fetchedVaccines);
        }
      } catch (error) {
        console.error('Error fetching vaccine data:', error);
        Alert.alert('Error', 'An error occurred while fetching vaccine data.');
      }
    };

    fetchVaccineData();
  }, [user]);

  const toggleVaccineStatus = async (sectionIndex: number, vaccineIndex: number) => {
    const updatedVaccines = [...vaccines];
    updatedVaccines[sectionIndex].status[vaccineIndex] = !updatedVaccines[sectionIndex].status[vaccineIndex];
    setVaccines(updatedVaccines);

    const vaccineColumnMap: { [key: string]: string } = {
      '6-in-1 vaccine': sectionIndex === 0 ? '2M_6in1' : sectionIndex === 1 ? '4M_6in1' : '6M_6in1',
      'PCV': sectionIndex === 0 ? '2M_PCV' : '6M_PCV',
      'MenB vaccine': sectionIndex === 0 ? '2M_MENB' : sectionIndex === 1 ? '4M_MENB' : '10M_MENB',
      'Rotavirus vaccine': sectionIndex === 0 ? '2M_ROV' : '4M_ROV',
      'MenC vaccine': '6M_MENC',
      'MMR': '10M_MMR',
      'MenB vaccine (third dose)': '10M_MENB',
      'Hib/MenC vaccine': '12M_MENC',
      'PCV (fourth dose)': '12M_PCV',
    };

    const vaccineName = updatedVaccines[sectionIndex].vaccines[vaccineIndex];
    const columnName = vaccineColumnMap[vaccineName];

    if (!columnName) {
      Alert.alert('Error', 'Vaccine mapping not found.');
      return;
    }

    try {
      if (!user) {
        Alert.alert('Error', 'User not authenticated.');
        return;
      }

      const { error } = await supabase
        .from('Profiles')
        .update({ [columnName]: updatedVaccines[sectionIndex].status[vaccineIndex] })
        .eq('email', user.email);

      if (error) {
        console.error('Error updating vaccine status:', error);
        Alert.alert('Error', 'Failed to update vaccine status.');
      } else {
        Alert.alert('Success', 'Vaccine status updated successfully.');
      }
    } catch (error) {
      console.error('Error updating vaccine status:', error);
      Alert.alert('Error', 'An error occurred while updating vaccine status.');
    }
  };

  return (
    <ScreenWrapper bg="white">
    <ScrollView contentContainerStyle={styles.container}>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="cancel" size={30} color="#000" onPress={() => router.back()} />
        <Text style={styles.headerText}>Health</Text>
        
      </View>
      {vaccines.map((section, sectionIndex) => (
        <View key={sectionIndex} style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{section.age}</Text>
          {section.vaccines.map((vaccine, vaccineIndex) => (
            <View key={vaccineIndex} style={styles.vaccineContainer}>
              <Text style={styles.vaccineText}>{vaccine}</Text>
              <TouchableOpacity
                style={section.status[vaccineIndex] ? styles.doneButton : styles.button}
                onPress={() => toggleVaccineStatus(sectionIndex, vaccineIndex)}
              >
                <Text style={styles.buttonText}>
                  {section.status[vaccineIndex] ? 'Done' : 'Mark as done'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
    </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
    right: 130,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sectionContainer: {
    marginBottom: 20,
    backgroundColor: '#CBE6F6',
    borderRadius: 8,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  vaccineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  vaccineText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  doneButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default VaccinationScreen;