import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const feedingImage = require('../../assets/images/breastfeeding-illustration-mother-feeding-a-baby-with-breast-with-nature-and-leaves-background-concept-illustration-in-cartoon-style-vector.png');
const sleepImage = require('../../assets/images/sleep.png'); 
const nappyImage = require('../../assets/images/nappy.png');
const growthImage = require('../../assets/images/growth.png'); 
const healthImage = require('../../assets/images/health.png');

export default function Tab() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi Hinata</Text>
        <Image
          source={profile}
          style={styles.avatar}
        />
      </View>

      <View style={styles.flexContainer}>
        <LinearGradient colors={['#FFFFFF', '#CBE6F9']} style={styles.imageBox}>
        <Text style={styles.imageText}>Feeding</Text>
          <TouchableOpacity>
            <Image source={feedingImage} style={styles.iconImage}/>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#FFFFFF', '#CBE6F9']} style={styles.imageBox}>
        <Text style={styles.imageText}>Sleep</Text>
          <TouchableOpacity>
            <Image source={sleepImage} style={styles.iconImage}/>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#FFFFFF', '#CBE6F9']} style={styles.imageBox}>
        <Text style={styles.imageText}>Nappy</Text>

          <TouchableOpacity>
            <Image source={nappyImage} style={styles.iconImage}/>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient colors={['#FFFFFF', '#CBE6F9']} style={styles.imageBox}>
        <Text style={styles.imageText}>Growth</Text>
          <TouchableOpacity>
            <Image source={growthImage} style={styles.iconImage}/>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#FFFFFF', '#CBE6F9']} style={styles.imageBox}>
        <Text style={styles.imageText}>Health</Text>
          <TouchableOpacity>
            <Image source={healthImage} style={styles.iconImage}/>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  flexContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageBox: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 8,
    marginBottom: 16,
    width: '48%', 
  },
  imageText: {
    position: 'absolute',
    top: 8,
    left: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black', // Adjust color as needed for better readability
  },
  iconImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    margin:10,
  },
});
