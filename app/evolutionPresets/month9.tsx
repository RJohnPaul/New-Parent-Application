import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  ScreenWrapper  from '../../components/ScreenWrapper';

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const month9Image = require('../../assets/images/month9.png');





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
            <View style={styles.month3s}>
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
          source={month9Image}
          style={styles.monthimage}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>MONTH - 9</Text>
          <Text style={styles.infoText}>Height:</Text>
          <Text style={styles.infoText1}>66.8 - 78.6 cm</Text>
          <Text style={styles.infoText}>Weight:</Text>
          <Text style={styles.infoText1}>6.90 - 11.78 kg</Text>
        </View>
        </View>
        
      </View>
      <View style={styles.content}>
      <Text style={styles.sectionTitle}>Your 9 month old baby </Text>
          <Text style={styles.sectionContent}>Hello and welcome to a detailed exploration of a 9-month-old baby’s development! At this stage, your baby is becoming even more curious, mobile, and interactive. Their physical, cognitive, and social growth is reaching exciting new milestones, making this period a truly special time for both parents and their little one. Let’s dive into the key aspects of development for a 9-month-old baby.


        
          </Text>

          <Text style={styles.sectionTitle}>Social and Emotional Development</Text>
          <Text style={styles.sectionContent}>By 9 months, babies are showing more distinct social behaviors. They have a growing sense of attachment to their caregivers and may show stronger signs of separation anxiety when apart from familiar faces. Babies at this stage are more expressive, often reacting with excitement, joy, or distress to people and situations. They engage in social games like peekaboo, and their babbling may start to include more varied sounds that mimic speech. Many babies also begin to understand simple commands, such as “wave bye-bye” or “give me the toy.” They are starting to form relationships with people other than their immediate caregivers and may show a preference for familiar faces.
            
          </Text>

          <Text style={styles.sectionTitle}>Digestive system</Text>
          <Text style={styles.sectionContent}>A 9-month-old’s digestive system is continuing to mature. By this time, most babies are consuming a mix of breast milk or formula along with a variety of solid foods. These may include mashed or cut-up fruits, vegetables, grains, and proteins like chicken, fish, or tofu. Some babies may begin to practice feeding themselves with finger foods, which helps develop motor skills and hand-eye coordination. Parents should continue to monitor for any signs of food allergies and offer new foods one at a time to gauge tolerance.

            
          </Text>

          <Text style={styles.sectionTitle}>Weight</Text>
          <Text style={styles.sectionContent}> By the 9th month, babies typically weigh between 19 to 23 pounds for boys and 18 to 22 pounds for girls, though individual growth patterns can vary. Their weight continues to increase steadily, though at a slightly slower rate than earlier months. Regular pediatric visits help ensure the baby is growing and developing within a healthy range and allows parents to address any concerns.
            
            </Text>

            <Text style={styles.sectionTitle}>Skin</Text>
          <Text style={styles.sectionContent}>A 9-month-old’s skin is still sensitive, but it has become more resilient as the baby grows. Babies at this age often have increased exposure to their environment, which can lead to minor rashes or irritation. Parents should continue using gentle, fragrance-free skincare products to keep the skin hydrated and protected. If the baby is crawling or exploring more actively, parents should ensure that they are in a clean environment to minimize exposure to potential irritants.
          </Text>
          
          <Text style={styles.sectionTitle}>Sleep</Text>
          <Text style={styles.sectionContent}>At 9 months, babies typically require about 12 to 14 hours of sleep in a 24-hour period. This includes a longer nighttime sleep stretch, often with one or two naps during the day. As babies become more mobile, they may also experience sleep disruptions due to increased activity during the day or teething. Establishing a consistent bedtime routine with soothing activities, such as a bath or storytime, helps reinforce good sleep habits and provides comfort.

            
            </Text>
            <Text style={styles.sectionTitle}>Mood</Text>
          <Text style={styles.sectionContent}> A 9-month-old baby’s mood can shift based on their growing awareness of the world around them. They are increasingly interactive, enjoying moments of joy during playtime, while also demonstrating frustration when they can’t reach a desired object or master a new skill. Babies at this age may express their emotions more clearly, showing excitement when they explore something new or disappointment when things don’t go as expected. Parents begin to notice their baby’s emerging personality and preferences as they become more vocal and expressive.

            
            </Text>
           
            <Text style={styles.sectionTitle}>Genitals</Text>
          <Text style={styles.sectionContent}>The development of the genitals in a 9-month-old baby continues at a steady pace. There are no major changes beyond normal growth, but parents should continue to practice good diaper hygiene by changing the baby’s diaper regularly and gently cleaning the area with unscented products. As babies become more mobile, keeping the genital area clean and dry helps prevent irritation or rashes.

            
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