import React, { useState, useEffect } from 'react';
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
import { supabase } from '../../supabase';
import { useUser } from '../UserContext';
import * as FileSystem from 'expo-file-system';
import { Buffer } from 'buffer';

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');

export default function Memories() {
  const router = useRouter();
  const { user } = useUser();
  const [userName, setUserName] = useState('');
  const [images, setImages] = useState(Array(27).fill(null));
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchUserName = async () => {
      if (user) {
        const { data, error } = await supabase
          .from('Profiles')
          .select('name')
          .eq('email', user.email)
          .single();

        if (error) {
          console.error('Error fetching user name:', error);
        } else {
          setUserName(data.name);
          await fetchUserImages(data.name);
        }
      }
    };

    fetchUserName();
  }, [user]);

  useEffect(() => {
    if (userName) {
      fetchUserImages(userName);
    }
  }, [userName, refresh]);

  const fetchUserImages = async (name: string) => {
    const updatedImages = [...images];
    for (let i = 0; i < 27; i++) {
      const { data } = supabase.storage
        .from('images')
        .getPublicUrl(`memories/${name}_mem_${i + 1}.jpeg`);

      if (data.publicUrl) {
        updatedImages[i] = data.publicUrl + '?' + new Date().getTime();
      }
    }
    setImages(updatedImages);
  };

  const pickAndUploadImage = async (index: number) => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        Alert.alert('Permission required', 'Please enable media permissions to upload an image.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const uri = result.assets[0].uri;
        await uploadImage(uri, index);
      }
    } catch (error) {
      console.error('Error selecting/uploading image:', error);
      Alert.alert('Error', 'An error occurred while selecting or uploading the image.');
    }
  };

  const uploadImage = async (imageUri: string, index: number) => {
    try {
      const fileName = `${userName}_mem_${index + 1}.jpeg`;
      const fileType = 'image/jpeg';

      const fileContent = await FileSystem.readAsStringAsync(imageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const fileBuffer = Buffer.from(fileContent, 'base64');

      const { data, error } = await supabase.storage
        .from('images')
        .upload(`memories/${fileName}`, fileBuffer, {
          contentType: fileType,
          upsert: true,
        });

      if (error) {
        console.error('Supabase Upload Error:', error.message);
        Alert.alert('Upload Error', error.message);
        return;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(`memories/${fileName}`);

      const updatedImages = [...images];
      updatedImages[index] = publicUrl + '?' + new Date().getTime();
      setImages(updatedImages);
      setRefresh(!refresh); // Trigger a re-render
      Alert.alert('Upload Successful', 'Your image has been uploaded successfully.');
    } catch (error) {
      console.error('Error uploading image:', error);
      Alert.alert('Upload Error', 'Failed to upload the image.');
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
                  onPress={() => pickAndUploadImage(index)}
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