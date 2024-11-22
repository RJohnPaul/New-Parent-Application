import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  ScreenWrapper  from '../../components/ScreenWrapper';


const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const week2Image = require('../../assets/images/2week 1.png');





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
            <View style={styles.week1s}>
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
            <View style={styles.week1}>
            <Text style={styles.weekNumber}>8</Text></View>
            </TouchableOpacity>

            
           
            </View>
          
        
        
      

      {/* Image and Details */}
      
      <View style={styles.content}>
      <View style={styles.wholeContainer}>
        <Image
          source={week2Image}
          style={styles.weekimage}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>WEEK - 2</Text>
          <Text style={styles.infoText}>Height:</Text>
          <Text style={styles.infoText1}>46.9 - 56.8 cm</Text>
          <Text style={styles.infoText}>Weight:</Text>
          <Text style={styles.infoText1}>2.48 - 5.51 kg</Text>
        </View>
        </View>
        
      </View>
      <View style={styles.content}>

      <Text style={styles.sectionTitle}>Your newborn in week 2</Text>
          <Text style={styles.sectionContent}>
            Woo-hoo! You made it through the first week with your newborn! The first week is usually the hardest. You both are working out your new roles as parents, so be patient with yourself and your partner. By now your baby is more stable.
          </Text>


          <Text style={styles.sectionTitle}>Respiratory system</Text>
          <Text style={styles.sectionContent}>
          By the second week, the newborn’s respiratory system is more adapted to life outside the womb. Their breathing can still be irregular, with periodic breathing patterns that include rapid breaths followed by brief pauses. This is normal for many newborns and reflects the maturation of their central nervous system as it regulates breathing. The baby predominantly breathes through their nose, which is essential for feeding and breathing simultaneously.

          </Text>

          <Text style={styles.sectionTitle}>Digestive system</Text>
          <Text style={styles.sectionContent}>
          The baby’s digestive system is progressively learning to process and absorb milk. By the second week, their stools have usually transitioned from dark, sticky meconium to a softer, mustard-yellow color if they are breastfed or tan to brown if formula-fed. The frequency of bowel movements can vary; some newborns may have several per day, while others may only go once every few days. The digestive tract is still developing, so the baby may experience gassiness or minor discomfort as it adapts.

          </Text>

          <Text style={styles.sectionTitle}>Weight</Text>
          <Text style={styles.sectionContent}>
          Newborns often lose a bit of weight in the first few days after birth due to the expulsion of fluids but should start regaining it by the second week. By this time, many babies have returned to or exceeded their birth weight, with an average gain of 150-200 grams (5-7 ounces) per week. Regular weight checks help monitor healthy growth, ensuring the baby is feeding well and thriving.

            </Text>

            <Text style={styles.sectionTitle}>Skin</Text>
          <Text style={styles.sectionContent}>The newborn’s skin is becoming smoother and more consistent in color as circulation improves. While peeling skin and dryness from the protective vernix caseosa are normal and decrease by the second week, some babies may develop newborn acne or small rashes like erythema toxicum, which typically resolve without intervention. The skin may still be sensitive, requiring gentle care and minimal exposure to harsh products.
          </Text>
          
          <Text style={styles.sectionTitle}>Sleep</Text>
          <Text style={styles.sectionContent}>During the second week, newborns continue to sleep for the majority of the day, averaging 14-17 hours in total. Their sleep cycles are short, lasting around 50-60 minutes, with brief periods of waking in between, usually for feeding and changing. Newborns do not yet have a clear day-night sleep pattern, as their circadian rhythm is still developing, so they may wake frequently at night.

            
            </Text>
            <Text style={styles.sectionTitle}>Mood</Text>
          <Text style={styles.sectionContent}>During the second week, newborns continue to sleep for the majority of the day, averaging 14-17 hours in total. Their sleep cycles are short, lasting around 50-60 minutes, with brief periods of waking in between, usually for feeding and changing. Newborns do not yet have a clear day-night sleep pattern, as their circadian rhythm is still developing, so they may wake frequently at night.

            
            </Text>
           
            <Text style={styles.sectionTitle}>Genitals</Text>
          <Text style={styles.sectionContent}>The genitals of newborns may still show the effects of maternal hormones during the second week. In male babies, the scrotum can remain swollen, which usually resolves as fluid retention decreases. Testes are generally descended by this time. In female babies, the labia may be slightly swollen, and some may have a white or blood-tinged discharge known as pseudo-menstruation, which is harmless and temporary. Both male and female newborns may have breast tissue swelling due to maternal hormones, which typically subsides within a few weeks.
            
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