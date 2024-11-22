import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  ScreenWrapper  from '../../components/ScreenWrapper';


const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const week6Image = require('../../assets/images/6week 1.png');





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
            <View style={styles.week1s}>
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
          source={week6Image}
          style={styles.weekimage}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>WEEK - 6</Text>
          <Text style={styles.infoText}>Height:</Text>
          <Text style={styles.infoText1}>48.21 - 59.31 cm</Text>
          <Text style={styles.infoText}>Weight:</Text>
          <Text style={styles.infoText1}>4.88 - 6.01 kg</Text>
        </View>
        </View>
        
      </View>
      <View style={styles.content}>
      <Text style={styles.sectionTitle}>Your newborn in week 6</Text>
          <Text style={styles.sectionContent}>
          “You’re now at the sixth week—great job! This week is often filled with more interaction as your baby starts cooing and showing early signs of communication. The days may still be busy and challenging, but you’re adapting beautifully. Continue to find joy in the little moments and know that your patience and love are helping your baby thrive.”

          </Text>

          <Text style={styles.sectionTitle}>Respiratory system</Text>
          <Text style={styles.sectionContent}>By the sixth week, a newborn’s respiratory system is more developed and consistent. Breathing is typically smooth and even, though occasional noisy breathing can still happen due to nasal congestion. The baby’s ability to regulate their breathing has improved, making it easier to feed and sleep without significant interruptions. Parents should continue to monitor for any signs of respiratory distress, such as labored breathing or persistent wheezing.

            
          </Text>

          <Text style={styles.sectionTitle}>Digestive system</Text>
          <Text style={styles.sectionContent}>The digestive system at six weeks is more adapted, and the baby is more accustomed to feedings. Bowel movements may be more predictable but can still vary in frequency. Breastfed babies may have looser, yellow stools, while formula-fed babies may have more solid, brownish stools. Some babies may experience periods of increased gassiness or reflux, especially during growth spurts when feeding frequency might increase. Burping and keeping the baby upright after feedings can help alleviate discomfort.

            
          </Text>

          <Text style={styles.sectionTitle}>Weight</Text>
          <Text style={styles.sectionContent}>Babies continue to gain weight steadily, usually around 150-200 grams (5-7 ounces) per week. By the sixth week, many babies have noticeably filled out with more defined chubby cheeks, rolls on their arms and legs, and increased body fat. This growth supports healthy development, and regular pediatric check-ups monitor the baby’s weight to ensure they are following an appropriate growth curve. Parents may need to transition their baby to larger-sized clothing as they outgrow newborn sizes.

            
            </Text>

            <Text style={styles.sectionTitle}>Skin</Text>
          <Text style={styles.sectionContent}>By the sixth week, a baby’s skin is typically clear and smooth, with most of the initial newborn rashes or peeling resolved. Some babies may still experience cradle cap, characterized by flaky, scaly patches on the scalp, but this condition is usually harmless and temporary. Gentle care, such as washing the scalp with a mild baby shampoo and using a soft brush, can help manage cradle cap. The baby’s skin tone and texture are generally even by this stage.
          </Text>
          
          <Text style={styles.sectionTitle}>Sleep</Text>
          <Text style={styles.sectionContent}>Sleep patterns might start to shift slightly as the baby becomes more attuned to the difference between day and night. The baby still sleeps about 14-17 hours in a 24-hour period, but parents may start noticing longer nighttime stretches between feedings. The baby’s sleep cycle is still developing, so waking every few hours is normal. Establishing a bedtime routine, such as a warm bath, gentle rocking, and dim lighting, can help the baby associate these activities with sleep and lay the groundwork for more structured sleeping habits.


            
            </Text>
            <Text style={styles.sectionTitle}>Mood</Text>
          <Text style={styles.sectionContent}>At six weeks, the baby’s mood becomes more expressive. They may start to smile more responsively, showing the first genuine social smiles, which are a significant milestone for bonding with caregivers. Babies may coo or make other vocal sounds as they start to experiment with their voice. Fussiness may peak around this time, often in the late afternoons or evenings, as the baby’s nervous system continues to mature. However, parents may find that consistent soothing methods, such as swaddling, rocking, or white noise, help calm the baby.

            
            </Text>
           
            <Text style={styles.sectionTitle}>Genitals</Text>
          <Text style={styles.sectionContent}>By the sixth week, the newborn’s genitals typically look proportionate, and any previous swelling or hormonal effects have likely resolved. Breast tissue swelling, if present, usually disappears by this stage. It is essential to continue maintaining proper hygiene, especially during diaper changes, to avoid irritation and ensure the baby remains comfortable.

            
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