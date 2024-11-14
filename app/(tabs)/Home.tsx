import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ScreenWrapper from '../../components/ScreenWrapper';
import { supabase } from '../../supabase';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const feedingImage = require('../../assets/images/breastfeeding-illustration-mother-feeding-a-baby-with-breast-with-nature-and-leaves-background-concept-illustration-in-cartoon-style-vector.png');
const sleepImage = require('../../assets/images/sleep.png');
const nappyImage = require('../../assets/images/nappy.png');
const growthImage = require('../../assets/images/growth home.png');
const healthImage = require('../../assets/images/health home.png');

type IconWithLabelProps = {
  image: any;
  label: string;
};

export default function HomePage() {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickAndUploadImage = async () => {
    try {
      // Request permissions
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        Alert.alert('Permission required', 'Please enable media permissions to upload an image.');
        return;
      }

      // Pick an image
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        // Upload to Supabase
        const uri = result.assets[0].uri;
        await uploadImage(uri);
      }
    } catch (error) {
      console.error('Error selecting/uploading image:', error);
      Alert.alert('Error', 'An error occurred while selecting or uploading the image.');
    }
  };

  const uploadImage = async (uri: string) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();

      const fileName = `baby-photo-${Date.now()}.jpg`;
      const { data, error } = await supabase.storage.from('images').upload(fileName, blob);

      if (error) {
        console.error('Supabase Upload Error:', error.message);
        Alert.alert('Upload Error', error.message);
        return;
      }

      const publicUrl = supabase.storage
        .from('images')
        .getPublicUrl(data.path)
        .data.publicUrl;

      setImageUri(publicUrl); // Set the uploaded image URL
      Alert.alert('Upload Successful', 'Your image has been uploaded successfully.');
    } catch (error) {
      console.error('Error uploading image:', error);
      Alert.alert('Upload Error', 'Failed to upload the image.');
    }
  };

  const onLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert('Sign Out', 'Error signing out!');
    }
  };

  return (
    <ScreenWrapper bg="white">
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hi Hinata</Text>
          <Image source={profile} style={styles.avatar} />
        </View>
        <Button title="Logout" onPress={onLogout} />

        <View style={styles.iconsRow}>
          <IconWithLabel image={feedingImage} label="Feeding" />
          <IconWithLabel image={sleepImage} label="Sleep" />
          <IconWithLabel image={nappyImage} label="Nappy" />
          <IconWithLabel image={growthImage} label="Growth" />
          <IconWithLabel image={healthImage} label="Health" />
        </View>

        <View style={styles.imageContainer}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.babyPhoto} />
          ) : (
            <Text>No image selected yet.</Text>
          )}
        </View>

        <TouchableOpacity style={styles.linkContainer} onPress={pickAndUploadImage}>
          <Text style={styles.TextHeader}>Upload Baby Photo</Text>
        </TouchableOpacity>

        <View style={styles.quoteContainer}>
          <Text style={styles.quote}>
            "Raising a child is like planting a seed and watching it grow into a beautiful flower." — Lisa Wingate
          </Text>
        </View>

        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.TextHeader}>Baby Care</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenWrapper>
  );
}

function IconWithLabel({ image, label }: IconWithLabelProps) {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={() => alert(label)}>
      <Image source={image} style={styles.iconImage} accessibilityLabel={label} />
      <Text style={styles.iconLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 400,
    marginBottom: 20,
  },
  babyPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
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
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconImage: {
    width: 50,
    height: 50,
  },
  iconLabel: {
    marginTop: 4,
    fontSize: 12,
    color: 'gray',
  },
  quoteContainer: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  quote: {
    color: 'white',
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  linkContainer: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
  },
  TextHeader: {
    color: 'black',
    fontSize: 23,
    fontWeight: '500',
  },
});
