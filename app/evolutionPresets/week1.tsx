import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  ScreenWrapper  from '../../components/ScreenWrapper';

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const week1Image = require('../../assets/images/1week 1.png');





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
          <View style={styles.week1s}>
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
            <View style={styles.week1}>
            <Text style={styles.weekNumber}>8</Text></View>
            </TouchableOpacity>

            
           
            </View>
          
       
        
      

      {/* Image and Details */}
      
      <View style={styles.content}>
      <View style={styles.wholeContainer}>
        <Image
          source={week1Image}
          style={styles.weekimage}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>WEEK - 1</Text>
          <Text style={styles.infoText}>Height:</Text>
          <Text style={styles.infoText1}>45.7 - 55.5 cm</Text>
          <Text style={styles.infoText}>Weight:</Text>
          <Text style={styles.infoText1}>2.31 - 4.81 kg</Text>
        </View>
        </View>
        
      </View>
      <View style={styles.content}>
      <Text style={styles.sectionTitle}>Your newborn in week 1 </Text>
          <Text style={styles.sectionContent}>
        Congratulations on the birth of your baby!
        While you went through a lot in order to give birth, your little one did too. Being born is the first big challenge in your baby's life and during the first week its all about adjusting to a strange new world.
          </Text>

          <Text style={styles.sectionTitle}>Respiratory system</Text>
          <Text style={styles.sectionContent}>
            Your baby will cough and sneeze out amniotic fluid for the first hours in order
            to clean out the lungs.In the first days after birth, babies may sneeze or cough to help clear out amniotic fluid that was in their lungs during pregnancy. Sneezing is common and not necessarily a sign of illness; it helps keep their nasal passages clear.
          </Text>

          <Text style={styles.sectionTitle}>Digestive system</Text>
          <Text style={styles.sectionContent}>
            Be on the lookout for some digestion changes in the first week, such as the release
            of meconium, which is the first stool that babies have. It's black and sticky and
            will transition into a more light-yellow-fluid stool once the intestines are fully working.
          </Text>

          <Text style={styles.sectionTitle}>Weight</Text>
          <Text style={styles.sectionContent}>
            All babies will lose about 10% of their birth weight within the first days after birth
            so make sure you keep your precious one skin to skin with you and feed often.
            </Text>

            <Text style={styles.sectionTitle}>Skin</Text>
          <Text style={styles.sectionContent}>Your baby may develop jaundice and turn little yellow within the first days after birth. This yellow skin colour is a leftover product from the liver working to lower the bilirubin in the blood. Keep your baby skin to skin, expose him to lots of daylight and feed a lot in order to help your baby to lower the bilirubin level on his own.</Text>
          
          <Text style={styles.sectionTitle}>Sleep</Text>
          <Text style={styles.sectionContent}>Your baby will sleep between 15 and 18 hours in a 24 hour period. When your baby sleeps you should try to sleep as well since your normal sleep pattern will be disrupted.
            
            </Text>
            <Text style={styles.sectionTitle}>Mood</Text>
          <Text style={styles.sectionContent}>A one-week-old baby's mood is generally shaped by basic needs, comfort, and sensory experiences, as they are still adjusting to the world outside the womb. Newborns at this stage spend a lot of time sleeping—usually around 16-18 hours per day. Their sleep is split into short cycles, and they often wake every 2-3 hours to feed.
            
            </Text>
           
            <Text style={styles.sectionTitle}>Genitals</Text>
          <Text style={styles.sectionContent}>At one week old, a baby's genital area is still adjusting after birth, and there are some typical characteristics and changes that may be observed.It's common for both male and female newborns to have some swelling in their genital area due to exposure to maternal hormones in the womb. This swelling typically reduces within a few days to a few weeks.The skin of the genital area may appear slightly reddish or darker than the rest of the body. This color difference usually normalizes as the baby grows.
            
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