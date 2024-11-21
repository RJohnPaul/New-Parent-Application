import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  ScreenWrapper  from '../../components/ScreenWrapper';

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const month12Image = require('../../assets/images/month12.png');





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
            <View style={styles.month3}>
            <Text style={styles.monthNumber}>11</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/evolutionPresets/month12' as any)}>
            <View style={styles.month3s}>
            <Text style={styles.monthNumber}>12</Text></View>
            </TouchableOpacity>

            
           
            </View>
          
        
        
      

      {/* Image and Details */}
      
      <View style={styles.content}>
      <View style={styles.wholeContainer}>
        <Image
          source={month12Image}
          style={styles.monthimage}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>MONTH - 12</Text>
          <Text style={styles.infoText}>Height:</Text>
          <Text style={styles.infoText1}>70.3 - 82.6 cm</Text>
          <Text style={styles.infoText}>Weight:</Text>
          <Text style={styles.infoText1}>7.47 - 12.72 kg</Text>
        </View>
        </View>
        
      </View>
      <View style={styles.content}>
      <Text style={styles.sectionTitle}>Your 12 month old baby </Text>
          <Text style={styles.sectionContent}>congratulations on reaching your baby’s first year! The 12th month marks the transition from infancy to toddlerhood, and your baby is showing many exciting changes. This milestone brings significant physical, cognitive, and emotional developments. Let’s explore what you can expect in the 12th month of your baby’s life.


          

          </Text>

          <Text style={styles.sectionTitle}>Social and Emotional Development</Text>
          <Text style={styles.sectionContent}>By the 12th month, babies are typically very social and may have started to form stronger relationships with family members and close friends. They are more aware of their social environment and may respond with gestures, facial expressions, and words. Many babies say their first words, like “mama” or “dada,” and may even use simple words in context. They may play interactive games like “hide and seek,” clap their hands in response to music, or mimic simple tasks like talking on the phone. Stranger anxiety can be more pronounced at this stage, but most babies begin to feel more comfortable with familiar people and places.

          

          </Text>

          <Text style={styles.sectionTitle}>Digestive system</Text>
          <Text style={styles.sectionContent}> By 12 months, most babies are transitioning from a milk-based diet to a more varied solid food diet. Many babies are eating a wide range of foods, including cut-up fruits and vegetables, small pieces of soft meats, grains, and dairy products like cheese and yogurt. Babies at this age may be fully weaned off breast milk or formula, though some may continue breastfeeding. Self-feeding is common at this stage, as babies are refining their motor skills and beginning to use utensils. It’s essential to monitor for any allergies and ensure the baby is getting balanced nutrition.

          
          </Text>

          <Text style={styles.sectionTitle}>Weight</Text>
          <Text style={styles.sectionContent}> By the 12th month, babies typically weigh between 20 to 27 pounds for boys and 19 to 26 pounds for girls. Weight gain may slow down as babies become more mobile and active, but continued growth is expected. Pediatric checkups are essential at this stage to ensure that the baby is developing appropriately and to track progress in areas like motor skills and language.

          

            </Text>

            <Text style={styles.sectionTitle}>Skin</Text>
          <Text style={styles.sectionContent}> The skin of a 12-month-old baby is more resilient than in the earlier months but still requires gentle care. At this age, babies may begin to experience common skin conditions, like mild eczema or dry skin, which can be managed with moisturizing products. As babies become more active, they are more likely to come into contact with various surfaces, which may result in minor rashes or skin irritations. Parents should continue to use gentle skincare products and ensure that the baby’s skin remains hydrated and protected.

          </Text>
          
          <Text style={styles.sectionTitle}>Sleep</Text>
          <Text style={styles.sectionContent}>At 12 months, babies usually need 12 to 14 hours of sleep in a 24-hour period, which includes one or two naps and a longer nighttime sleep stretch. Many babies begin to transition to one nap a day, though some may still take two naps. Establishing a consistent sleep routine helps babies settle down for naps and bedtime. While babies at this age may sleep for longer stretches, teething or other factors might cause disruptions, so a consistent bedtime routine is key.



            
            </Text>
            <Text style={styles.sectionTitle}>Mood</Text>
          <Text style={styles.sectionContent}> A 12-month-old baby’s mood is a reflection of their growing independence, curiosity, and ability to communicate. They may show excitement when exploring new objects or environments and display frustration when they cannot achieve a goal. At this stage, temper tantrums may begin to occur as babies express their desires and assert control over their actions. These emotional developments are part of a natural process of growing autonomy and learning how to navigate the world.

            
            </Text>
           
            <Text style={styles.sectionTitle}>Genitals</Text>
          <Text style={styles.sectionContent}>By the 12th month, genital development continues normally. Regular diaper hygiene remains important to prevent rashes or irritation, especially as babies become more mobile. Parents should ensure proper cleaning and changing, particularly as babies begin to crawl or walk, which can expose their genital area to increased moisture or friction.



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