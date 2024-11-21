import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  ScreenWrapper  from '../../components/ScreenWrapper';


const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const week7Image = require('../../assets/images/7week 1.png');





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
            <View style={styles.week1s}>
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
          source={week7Image}
          style={styles.weekimage}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>WEEK - 7</Text>
          <Text style={styles.infoText}>Height:</Text>
          <Text style={styles.infoText1}>51.66 - 60.34 cm</Text>
          <Text style={styles.infoText}>Weight:</Text>
          <Text style={styles.infoText1}>5.95 - 6.81 kg</Text>
        </View>
        </View>
        
      </View>
      <View style={styles.content}>
      <Text style={styles.sectionTitle}>Your newborn in week 7</Text>
          <Text style={styles.sectionContent}>
          “Week seven is here, and you’re doing wonderfully! Your baby is likely becoming more alert and expressive, showing signs of recognizing your voice and face more distinctly. It’s a time when small, joyful moments start to shine even brighter. Remember to take care of yourself too, and keep building those precious connections with your little one.”


          </Text>

          <Text style={styles.sectionTitle}>Respiratory system</Text>
          <Text style={styles.sectionContent}>By the seventh week, a baby’s respiratory system is well-established, with steady and regular breathing. The baby’s breathing is generally quiet and smooth, though occasional nasal congestion or noisy breathing may still occur. The respiratory muscles are becoming stronger, supporting the baby’s overall growth. Parents should continue to be mindful of any unusual signs such as persistent rapid or labored breathing, but typical breathing should now appear more coordinated.


            
          </Text>

          <Text style={styles.sectionTitle}>Digestive system</Text>
          <Text style={styles.sectionContent}>The digestive system continues to mature, and the baby may show more consistent feeding habits. Bowel movement patterns can still vary, with breastfed babies often having softer, yellow stools and formula-fed babies having thicker, tan or brown stools. Some babies might experience gassiness, particularly if they are going through a growth spurt and feeding more frequently. Spit-up and mild reflux are still common but usually decrease as the baby becomes more efficient at feeding. Keeping the baby upright after feeding and burping them helps minimize discomfort.

            
          </Text>

          <Text style={styles.sectionTitle}>Weight</Text>
          <Text style={styles.sectionContent}>By the seventh week, the baby’s weight gain remains steady, with an average increase of 150-200 grams (5-7 ounces) per week. The baby’s growth is evident through chubbier limbs, rounded cheeks, and an increase in body fat that helps with temperature regulation and energy storage. Parents may notice their baby moving out of newborn clothing sizes as they grow longer and heavier. Regular pediatric check-ups help track this growth to ensure the baby remains on a healthy trajectory.

            
            </Text>

            <Text style={styles.sectionTitle}>Skin</Text>
          <Text style={styles.sectionContent}>The baby’s skin is typically smooth and clear by the seventh week, with most newborn rashes or dryness resolved. Some babies might still show signs of cradle cap or minor skin irritation, but these are usually manageable and fade over time. Keeping the baby’s skin clean and moisturized with gentle products helps maintain its softness. It is important to continue protecting the baby’s skin from harsh weather or prolonged sun exposure.
          </Text>
          <Text style={styles.sectionTitle}>Sleep</Text>
          <Text style={styles.sectionContent}>Sleep patterns may show gradual changes as the baby starts developing more of a day-night rhythm. While babies still need about 14-17 hours of sleep a day, parents may see slightly longer nighttime sleep stretches, sometimes lasting up to 4-5 hours. However, it is normal for babies to wake up for feedings during the night. Establishing a bedtime routine, including a soothing activity such as reading, gentle rocking, or soft music, can reinforce sleep cues and create a sense of security.


            
            </Text>
            <Text style={styles.sectionTitle}>Mood</Text>
          <Text style={styles.sectionContent}>At the seventh week, the baby becomes more alert and interactive. They may smile more frequently in response to familiar voices and faces, showing a stronger emotional connection with caregivers. Babies may also coo and make other vocalizations as they begin to explore their ability to communicate. While the baby may still have fussy periods, these may start to become more predictable and tied to specific needs like hunger, fatigue, or overstimulation. Parents might find it easier to soothe the baby as they recognize more distinct cues.

            </Text>
           
            <Text style={styles.sectionTitle}>Genitals</Text>
          <Text style={styles.sectionContent}>By the seventh week, the baby’s genitals are fully proportionate, and any hormonal effects seen shortly after birth, such as swelling or temporary breast tissue enlargement, are typically resolved. Maintaining proper hygiene during diaper changes is essential to prevent irritation and diaper rash. Parents can continue with gentle cleaning and regular diaper changes to ensure the baby’s comfort.

            
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