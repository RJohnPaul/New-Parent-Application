import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {  useRouter } from 'expo-router';


const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');

const AddGrowthDataScreen: React.FC = () => {
  // State for holding input data
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const router = useRouter()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
                <MaterialIcons name="cancel" size={30} color="#000" onPress={() => router.back()} />
                <Text style={styles.headerText}>Add growth data</Text>
                <Image source={profile} style={styles.avatar} />
            </View>

      {/* Data Entry Fields */}
      <View style={styles.dataContainer}>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Date</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="Enter date"
            value={date}
            onChangeText={setDate}
          />
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Time</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="Add time"
            value={time}
            onChangeText={setTime}
          />
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Height</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="Add height"
            value={height}
            onChangeText={setHeight}
            keyboardType="numeric" // Use numeric keyboard for numbers
          />
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Weight</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="Add weight"
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric" // Use numeric keyboard for numbers
          />
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={() => console.log({ date, time, height, weight })}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      {/* Summary Button */}
      <TouchableOpacity style={styles.summaryButton}>
        <Text style={styles.summaryButtonText}>Summary</Text>
      </TouchableOpacity>
    </ScrollView>
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

  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
},
  dataContainer: {
    backgroundColor: '#CBE6F6',
    borderRadius: 8,
    padding: 8,
    marginBottom: 400,
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
  },
  summaryButtonText: {
    fontSize: 18,
    color: '#0078A4',
    fontWeight: 'bold',
  },
});

export default AddGrowthDataScreen;