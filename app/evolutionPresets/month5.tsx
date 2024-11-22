import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  ScreenWrapper  from '../../components/ScreenWrapper';

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const month5Image = require('../../assets/images/month5.png');





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
            <View style={styles.month3s}>
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
          source={month5Image}
          style={styles.monthimage}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>MONTH - 5</Text>
          <Text style={styles.infoText}>Height:</Text>
          <Text style={styles.infoText1}>61.0 - 72.5 cm</Text>
          <Text style={styles.infoText}>Weight:</Text>
          <Text style={styles.infoText1}>5.77 - 10.17 kg</Text>
        </View>
        </View>
        
      </View>
      <View style={styles.content}>
      <Text style={styles.sectionTitle}>Your 5 month old baby </Text>
          <Text style={styles.sectionContent}>Hello and welcome to this insightful look into the development of a 5-month-old baby! By this age, babies are more aware, active, and responsive than ever before. Each day brings new abilities and greater interaction with their environment. Parents often find this stage particularly rewarding as their baby becomes more engaged and expressive. Let’s dive into the key aspects of development for a 5-month-old baby.

        
          </Text>

          <Text style={styles.sectionTitle}>Social and Emotional Development</Text>
          <Text style={styles.sectionContent}>At five months, babies continue to grow in social awareness and emotional interaction. They laugh, smile widely, and engage in vocal play, experimenting with different sounds and coos. Babies often respond to their own name and show excitement when they see familiar faces. Their ability to form emotional bonds becomes more evident, and they may even reach out to be held or interact with others during playtime. This is an important period for building trust and connection.

            
          </Text>

          <Text style={styles.sectionTitle}>Digestive system</Text>
          <Text style={styles.sectionContent}>By the fifth month, a baby’s digestive system is more developed, allowing for greater efficiency in processing nutrients. While most babies still consume only breast milk or formula, some parents may begin to introduce small amounts of solid foods, such as pureed fruits or vegetables, with guidance from a pediatrician. The introduction of solids can gradually prepare the baby’s digestive system for more complex foods over the coming months.

            
          </Text>

          <Text style={styles.sectionTitle}>Weight</Text>
          <Text style={styles.sectionContent}>On average, a 5-month-old baby continues to gain weight steadily, usually around 1 to 1.5 pounds per month. Boys typically weigh between 14 to 18 pounds, while girls usually weigh between 13 to 17 pounds. Monitoring growth remains essential to ensure that the baby is healthy and developing as expected.

           
            </Text>

            <Text style={styles.sectionTitle}>Skin</Text>
          <Text style={styles.sectionContent}>The skin of a 5-month-old baby is still soft and delicate, although it continues to become more resilient. Most babies outgrow conditions like cradle cap and baby acne by this age. Parents should continue to use gentle, unscented baby products and protect the baby’s skin with proper moisturizing to maintain hydration and prevent dryness or irritation.
          </Text>
          
          <Text style={styles.sectionTitle}>Sleep</Text>
          <Text style={styles.sectionContent}>At five months, babies often settle into more predictable sleep patterns, with most needing about 12–15 hours of sleep in a 24-hour period. This usually includes longer stretches of sleep at night and 2–3 daytime naps. Some babies may start sleeping through the night or have longer continuous sleep periods, much to the delight of their parents. Consistent bedtime routines can help reinforce these healthy sleep habits.

            
            </Text>
            <Text style={styles.sectionTitle}>Mood</Text>
          <Text style={styles.sectionContent}>A 5-month-old’s mood is lively and responsive. They show joy and excitement during play, smile when engaged, and often laugh at funny or surprising moments. Babies at this age may express a range of emotions more clearly, such as excitement, curiosity, or mild frustration. They also enjoy interactive games like peekaboo, which help develop their social and cognitive skills.

            
            </Text>
           
            <Text style={styles.sectionTitle}>Genitals</Text>
          <Text style={styles.sectionContent}> The development of a 5-month-old’s genitals continues gradually, with growth remaining steady. Parents should maintain proper diaper hygiene and frequently change diapers to prevent rashes and irritation. Keeping this area clean and dry is essential for comfort and health.

            
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