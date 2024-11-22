import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  ScreenWrapper  from '../../components/ScreenWrapper';

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const month6Image = require('../../assets/images/month6.png');





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
            <View style={styles.month3s}>
            <Text style={styles.monthNumber}>6</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/month7' as any)}>
            <View style={styles.month3}>
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
          source={month6Image}
          style={styles.monthimage}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>MONTH - 6</Text>
          <Text style={styles.infoText}>Height:</Text>
          <Text style={styles.infoText1}>62.6 - 74.2 cm</Text>
          <Text style={styles.infoText}>Weight:</Text>
          <Text style={styles.infoText1}>6.41 - 10.64 kg</Text>
        </View>
        </View>
        
      </View>
      <View style={styles.content}>
      <Text style={styles.sectionTitle}>Your 6 month old baby </Text>
          <Text style={styles.sectionContent}>Hello and welcome to this exciting overview of a 6-month-old baby’s development! At half a year old, babies have reached an incredible stage of growth and discovery. This milestone marks significant physical and cognitive achievements, as well as more complex social interactions. Parents and caregivers often find this time filled with delightful moments of bonding and fun. Let’s explore the different aspects of development for a 6-month-old baby.

        
          </Text>

          <Text style={styles.sectionTitle}>Social and Emotional Development</Text>
          <Text style={styles.sectionContent}>By the sixth month, babies are highly interactive and love engaging with their surroundings. They respond more actively to familiar faces, often reaching out with their arms to be picked up. Babies at this age recognize their own name and may turn toward the sound when called. They enjoy vocal play, laughing, squealing, and making a variety of sounds to express joy or curiosity. This is also a stage where babies begin to show preferences for certain people, creating stronger attachments and bonds.

            
          </Text>

          <Text style={styles.sectionTitle}>Digestive system</Text>
          <Text style={styles.sectionContent}>The digestive system of a 6-month-old is more mature, and most babies are ready for the gradual introduction of solid foods. This is an exciting phase where babies might start with simple purees like mashed vegetables, fruits, or iron-fortified cereals, alongside breast milk or formula. Parents are encouraged to introduce one new food at a time to monitor any potential allergies. Babies’ digestion at this stage typically handles these new foods well as they start transitioning toward more varied textures and flavors.

            
          </Text>

          <Text style={styles.sectionTitle}>Weight</Text>
          <Text style={styles.sectionContent}> A 6-month-old baby’s weight gain may slow slightly compared to the earlier months, but they typically weigh about 16 to 20 pounds for boys and 15 to 19 pounds for girls. Growth charts help track their development and ensure they remain within healthy ranges. Regular checkups with the pediatrician are crucial to monitoring this growth.

           
            </Text>

            <Text style={styles.sectionTitle}>Skin</Text>
          <Text style={styles.sectionContent}>A 6-month-old’s skin is more robust than in the earlier months, but it still requires gentle care. Most babies will have grown out of conditions like cradle cap by this time. Parents should continue using gentle, fragrance-free products and ensure the baby’s skin stays hydrated to prevent dryness or irritation, especially if the baby is crawling or moving around more and coming into contact with different surfaces.
          </Text>
          
          <Text style={styles.sectionTitle}>Sleep</Text>
          <Text style={styles.sectionContent}> At six months, many babies have more regular sleep patterns, often sleeping 12 to 15 hours in a 24-hour period. This usually includes 2–3 naps during the day and longer stretches at night. Some babies may start sleeping through the night consistently. A solid bedtime routine helps reinforce healthy sleep habits and gives parents some much-needed rest as well.

            
            </Text>
            <Text style={styles.sectionTitle}>Mood</Text>
          <Text style={styles.sectionContent}> A 6-month-old baby is more expressive than ever. Their mood can shift from joyful laughter during play to curiosity as they explore new toys or their environment. Babies often enjoy interactive activities, such as playing with rattles or reaching for objects, which help develop their hand-eye coordination. While they are generally happy and curious, they may show frustration if they cannot reach an object or if a toy is taken away. This range of emotions reflects their growing understanding of the world.
            
            </Text>
           
            <Text style={styles.sectionTitle}>Genitals</Text>
          <Text style={styles.sectionContent}>The genitals of a 6-month-old baby continue to grow and develop in a healthy manner, with no significant changes beyond natural growth. Parents should continue to practice good hygiene, with frequent diaper changes and gentle cleaning to prevent rashes and discomfort. As babies become more active, parents should be vigilant in ensuring the diaper area stays clean and dry.


            
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