import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  ScreenWrapper  from '../../components/ScreenWrapper';

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const month3Image = require('../../assets/images/month3.png');





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
          <View style={styles.month3s}>
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
          source={month3Image}
          style={styles.monthimage}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>MONTH - 3</Text>
          <Text style={styles.infoText}>Height:</Text>
          <Text style={styles.infoText1}>53.7 - 66.1 cm</Text>
          <Text style={styles.infoText}>Weight:</Text>
          <Text style={styles.infoText1}>4.12 - 8.29 kg</Text>
        </View>
        </View>
        
      </View>
      <View style={styles.content}>
      <Text style={styles.sectionTitle}>Your 3 month old baby </Text>
          <Text style={styles.sectionContent}>
          Hello and welcome to this heartwarming look at the world of a 3-month-old baby! At this age, every day brings new discoveries and milestones. It’s a time full of smiles, coos, and the first signs of playful interaction. The journey of growth is fascinating, filled with moments that delight both the baby and their loved ones. Let’s explore how a 3-month-old develops across various aspects of their early life.

          </Text>

          <Text style={styles.sectionTitle}>Social and Emotional Development</Text>
          <Text style={styles.sectionContent}>
          At three months old, babies become increasingly responsive to their surroundings and show greater social awareness. They often smile at familiar faces, coo, and make various sounds to express happiness or engage with their caregivers. Babies at this stage thrive on attention, recognizing their parents and caregivers and forming emotional bonds that promote trust and attachment. They may even begin to mimic facial expressions and respond to voices, showing early communication skills.

          </Text>

          <Text style={styles.sectionTitle}>Digestive system</Text>
          <Text style={styles.sectionContent}>
          By this stage, a baby’s digestive system is still maturing but becomes more efficient. Most babies continue to consume only breast milk or formula, with digestion improving compared to the newborn phase, resulting in fewer issues like colic.

          </Text>

          <Text style={styles.sectionTitle}>Weight</Text>
          <Text style={styles.sectionContent}>
          The average weight of a 3-month-old baby varies, but they typically gain about 1–2 pounds per month during this period. On average, boys weigh between 11 to 14 pounds and girls between 10 to 13 pounds, signaling healthy development.


            </Text>

            <Text style={styles.sectionTitle}>Skin</Text>
          <Text style={styles.sectionContent}>A 3-month-old’s skin remains soft and sensitive. It may show signs of baby acne or cradle cap, which usually clear up over time. Parents often use gentle, fragrance-free baby lotions to maintain skin hydration and health.

</Text>
          
          <Text style={styles.sectionTitle}>Sleep</Text>
          <Text style={styles.sectionContent}>At this age, babies begin to develop more regular sleep patterns. A 3-month-old may sleep 12–16 hours per day, including naps. Some babies start sleeping for longer periods at night, which is a welcome development for many parents.

            
            </Text>
            <Text style={styles.sectionTitle}>Mood</Text>
          <Text style={styles.sectionContent}>Babies at three months display increased engagement with their environment, showing curiosity and joy. They may respond to playtime and interaction with smiles, cooing, and even laughter. When they are fussy, it often signals hunger, tiredness, or discomfort.

            
            </Text>
           
            <Text style={styles.sectionTitle}>Genitals</Text>
          <Text style={styles.sectionContent}>The genitals of a 3-month-old baby continue to develop according to their biological sex but remain mostly unchanged since birth, with slight growth. Ensuring proper diaper hygiene and moisture control is essential to prevent rashes or irritation in this sensitive area.


            
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