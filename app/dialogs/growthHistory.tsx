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

const GrowthHistory = (props: Props) => {
  const router = useRouter();
  const { user } = useUser(); // Get the logged-in user
  interface GrowthData {
    date: string;
    weight: number;
    height: number;
  }
  
  const [data, setData] = useState<GrowthData[]>([]);

  useEffect(() => {
    const fetchGrowthData = async () => {
      if (!user) {
        Alert.alert('Error', 'User not authenticated.');
        return;
      }

      try {
        const { data: profileData, error } = await supabase
          .from('Profiles')
          .select('GROW_DATE, GROW_HEIGHT, GROW_WEIGHT, GROW_DATE_2, GROW_HEIGHT_2, GROW_WEIGHT_2, GROW_DATE_3, GROW_HEIGHT_3, GROW_WEIGHT_3, GROW_DATE_4, GROW_HEIGHT_4, GROW_WEIGHT_4, GROW_DATE_5, GROW_HEIGHT_5, GROW_WEIGHT_5')
          .eq('email', user.email)
          .single();

        if (error) {
          console.error('Error fetching growth data:', error);
          Alert.alert('Error', 'Failed to fetch growth data.');
          return;
        }

        const growthData = [
          { date: profileData.GROW_DATE, weight: profileData.GROW_WEIGHT, height: profileData.GROW_HEIGHT },
          { date: profileData.GROW_DATE_2, weight: profileData.GROW_WEIGHT_2, height: profileData.GROW_HEIGHT_2 },
          { date: profileData.GROW_DATE_3, weight: profileData.GROW_WEIGHT_3, height: profileData.GROW_HEIGHT_3 },
          { date: profileData.GROW_DATE_4, weight: profileData.GROW_WEIGHT_4, height: profileData.GROW_HEIGHT_4 },
          { date: profileData.GROW_DATE_5, weight: profileData.GROW_WEIGHT_5, height: profileData.GROW_HEIGHT_5 },
        ].filter(item => item.date); // Filter out empty entries

        setData(growthData);
      } catch (error) {
        console.error('Error fetching growth data:', error);
        Alert.alert('Error', 'An error occurred while fetching growth data.');
      }
    };

    fetchGrowthData();
  }, [user]);

  const renderRow = ({ item }: any) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.weight}</Text>
      <Text style={styles.cell}>{item.height}</Text>
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
          <Text style={styles.headerText}>Weight(kgs)</Text>
          <Text style={styles.headerText}>Height(in)</Text>
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

export default GrowthHistory;

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