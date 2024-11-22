import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  ScreenWrapper  from '../../components/ScreenWrapper';


const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const week8Image = require('../../assets/images/8week 1.png');





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
            <View style={styles.week1}>
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
            <View style={styles.week1s}>
            <Text style={styles.weekNumber}>8</Text></View>
            </TouchableOpacity>

            
           
            </View>
          
        
        
      

      {/* Image and Details */}
      
      <View style={styles.content}>
      <View style={styles.wholeContainer}>
        <Image
          source={week8Image}
          style={styles.weekimage}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>WEEK - 8</Text>
          <Text style={styles.infoText}>Height:</Text>
          <Text style={styles.infoText1}>52.78 - 61.56 cm</Text>
          <Text style={styles.infoText}>Weight:</Text>
          <Text style={styles.infoText1}>7.42 - 8.90 kg</Text>
        </View>
        </View>
        
      </View>
      <View style={styles.content}>
      <Text style={styles.sectionTitle}>Your newborn in week 8</Text>
          <Text style={styles.sectionContent}>
          “Wow, you’ve made it to the eighth week—two months already! Your baby is growing fast and becoming more social, with smiles and coos becoming part of your daily interactions. You might even start seeing early signs of laughter. The journey of parenthood can be exhausting, but you’ve shown incredible strength and love. Keep nurturing that bond and celebrating the milestones, both big and small.”
          </Text>

          <Text style={styles.sectionTitle}>Respiratory system</Text>
          <Text style={styles.sectionContent}>By the eighth week, the baby’s respiratory system is strong and well-coordinated, showing consistent and steady breathing patterns. Breathing is generally quiet, though occasional congestion or brief noisy breathing might still occur, especially when the baby is feeding or lying down. The baby’s lungs and respiratory muscles continue to develop, supporting more active movements like cooing and babbling. Parents should remain attentive to any signs of persistent breathing difficulties, but overall, breathing is more stable.

            
          </Text>

          <Text style={styles.sectionTitle}>Digestive system</Text>
          <Text style={styles.sectionContent}>The digestive system is now more accustomed to regular feedings, and many babies experience more predictable digestion. Bowel movement frequency varies; breastfed babies often have softer, yellowish stools that may appear less frequent, while formula-fed babies tend to have firmer, brownish stools. Gas and mild reflux are still common but should be less frequent as the baby’s digestive system matures. Burping and holding the baby upright after feeding continue to be helpful for managing any residual digestive discomfort.


            
          </Text>

          <Text style={styles.sectionTitle}>Weight</Text>
          <Text style={styles.sectionContent}>By the eighth week, babies generally show consistent weight gain, typically around 150-200 grams (5-7 ounces) per week. They continue to gain body fat, contributing to their rounder appearance, chubby cheeks, and fuller limbs. This weight gain helps with temperature regulation and energy reserves. Babies at this stage may have outgrown their newborn clothing and moved on to larger sizes. Regular check-ups help track this growth and ensure that the baby remains on a healthy development path.


            
            </Text>

            <Text style={styles.sectionTitle}>Skin</Text>
          <Text style={styles.sectionContent}>The baby’s skin is generally clear and smooth, with most early newborn rashes resolved by the eighth week. Some babies might still have minor skin conditions such as cradle cap or dry patches, but these usually require minimal treatment and improve over time. Routine skincare, including moisturizing and using gentle, fragrance-free products, helps maintain skin health. Parents should also continue protecting the baby’s skin from sun exposure, using protective clothing and shade when outside.

</Text>
          
          <Text style={styles.sectionTitle}>Sleep</Text>
          <Text style={styles.sectionContent}>Sleep patterns may begin to show improvement, with the baby potentially sleeping longer stretches at night. Total sleep duration remains around 14-17 hours a day, with nighttime sleep periods possibly lasting up to 5-6 hours. However, night feedings are still common. Babies may also take several naps during the day. Establishing a consistent bedtime routine and sleep environment can reinforce good sleep habits and help the baby gradually learn to fall asleep independently.

            </Text>
            <Text style={styles.sectionTitle}>Mood</Text>
          <Text style={styles.sectionContent}>At eight weeks, the baby’s mood becomes more expressive and engaging. The baby may smile more intentionally, responding to familiar faces and voices, and may begin to laugh or coo more frequently. They are starting to show more interest in their surroundings and may track objects with their eyes or turn their head towards sounds. While fussiness is still common, it may be easier for parents to recognize and respond to their baby’s cues, whether related to hunger, tiredness, or the need for comfort. Soothing techniques like gentle rocking or swaddling can be effective in calming the baby.

            
            </Text>
           
            <Text style={styles.sectionTitle}>Genitals</Text>
          <Text style={styles.sectionContent}>By the eighth week, the genitals appear proportionate, and any hormonal effects such as early swelling or breast tissue enlargement have usually resolved. Parents should continue practicing good hygiene during diaper changes to prevent rashes and irritation. This involves cleaning with water or gentle wipes and allowing the skin to dry before putting on a fresh diaper. If diaper rash occurs, barrier creams or ointments can help.

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