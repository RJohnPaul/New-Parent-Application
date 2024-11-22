import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  ScreenWrapper  from '../../components/ScreenWrapper';

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const month7Image = require('../../assets/images/month7.png');





const BabyInfoScreen = () => {
    const router = useRouter();
  return (

    <ScreenWrapper bg='white'>
      <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
      <MaterialIcons name="cancel" size={30} color="#000" onPress={() => router.push('/(tabs)/evolution')} />
        <Text style={styles.headerText}>Evolution</Text>
      
        </View>
        
        <View style={styles.monthsContainer}>
        <TouchableOpacity onPress={() => router.push('/evolutionPresets/month3' as any)}>
          <View style={styles.month3}>
            <Text style={styles.monthNumber}>3</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/month4' as any)}>
            <View style={styles.month3}>
            <Text style={styles.monthNumber}>4</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/month5' as any)}>
            <View style={styles.month3}>
            <Text style={styles.monthNumber}>5</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/month6' as any)}>
            <View style={styles.month3}>
            <Text style={styles.monthNumber}>6</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/month7' as any)}>
            <View style={styles.month3s}>
            <Text style={styles.monthNumber}>7</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/month8' as any)}>
            <View style={styles.month3}>
            <Text style={styles.monthNumber}>8</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/month9' as any)}>
            <View style={styles.month3}>
            <Text style={styles.monthNumber}>9</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/month10' as any)}>
            <View style={styles.month3}>
            <Text style={styles.monthNumber}>10</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/month11' as any)}>
            <View style={styles.month3}>
            <Text style={styles.monthNumber}>11</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/month12' as any)}>
            <View style={styles.month3}>
            <Text style={styles.monthNumber}>12</Text></View>
            </TouchableOpacity>

            
           
            </View>
          
        
        
      

      {/* Image and Details */}
      
      <View style={styles.content}>
      <View style={styles.wholeContainer}>
        <Image
          source={month7Image}
          style={styles.monthimage}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>MONTH - 7</Text>
          <Text style={styles.infoText}>Height:</Text>
          <Text style={styles.infoText1}>64.1 - 75.8 cm</Text>
          <Text style={styles.infoText}>Weight:</Text>
          <Text style={styles.infoText1}>6.41 - 11.07 kg</Text>
        </View>
        </View>
        
      </View>
      <View style={styles.content}>
      <Text style={styles.sectionTitle}>Your 7 month old baby </Text>
          <Text style={styles.sectionContent}>Hello and welcome to this comprehensive overview of a 7-month-old baby’s development! By this stage, babies are becoming more mobile, expressive, and curious about their surroundings. This is an exciting time for both parents and their little ones, filled with new achievements and interactive moments. Let’s dive into the key aspects of development for a 7-month-old baby.

        
          </Text>

          <Text style={styles.sectionTitle}>Social and Emotional Development</Text>
          <Text style={styles.sectionContent}>At 7 months, babies are highly social and responsive to their environment. They engage with familiar people through smiles, laughter, and babbling and may begin to show stranger anxiety by reacting differently to unfamiliar faces. This is a sign of healthy attachment and recognition. Babies often enjoy playing interactive games like peekaboo and may mimic simple gestures, such as waving or clapping. They communicate their needs and emotions more clearly through a range of sounds and facial expressions, helping caregivers better understand their moods and preferences.

            
          </Text>

          <Text style={styles.sectionTitle}>Digestive system</Text>
          <Text style={styles.sectionContent}>At this stage, the digestive system of a 7-month-old is better equipped to handle a variety of foods. Most babies are introduced to solid foods by now, including purees, mashed fruits, vegetables, and small amounts of protein like soft-cooked meat or lentils. Breast milk or formula still remains a primary source of nutrition, but solid foods help babies explore different tastes and textures. Parents should watch for signs of food allergies and introduce new foods one at a time.

           
          </Text>

          <Text style={styles.sectionTitle}>Weight</Text>
          <Text style={styles.sectionContent}>At this stage, the digestive system of a 7-month-old is better equipped to handle a variety of foods. Most babies are introduced to solid foods by now, including purees, mashed fruits, vegetables, and small amounts of protein like soft-cooked meat or lentils. Breast milk or formula still remains a primary source of nutrition, but solid foods help babies explore different tastes and textures. Parents should watch for signs of food allergies and introduce new foods one at a time.

            
            </Text>

            <Text style={styles.sectionTitle}>Skin</Text>
          <Text style={styles.sectionContent}>The skin of a 7-month-old baby is still delicate but more resilient than in earlier months. Common skin conditions such as eczema may appear, and keeping the skin hydrated with gentle, fragrance-free lotions is recommended. Babies at this age are often exploring more, which means parents should be mindful of potential irritants, like grass, carpets, or pet hair, that could lead to rashes or irritation.

</Text>
          
          <Text style={styles.sectionTitle}>Sleep</Text>
          <Text style={styles.sectionContent}>A 7-month-old baby usually needs around 12 to 15 hours of sleep in a 24-hour period, including two to three naps during the day. Many babies sleep for longer stretches at night, which is helpful for parents and caregivers. Consistent sleep routines, such as a calming bedtime ritual with reading or lullabies, help reinforce healthy sleep habits and make transitions to bedtime smoother.

            
            </Text>
            <Text style={styles.sectionTitle}>Mood</Text>
          <Text style={styles.sectionContent}>Babies at 7 months show a range of emotions, from joy and excitement to frustration. They express happiness through giggles, squeals, and wide smiles and may show determination when trying to reach for toys or objects just out of reach. As they begin to develop a stronger sense of identity, they may show signs of independence by attempting to feed themselves or explore their environment more actively. Frustration can occur when they are unable to accomplish a task, but this is an important part of developing resilience and problem-solving skills.
            
            </Text>
           
            <Text style={styles.sectionTitle}>Genitals</Text>
          <Text style={styles.sectionContent}> The genitals of a 7-month-old baby continue to develop naturally, with gradual growth. Hygiene remains important, especially as babies become more mobile and prone to contact with different surfaces. Regular diaper changes and cleaning with gentle, unscented products help prevent rashes and irritation.

            
            </Text>
        </View>
    
    






    </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
   
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
  monthsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
    
  },
  month3: {
    width: 28,
    height: 28,
    borderRadius: 16,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    flexDirection: 'row',
   
    

  },
  month3s:{
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#CBE6F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    flexDirection: 'row',
  },
  monthNumber: {
    fontSize: 16,
    color:'#0078A4'
  },
  wholeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  content: {
    padding: 16,
    marginBottom: -19,
  },
  monthimage: {
    width: '47%',
    height: 193,
    borderRadius: 8,
  },
  infoBox: {
    marginVertical: 16,
    backgroundColor:'#D8D8D8',
    width: '47%',
    height: 193,
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
  },
  infoText: {
    fontSize: 16,
    fontWeight: '600',
  },
  infoText1: {
    fontWeight: 'light',
    marginBottom: 13,

  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default BabyInfoScreen;