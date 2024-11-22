import { ScrollView, FlatList, StyleSheet, Text, View, Image, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { hp } from '@/helpers/common';
import ScreenWrapper from '../../components/ScreenWrapper';
import { supabase } from '../../supabase';
import { useUser } from '../UserContext'; // Adjust the path as needed

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');

type Props = {};

const feedingHistory = (props: Props) => {
  const router = useRouter();
  const { user } = useUser();
  const [data, setData] = useState([
    { date: 'Today', breastfeeding: '00:12:30', liquid: null },
    { date: '12 May 24', breastfeeding: '00:00:00', liquid: null },
    { date: '11 May 24', breastfeeding: '00:20:25', liquid: null },
    { date: '10 May 24', breastfeeding: '00:00:00', liquid: null },
    { date: '18 May 24', breastfeeding: '00:00:00', liquid: null },
  ]);

  useEffect(() => {
    const fetchFeedingHistory = async () => {
      if (!user) {
        Alert.alert('Error', 'User not authenticated.');
        return;
      }

      try {
        const { data: profileData, error } = await supabase
          .from('Profiles')
          .select('FEED_DATE_1, FEED_TIME_1, FEED_DATE_2, FEED_TIME_2, FEED_DATE_3, FEED_TIME_3, FEED_DATE_4, FEED_TIME_4, FEED_DATE_5, FEED_TIME_5')
          .eq('email', user.email)
          .single();

        if (error) {
          console.error('Error fetching feeding history:', error);
          Alert.alert('Error', 'Failed to fetch feeding history.');
          return;
        }

        const fetchedData = [
          { date: profileData.FEED_DATE_1, breastfeeding: profileData.FEED_TIME_1, liquid: null },
          { date: profileData.FEED_DATE_2, breastfeeding: profileData.FEED_TIME_2, liquid: null },
          { date: profileData.FEED_DATE_3, breastfeeding: profileData.FEED_TIME_3, liquid: null },
          { date: profileData.FEED_DATE_4, breastfeeding: profileData.FEED_TIME_4, liquid: null },
          { date: profileData.FEED_DATE_5, breastfeeding: profileData.FEED_TIME_5, liquid: null },
        ];

        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching feeding history:', error);
        Alert.alert('Error', 'An error occurred while fetching feeding history.');
      }
    };

    fetchFeedingHistory();
  }, [user]);

  const renderRow = ({ item }: any) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.breastfeeding}</Text>
      <Text style={styles.cell}>{item.liquid}</Text>
    </View>
  );

  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <View style={styles.headerProfile}>
          <MaterialIcons name="cancel" size={30} color="#000" onPress={() => router.back()} />
          <Text style={styles.header}>Summary</Text>
          
        </View>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Date</Text>
          <Text style={styles.headerText}>Total Breastfeeding</Text>
          <Text style={styles.headerText}>Total Liquid</Text>
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

export default feedingHistory;

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