import { ScrollView, FlatList, StyleSheet, Text, View, Image, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { hp } from '@/helpers/common';
import ScreenWrapper from '../../components/ScreenWrapper';
import { supabase } from '../../supabase';
import { useUser } from '../UserContext'; // Import useUser

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');

type Props = {};

const NappyHistory = (props: Props) => {
  const router = useRouter();
  const { user } = useUser(); // Get the logged-in user
  interface NappyData {
    date: string;
    type: string;
  }
  
  const [data, setData] = useState<NappyData[]>([]);

  useEffect(() => {
    const fetchNappyData = async () => {
      if (!user) {
        Alert.alert('Error', 'User not authenticated.');
        return;
      }

      try {
        const { data: profileData, error } = await supabase
          .from('Profiles')
          .select('NAPPY_1, NAPPY_2, NAPPY_3, NAPPY_4, NAPPY_DATE_1, NAPPY_DATE_2, NAPPY_DATE_3, NAPPY_DATE_4')
          .eq('email', user.email)
          .single();

        if (error) {
          console.error('Error fetching nappy data:', error);
          Alert.alert('Error', 'Failed to fetch nappy data.');
          return;
        }

        const nappyData = [
          { date: profileData.NAPPY_DATE_1, type: profileData.NAPPY_1 },
          { date: profileData.NAPPY_DATE_2, type: profileData.NAPPY_2 },
          { date: profileData.NAPPY_DATE_3, type: profileData.NAPPY_3 },
          { date: profileData.NAPPY_DATE_4, type: profileData.NAPPY_4 },
        ].filter(item => item.date); // Filter out empty entries

        setData(nappyData);
      } catch (error) {
        console.error('Error fetching nappy data:', error);
        Alert.alert('Error', 'An error occurred while fetching nappy data.');
      }
    };

    fetchNappyData();
  }, [user]);

  const renderRow = ({ item }: any) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.type}</Text>
    </View>
  );

  return (
    <ScreenWrapper bg='white'>
      <View style={styles.container}>
        <View style={styles.headerProfile}>
          <MaterialIcons name="cancel" size={30} color="#000" onPress={() => router.back()} />
          <Text style={styles.header}>Summary</Text>
          
        </View>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Date</Text>
          <Text style={styles.headerText}>Type</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderRow}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.tableBody}
        />
      </View>
    </ScreenWrapper>
  );
};

export default NappyHistory;

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
    right: 130,
  },
  headerProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: Colors.secondary,
    paddingVertical: 10,
    marginTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '#ccc',
    borderBottomWidth: 2,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    color: Colors.primary,
  },
  tableBody: {
    backgroundColor: Colors.secondary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: hp(73),
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: '#000',
  },
});