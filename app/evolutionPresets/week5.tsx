import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  ScreenWrapper  from '../../components/ScreenWrapper';


const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const week5Image = require('../../assets/images/5week 1.png');





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
            <View style={styles.week1s}>
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
          source={week5Image}
          style={styles.weekimage}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>WEEK - 5</Text>
          <Text style={styles.infoText}>Height:</Text>
          <Text style={styles.infoText1}>47.7 - 58.5 cm</Text>
          <Text style={styles.infoText}>Weight:</Text>
          <Text style={styles.infoText1}>3.91 - 5.81 kg</Text>
        </View>
        </View>
        
      </View>
      <View style={styles.content}>
      <Text style={styles.sectionTitle}>Your newborn in week 5</Text>
          <Text style={styles.sectionContent}>
          “Congratulations on reaching the fifth week! This week might come with growth spurts and increased feedings, so be prepared for some changes in your baby’s appetite and sleep. You may also start seeing the first signs of social smiles—what a heartwarming sight! Remember to take things one day at a time, and be proud of how far you’ve come.”

          </Text>

          <Text style={styles.sectionTitle}>Respiratory system</Text>
          <Text style={styles.sectionContent}>By the fifth week, a newborn’s respiratory system is stronger and more stable, with fewer instances of irregular breathing patterns. The baby continues to breathe through their nose, which aids in simultaneous feeding and breathing. Parents may notice smoother breathing transitions and more consistent breaths, though occasional grunting or noisy breathing can still happen, particularly when the baby is congested or feeding.

            
          </Text>

          <Text style={styles.sectionTitle}>Digestive system</Text>
          <Text style={styles.sectionContent}>The digestive system is functioning more efficiently, and feedings are more predictable. Bowel movements may continue to become more regular, with breastfed babies typically passing yellow, seedy stools, while formula-fed babies have thicker, more formed stools. Gas and spit-up may still occur as the digestive tract matures, but the baby may show improved comfort after feedings. Some babies might experience growth spurts that can lead to more frequent feedings during this time.

            
          </Text>

          <Text style={styles.sectionTitle}>Weight</Text>
          <Text style={styles.sectionContent}>By the fifth week, babies continue their steady weight gain, typically adding 150-200 grams (5-7 ounces) per week. Their growth is noticeable, with fuller cheeks and added body fat, which supports healthy development. Pediatricians monitor weight gain and overall growth during check-ups to ensure the baby is thriving. Parents may start seeing their baby outgrow some newborn clothing as they fill out and grow taller.

            
            </Text>

            <Text style={styles.sectionTitle}>Skin</Text>
          <Text style={styles.sectionContent}>The baby’s skin is typically smoother and free from most newborn rashes that appeared earlier, like erythema toxicum or baby acne. The skin tone remains stable, and any peeling or dryness from the first weeks is usually resolved. Some babies might still have cradle cap, which can appear as scaly patches on the scalp, but it is harmless and will usually go away over time. Maintaining gentle skincare routines and keeping the baby’s skin moisturized can help</Text>
          
          <Text style={styles.sectionTitle}>Sleep</Text>
          <Text style={styles.sectionContent}>By the fifth week, sleep patterns may begin to show slight signs of improvement, with longer stretches between feedings, particularly at night. The total amount of sleep remains around 14-17 hours a day. Babies may start to have slightly longer periods of alertness during the day. Establishing a consistent bedtime routine can be beneficial for the baby’s sleep cycle and helps set a foundation for longer night sleep in the future.

            </Text>
            <Text style={styles.sectionTitle}>Mood</Text>
          <Text style={styles.sectionContent}>The baby’s mood becomes more interactive, and they may start to show early signs of social smiling. They may begin to respond to voices and faces with more recognition and even try to mimic facial expressions. Periods of fussiness can still be present, particularly during late afternoons or evenings, but parents might find that soothing techniques such as rocking, singing, or gentle swaying are more effective as the baby becomes more responsive. The baby’s crying might also have more identifiable cues, helping parents discern between hunger, tiredness, or discomfort.

            
            </Text>
           
            <Text style={styles.sectionTitle}>Genitals</Text>
          <Text style={styles.sectionContent}>By the fifth week, any swelling or hormonal effects in the genitals that were present earlier have typically resolved. The genitals appear more proportionate as the baby grows, and any temporary breast tissue swelling from maternal hormones is usually reduced or gone. Maintaining good hygiene continues to be important to prevent irritation, particularly with diaper changes.

            
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