import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  ScreenWrapper  from '../../components/ScreenWrapper';


const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const week3Image = require('../../assets/images/3week 1.png');





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
            <View style={styles.week1s}>
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
            <View style={styles.week1}>
            <Text style={styles.weekNumber}>8</Text></View>
            </TouchableOpacity>

            
           
            </View>
          
        
        
      

      {/* Image and Details */}
      
      <View style={styles.content}>
      <View style={styles.wholeContainer}>
        <Image
          source={week3Image}
          style={styles.weekimage}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>WEEK - 3</Text>
          <Text style={styles.infoText}>Height:</Text>
          <Text style={styles.infoText1}>48.0 - 57.9 cm</Text>
          <Text style={styles.infoText}>Weight:</Text>
          <Text style={styles.infoText1}>2.70 - 5.53 kg</Text>
        </View>
        </View>
        
      </View>
      <View style={styles.content}>
      <Text style={styles.sectionTitle}>Your newborn in week 3</Text>
          <Text style={styles.sectionContent}>
          “You’re now in the third week with your baby—well done! By now, you might be feeling a bit more confident in your routine, even if things are still unpredictable. Your baby is becoming more aware of their surroundings, and you may start to recognize certain patterns in their behavior. Take a moment to celebrate these little milestones, and remember, it’s okay to ask for help or take breaks when needed.”

          </Text>

          <Text style={styles.sectionTitle}>Respiratory system</Text>
          <Text style={styles.sectionContent}>
          By the third week, the newborn’s respiratory system continues to mature, and breathing patterns start to become a bit more stable, although periodic breathing (pauses followed by rapid breathing) can still occur. The baby remains a nasal breather, which aids in coordinated feeding and breathing. The risk of irregular breathing decreases, but parents should remain attentive to any signs of difficulty, such as persistent wheezing or flaring nostrils.


          </Text>

          <Text style={styles.sectionTitle}>Digestive system</Text>
          <Text style={styles.sectionContent}>The digestive system is now more efficient at processing breast milk or formula, which helps support healthy growth. The baby’s bowel movements may start to settle into a more predictable pattern, though the frequency can still vary. Breastfed babies typically continue to have soft, yellow, and seedy stools, while formula-fed babies may have firmer, brownish stools. Gas and spit-up are still common due to the immature digestive tract, but as the weeks progress, the baby may become more accustomed to feedings and show fewer signs of digestive discomfort.

            
          </Text>

          <Text style={styles.sectionTitle}>Weight</Text>
          <Text style={styles.sectionContent}>Most babies will have surpassed their birth weight by the third week and continue to gain weight steadily, with an expected increase of approximately 150-200 grams (5-7 ounces) per week. This consistent weight gain is an indicator that the baby is feeding well and developing normally. Pediatricians may check the baby’s weight at regular visits to monitor growth patterns and ensure healthy development.

           
            </Text>

            <Text style={styles.sectionTitle}>Skin</Text>
          <Text style={styles.sectionContent}>The skin becomes softer and less flaky as the initial peeling subsides. Some babies may still have patches of dryness, but these tend to resolve over time. Newborn rashes like erythema toxicum or baby acne may still be present but generally do not require treatment. The baby’s skin tone continues to become more even as circulation improves. Newborns should be protected from excessive sun exposure, as their skin remains sensitive.
          </Text>
          
          <Text style={styles.sectionTitle}>Sleep</Text>
          <Text style={styles.sectionContent}>The baby continues to sleep most of the day, with a total of 14-17 hours still being typical. Sleep may start to show slight improvements in duration, though short cycles and frequent waking remain the norm. Some babies might begin to have slightly longer stretches of sleep at night, but day-night confusion often persists. Routine and gentle sleep cues can help encourage better sleep habits as the baby grows.

            </Text>
            <Text style={styles.sectionTitle}>Mood</Text>
          <Text style={styles.sectionContent}>By the third week, the newborn’s mood still involves alternating between periods of calm, alertness, and fussiness. They may respond more to the presence of caregivers and begin to show brief moments of engagement or eye contact. Crying remains their primary mode of communication, but parents may start to recognize certain cries that indicate specific needs like hunger, tiredness, or discomfort. Fussiness can peak around this period as the baby’s nervous system continues to develop and adjust to external stimuli.

            </Text>
           
            <Text style={styles.sectionTitle}>Genitals</Text>
          <Text style={styles.sectionContent}>Maternal hormone effects may still be noticeable, though they usually begin to decrease by the third week. In male babies, the scrotum may no longer appear as swollen, and in females, any discharge or swelling of the labia typically diminishes. Breast tissue swelling in both boys and girls, if present, may start to resolve. These hormonal influences are normal and gradually disappear without intervention.


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