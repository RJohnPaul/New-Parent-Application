import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  ScreenWrapper  from '../../components/ScreenWrapper';

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const month8Image = require('../../assets/images/month8.png');





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
            <View style={styles.month3}>
            <Text style={styles.monthNumber}>7</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/month8' as any)}>
            <View style={styles.month3s}>
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
          source={month8Image}
          style={styles.monthimage}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>MONTH - 8</Text>
          <Text style={styles.infoText}>Height:</Text>
          <Text style={styles.infoText1}>65.5 - 77.2 cm</Text>
          <Text style={styles.infoText}>Weight:</Text>
          <Text style={styles.infoText1}>6.68 - 11.43 kg</Text>
        </View>
        </View>
        
      </View>
      <View style={styles.content}>
      <Text style={styles.sectionTitle}>Your 8 month old baby </Text>
          <Text style={styles.sectionContent}>
        
          </Text>

          <Text style={styles.sectionTitle}>Social and Emotional Development</Text>
          <Text style={styles.sectionContent}>By the 8th month, babies are highly social and eager to interact with those around them. They often form strong attachments to their caregivers and may show signs of separation anxiety when a familiar person leaves the room. Babies at this stage enjoy engaging in interactive games like peekaboo and pat-a-cake and may begin mimicking simple gestures, such as waving or clapping. Their communication skills advance with more complex babbling that may start to sound like real words. They recognize and respond to their name and may show interest in social cues like smiles and laughter.

            
          </Text>

          <Text style={styles.sectionTitle}>Digestive system</Text>
          <Text style={styles.sectionContent}>By 8 months, a baby’s digestive system is more developed and capable of handling a greater variety of solid foods. Most babies are eating a combination of breast milk or formula along with pureed or mashed foods, such as fruits, vegetables, grains, and proteins like chicken or lentils. Parents can introduce new textures and flavors to broaden the baby’s palate, always being mindful of potential allergies and introducing one new food at a time.

            
          </Text>

          <Text style={styles.sectionTitle}>Weight</Text>
          <Text style={styles.sectionContent}>The average weight of an 8-month-old baby typically continues to increase, though the rate of weight gain may slow down compared to earlier months as they become more active. On average, boys may weigh between 18 to 22 pounds, while girls may weigh between 17 to 21 pounds. Monitoring growth patterns during regular pediatric checkups helps ensure that the baby’s development is on track.


            
            </Text>

            <Text style={styles.sectionTitle}>Skin</Text>
          <Text style={styles.sectionContent}>An 8-month-old baby’s skin is still sensitive, but it continues to strengthen as they grow. Babies at this age are often exploring their environment more, which may expose their skin to new elements that could cause irritation or minor rashes. Parents should maintain proper skin care with gentle, fragrance-free products and ensure that the baby’s skin stays hydrated. Protective clothing and sunscreen are important when spending time outdoors.</Text>
          
          <Text style={styles.sectionTitle}>Sleep</Text>
          <Text style={styles.sectionContent}> At 8 months, babies generally need around 12 to 15 hours of sleep within a 24-hour period. This often includes two naps during the day and a longer stretch at night. Some babies may go through sleep regressions, which can cause changes in their sleep patterns. Establishing a consistent bedtime routine, such as a calming bath, storytime, or gentle rocking, can help reinforce good sleep habits and provide comfort.

            
            </Text>
            <Text style={styles.sectionTitle}>Mood</Text>
          <Text style={styles.sectionContent}>An 8-month-old’s mood is vibrant and full of expression. Babies at this age show joy, curiosity, and excitement through their actions, such as clapping, giggling, and bouncing. They are also developing preferences for certain toys or activities, which helps reveal aspects of their personality. Babies may become frustrated when they can’t achieve something, like reaching for an object that’s out of grasp, but this is part of building problem-solving skills and resilience.

            
            </Text>
           
            <Text style={styles.sectionTitle}>Genitals</Text>
          <Text style={styles.sectionContent}>The development of the genitals in an 8-month-old continues normally, with gradual growth and no major changes. Hygiene remains essential, especially as babies become more active and mobile. Parents should maintain frequent diaper changes and clean the area gently with unscented products to prevent rashes and discomfort.


            
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