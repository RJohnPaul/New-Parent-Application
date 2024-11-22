import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  ScreenWrapper  from '../../components/ScreenWrapper';

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const month4Image = require('../../assets/images/month4.png');





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
            <View style={styles.month3s}>
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
          source={month4Image}
          style={styles.monthimage}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>MONTH - 4</Text>
          <Text style={styles.infoText}>Height:</Text>
          <Text style={styles.infoText1}>59.0 - 77.7 cm</Text>
          <Text style={styles.infoText}>Weight:</Text>
          <Text style={styles.infoText1}>5.34 - 9.65 kg</Text>
        </View>
        </View>
        
      </View>
      <View style={styles.content}>
      <Text style={styles.sectionTitle}>Your 4 month old baby </Text>
          <Text style={styles.sectionContent}>
          Hello and welcome to this fascinating exploration of a 4-month-old baby’s development! At this age, babies are full of energy, curiosity, and joy. Every day brings new skills and delightful interactions that captivate both them and their families. This is a time when babies start to reveal more of their personality, becoming more expressive and engaged with their surroundings. Let’s take a closer look at the different aspects of development for a 4-month-old baby.

          </Text>

          <Text style={styles.sectionTitle}>Social and Emotional Development</Text>
          <Text style={styles.sectionContent}>By the fourth month, babies become even more socially aware and responsive. They often smile, laugh, and engage in “conversations” with cooing and babbling. Babies at this stage enjoy being around people and may show excitement when they see their parents or caregivers. They might also begin to imitate simple facial expressions and sounds, showing signs of growing communication skills and an increasing ability to bond with others.

            
          </Text>

          <Text style={styles.sectionTitle}>Digestive system</Text>
          <Text style={styles.sectionContent}>The digestive system of a 4-month-old baby continues to mature, becoming more efficient as they grow. Most babies are still exclusively fed breast milk or formula, although some parents may consult with their pediatrician about beginning the transition to solid foods toward the end of this month. Digestion at this stage is usually smoother, with fewer occurrences of colic or gas.

            
          </Text>

          <Text style={styles.sectionTitle}>Weight</Text>
          <Text style={styles.sectionContent}>By the fourth month, babies typically gain about 1 to 1.5 pounds per month. On average, boys weigh between 13 to 16 pounds and girls between 12 to 15 pounds. Steady weight gain is an indicator of healthy development, and pediatricians monitor these milestones to ensure growth is on track.

            
            </Text>

            <Text style={styles.sectionTitle}>Skin</Text>
          <Text style={styles.sectionContent}>The skin of a 4-month-old baby remains soft and delicate, though it continues to adjust and become less prone to certain newborn conditions. Baby acne and cradle cap often resolve by this time. Parents should continue to use gentle, fragrance-free products to maintain skin health and hydration.
          </Text>
          <Text style={styles.sectionTitle}>Sleep</Text>
          <Text style={styles.sectionContent}>At four months, babies often begin to establish more consistent sleep routines. They may sleep between 12 and 15 hours over a 24-hour period, including longer stretches at night and 2–3 daytime naps. Sleep training can sometimes begin around this age, helping babies learn how to self-soothe and sleep more independently.

            
            </Text>
            <Text style={styles.sectionTitle}>Mood</Text>
          <Text style={styles.sectionContent}> By the fourth month, a baby’s mood becomes more expressive and dynamic. Babies often show delight and interest in playtime and interaction, responding to familiar voices and sights with excitement. They are more interactive, often laughing and smiling, which strengthens bonds with their caregivers. Periods of fussiness can still occur but may now be easier to interpret, often related to hunger, sleepiness, or overstimulation.

            
            </Text>
           
            <Text style={styles.sectionTitle}>Genitals</Text>
          <Text style={styles.sectionContent}>The genitals of a 4-month-old baby continue to develop naturally, with gradual growth. Regular diaper changes and maintaining hygiene are crucial for preventing rashes and irritation in this sensitive area. Parents are encouraged to be attentive to any signs of discomfort or skin issues.

            
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