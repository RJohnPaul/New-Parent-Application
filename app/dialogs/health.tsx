import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {  useRouter } from 'expo-router';
import  ScreenWrapper  from '../../components/ScreenWrapper'

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');

// Define the types for the vaccine sections
interface VaccineSection {
  age: string;
  vaccines: string[];
  status: boolean[];
}

const VaccinationScreen: React.FC = () => {
  const [vaccines, setVaccines] = useState<VaccineSection[]>([
    { age: '2 months', vaccines: ['6 in 1 vaccine', 'PCV', 'MenB vaccine', 'Rotovirus oral vaccine'], status: [false, false, false, false] },
    { age: '4 months', vaccines: ['6 in 1 vaccine (second dose)', 'MenB vaccine', 'Rotovirus oral vaccine'], status: [false, false, false] },
    { age: '6 months', vaccines: ['6 in 1 vaccine (third dose)', 'MenC vaccine', 'PCV'], status: [false, false, false] },
    { age: '10 months', vaccines: ['MMR', 'MenB vaccine'], status: [false, false] },
    { age: '12 months', vaccines: ['Hib/MenC vaccine', 'PCV'], status: [false, false] }
  ]);
  const router = useRouter()
  const markAsDone = (sectionIndex: number, vaccineIndex: number) => {
    const updatedVaccines = [...vaccines];
    updatedVaccines[sectionIndex].status[vaccineIndex] = true;
    setVaccines(updatedVaccines);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

<View style={styles.header}>
<MaterialIcons name="cancel" size={30} color="#000" onPress={() => router.back()} />
<Text style={styles.headerText}>Health</Text>
<Image source={profile} style={styles.avatar} />

</View>

<View style={styles.tag}>
<Text style={styles.tagText}>Vaccination</Text></View>
      {vaccines.map((section, sectionIndex) => (
        <View key={sectionIndex} style={styles.sectionContainer}>
          <Text style={styles.ageText}>At {section.age}</Text>
          {section.vaccines.map((vaccine, vaccineIndex) => (
            <View key={vaccineIndex} style={styles.vaccineContainer}>
              <Text style={styles.vaccineText}>{vaccine}</Text>
              {section.status[vaccineIndex] ? (
                <TouchableOpacity style={styles.done}>
                <Text style={styles.doneText}>Done</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.button} onPress={() => markAsDone(sectionIndex, vaccineIndex)}>
                  <Text style={styles.buttonText}>Mark as done</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  sectionContainer: {
    marginBottom: 20,
    backgroundColor: '#CBE6F6',
    borderRadius: 8,
    padding: 16,
  },
  header: {
    padding: 18,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
 },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
},
  tag: {
    backgroundColor: '#F9FDFF',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 8

  },
  tagText: {
    fontSize: 17,
    fontWeight: 'light',
    color: '#0078A4',

  },
  ageText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0078A4'
  },
  vaccineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  vaccineText: {
    fontSize: 16.5,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
  },
  done: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,

  },
  doneText: {
    color: '#28a745',
    fontSize: 16.5,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default VaccinationScreen;