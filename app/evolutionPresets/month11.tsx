import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  ScreenWrapper  from '../../components/ScreenWrapper';

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const month11Image = require('../../assets/images/month11.png');





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
            <View style={styles.month3}>
            <Text style={styles.monthNumber}>9</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/month10' as any)}>
            <View style={styles.month3}>
            <Text style={styles.monthNumber}>10</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/month11' as any)}>
            <View style={styles.month3s}>
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
          source={month11Image}
          style={styles.monthimage}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>MONTH - 11</Text>
          <Text style={styles.infoText}>Height:</Text>
          <Text style={styles.infoText1}>69.2 - 81.3 cm</Text>
          <Text style={styles.infoText}>Weight:</Text>
          <Text style={styles.infoText1}>7.29 - 12.42 kg</Text>
        </View>
        </View>
        
      </View>
      <View style={styles.content}>
      <Text style={styles.sectionTitle}>Your 11 month old baby </Text>
          <Text style={styles.sectionContent}>Hello and welcome to a comprehensive look at the development of an 11-month-old baby! At this stage, your little one is becoming even more independent, active, and communicative. They’re exploring the world with more purpose and curiosity, mastering new physical and cognitive skills. Let’s dive into the key areas of development for a baby at 11 months.

        
          </Text>

          <Text style={styles.sectionTitle}>Social and Emotional Development</Text>
          <Text style={styles.sectionContent}> At 11 months, babies are becoming much more interactive and communicative. They are more likely to express a range of emotions and show a clear preference for certain people or objects. Separation anxiety may still be present, but it is starting to ease as babies begin to trust that their caregivers will return. Babies at this stage may start to use gestures like pointing or waving to communicate, and some may say simple words like “mama” or “dada.” They enjoy engaging in play, such as stacking toys, playing peekaboo, or clapping hands. They also respond to social cues and may imitate adult actions, like mimicking a phone call or brushing their hair.

            
          </Text>

          <Text style={styles.sectionTitle}>Digestive system</Text>
          <Text style={styles.sectionContent}>By 11 months, most babies are eating a variety of solid foods, including mashed, chopped, or finger foods. This might include soft fruits, vegetables, grains, and protein sources like chicken, fish, or tofu. They are likely practicing their self-feeding skills with finger foods, which helps improve hand-eye coordination and motor skills. Breast milk or formula still provides essential nutrition, but solid food is increasingly important. Parents should continue introducing new foods gradually and monitor for signs of allergies or sensitivities.

            
          </Text>

          <Text style={styles.sectionTitle}>Weight</Text>
          <Text style={styles.sectionContent}>At 11 months, babies typically weigh between 19 to 25 pounds for boys and 18 to 24 pounds for girls, although individual growth patterns may vary. The rate of weight gain may slow slightly as babies become more active and mobile, but steady growth is a good sign of proper development. Regular checkups ensure that your baby is growing according to their unique needs.

            
            </Text>

            <Text style={styles.sectionTitle}>Skin</Text>
          <Text style={styles.sectionContent}>The skin of an 11-month-old baby is continuing to mature and become more resilient. However, it remains sensitive, so babies may experience occasional rashes, dryness, or minor skin irritation, especially as they explore new environments. The most common skin conditions include dry patches or teething-related rash around the mouth. Gentle, fragrance-free skincare products should still be used to keep their skin hydrated and protected from environmental factors.
          </Text>
          
          <Text style={styles.sectionTitle}>Sleep</Text>
          <Text style={styles.sectionContent}>By 11 months, babies generally require 12 to 14 hours of sleep each day, including a longer stretch of sleep at night and one to two naps during the day. They may begin to resist naps or bedtime, especially if they’re feeling independent or exploring more. Establishing a calming, consistent bedtime routine helps babies feel secure and ready for sleep. Nighttime disruptions may still occur due to teething or developmental milestones, but maintaining a regular sleep routine can help ease the process.

            
            </Text>
            <Text style={styles.sectionTitle}>Mood</Text>
          <Text style={styles.sectionContent}>At 11 months, babies show a wide range of emotions, from joy and excitement to frustration and distress. They are becoming more expressive and communicative, showing excitement when they learn new things or when they interact with familiar people. They may also begin to show signs of independence and assertiveness, such as wanting to feed themselves or explore new objects. Parents may see more stubbornness or tantrums as babies approach their first year, which is a normal part of developing autonomy.


            
            </Text>
           
            <Text style={styles.sectionTitle}>Genitals</Text>
          <Text style={styles.sectionContent}>The development of the genitals in an 11-month-old is still progressing normally. Diaper hygiene continues to be important, as babies may spend a lot of time crawling and exploring, which can expose their genital area to moisture or irritation. Frequent diaper changes and gentle cleaning with unscented wipes help prevent diaper rash and discomfort.

            
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