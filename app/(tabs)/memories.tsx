import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ScreenWrapper from '@/components/ScreenWrapper';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');


export default function memories() {
  const router = useRouter();
  const [images, setImages] = useState(Array(16).fill(null));

  // Function to pick an image
  const pickImage = async (index : any) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const updatedImages = [...images];
      updatedImages[index] = result.assets[0].uri;
      setImages(updatedImages);
    }
  };

  const memories = [
    "I'm home!",
    "First smile",
    "First feed",
    "Sleeping",
    "Bath time",
    "First outing",
    "First laugh",
    "First hug",
    "In the park",
    "Rolling over",
    "Favorite toy",
    "Clapping",
    "Sitting up",
    "First vacation",
    "My room",
    "My Bed",
    "Slept through",
    "First Swim",
    "First Haircut",
    "Clapping",
    "At the beach",
    "In the show",
    "With Granddad",
    "With Grandma",
    "First song",
    "Favorite book",
    "With Mummy"
  ];

  return (
    <ScreenWrapper bg='white'>
      <ScrollView>
      <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Memories</Text>
        
      </View>
      <View style={styles.grid}>
        {memories.map((memory, index) => (
          <View key={index} style={styles.item}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => pickImage(index)}
            >
              {images[index] ? (
                <Image source={{ uri: images[index] }} style={styles.image} />
              ) : (
                <Text style={styles.plus}>+</Text>
              )}
            </TouchableOpacity>
            <Text style={styles.label}>{memory}</Text>
          </View>
        ))}
      </View>
      </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', 
  },
  item: {
    alignItems: 'center',
    marginVertical: 8,
    width: '30%', 
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: '#CBE6F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  plus: {
    fontSize: 36,
    color: Colors.primary,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  label: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
  },
});
