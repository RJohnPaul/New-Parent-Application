import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  ScreenWrapper  from '../../components/ScreenWrapper';


const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const week4Image = require('../../assets/images/4week 1.png');





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
        
        <View style={styles.weeksContainer}>
        <TouchableOpacity onPress={() => router.push('/evolutionPresets/week1' as any)}>
          <View style={styles.week1}>
            <Text style={styles.weekNumber}>1</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/week2' as any)}>
            <View style={styles.week1}>
            <Text style={styles.weekNumber}>2</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/week3' as any)}>
            <View style={styles.week1}>
            <Text style={styles.weekNumber}>3</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/week4' as any)}>
            <View style={styles.week1s}>
            <Text style={styles.weekNumber}>4</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/week5' as any)}>
            <View style={styles.week1}>
            <Text style={styles.weekNumber}>5</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/week6' as any)}>
            <View style={styles.week1}>
            <Text style={styles.weekNumber}>6</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/week7' as any)}>
            <View style={styles.week1}>
            <Text style={styles.weekNumber}>7</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/week8' as any)}>
            <View style={styles.week1}>
            <Text style={styles.weekNumber}>8</Text></View>
            </TouchableOpacity>

            
           
            </View>
          
        
        
      

      {/* Image and Details */}
      
      <View style={styles.content}>
      <View style={styles.wholeContainer}>
        <Image
          source={week4Image}
          style={styles.weekimage}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>WEEK - 4</Text>
          <Text style={styles.infoText}>Height:</Text>
          <Text style={styles.infoText1}>46.1 - 56.7 cm</Text>
          <Text style={styles.infoText}>Weight:</Text>
          <Text style={styles.infoText1}>3.11 - 5.01 kg</Text>
        </View>
        </View>
        
      </View>
      <View style={styles.content}>
      <Text style={styles.sectionTitle}>Your newborn in week 4</Text>
          <Text style={styles.sectionContent}>
          “Welcome to the fourth week with your little one! You’ve officially completed the first month of parenthood—amazing job! By now, you might see your baby making brief eye contact or responding to your voice. It’s a time filled with tiny yet meaningful changes. Continue to lean into your support system, rest when you can, and cherish those moments of connection with your baby.”

          </Text>

          <Text style={styles.sectionTitle}>Respiratory system</Text>
          <Text style={styles.sectionContent}>In the fourth week, the baby’s respiratory system is more stable, and breathing patterns are becoming more consistent. While periodic breathing (pauses and rapid breathing) may still occur, these instances are generally less frequent. The baby continues to breathe primarily through their nose, which is crucial for feeding. The risk of irregular breathing reduces further, but parents should monitor for any signs of distress, such as persistent grunting or retractions.

            
          </Text>

          <Text style={styles.sectionTitle}>Digestive system</Text>
          <Text style={styles.sectionContent}>By the fourth week, the digestive system is better adjusted to processing breast milk or formula, and many babies start to experience more predictable digestion. The frequency of bowel movements may begin to stabilize, though there can still be variability. Breastfed babies often have loose, yellow, seedy stools, while formula-fed babies may have thicker, brownish stools. The baby may continue to have gas, but as their digestive system matures, they may show fewer signs of discomfort after feeding.


            
          </Text>

          <Text style={styles.sectionTitle}>Weight</Text>
          <Text style={styles.sectionContent}>By the fourth week, most babies have surpassed their birth weight and are steadily gaining. Weight gain remains consistent at about 150-200 grams (5-7 ounces) per week, reflecting healthy growth. Pediatricians check the baby’s weight to ensure they are following a normal growth curve. Parents may start noticing that their baby is beginning to fill out, with chubby cheeks and rolls on the arms and legs as fat stores develop.

           
            </Text>

            <Text style={styles.sectionTitle}>Skin</Text>
          <Text style={styles.sectionContent}>The newborn’s skin appears smoother and less flaky by the fourth week, and the initial newborn rashes, like erythema toxicum or baby acne, may be fading or have resolved. The skin tone has typically evened out, and the baby’s color is more stable. Some babies may develop cradle cap on their scalp, which appears as yellowish, scaly patches. Gentle washing and moisturizing can help, but it generally resolves on its own over time.
          </Text>
          <Text style={styles.sectionTitle}>Sleep</Text>
          <Text style={styles.sectionContent}>Sleep patterns may start to show slight improvements as the baby begins to adjust more to a day-night cycle. Total sleep time remains around 14-17 hours a day, but parents might see longer stretches, particularly at night. However, the baby will still wake frequently for feedings. Developing a calming bedtime routine can help lay the groundwork for better sleep habits in the future.

            
            </Text>
            <Text style={styles.sectionTitle}>Mood</Text>
          <Text style={styles.sectionContent}>By the fourth week, the baby’s mood becomes more responsive, and they may have longer periods of alertness where they engage more with their surroundings. Babies may start to make early cooing sounds and show interest in familiar voices and faces. Crying continues to be their main way of communicating needs, but parents might start recognizing patterns in their baby’s behavior. Fussiness may still be present, often related to growth spurts or increased awareness of the world.

            
            </Text>
           
            <Text style={styles.sectionTitle}>Genitals</Text>
          <Text style={styles.sectionContent}>The effects of maternal hormones are usually diminishing by the fourth week. Swelling of the scrotum in male babies and labial swelling or discharge in female babies are typically resolved. Any breast tissue swelling, if present, should also be decreasing. The baby’s genitals may appear more proportionate as they continue to grow. It’s important to maintain gentle hygiene to prevent any irritation or infection.

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
  weeksContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
    
  },
  week1: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    flexDirection: 'row',
   
    

  },
  week1s:{
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#CBE6F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    flexDirection: 'row',
  },
  weekNumber: {
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
  weekimage: {
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