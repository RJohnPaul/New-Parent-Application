import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ScreenWrapper from '@/components/ScreenWrapper';
import { supabase } from '../../supabase';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { useUser } from '../UserContext'; // Import useUser

const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');
const feedingImage = require('../../assets/images/breastfeeding-illustration-mother-feeding-a-baby-with-breast-with-nature-and-leaves-background-concept-illustration-in-cartoon-style-vector.png');
const sleepImage = require('../../assets/images/sleep.png');
const nappyImage = require('../../assets/images/nappy.png');
const growthImage = require('../../assets/images/growth home.png');
const healthImage = require('../../assets/images/health home.png');
const babyImage = require('../../assets/images/babyImage.png'); // Add baby image

const articles = [
  {
    id: 1,
    title: "Your baby's cues and signals",
    description: 'Babies communicate in many different ways. There are subtle signs you can look out for when he is tired...',
    image: require('../../assets/images/art1.png'), 
    type: 'Blog'
  }
];
const article1 = [ {
    id: 2,
    title: "How to stay relaxed when your baby won't eat",
    description: 'We all know that in order for our babies to grow and thrive, they need to be taking in nutrients and gett...',
    image: require('../../assets/images/art2.png'), 
    type: 'Guide'
  }
];
const article2 = [  {
    id: 3,
    title: "A letter to you, from your baby",
    description: 'To you, the one who loves me unconditionally...',
    image: require('../../assets/images/art3.png'), 
    type: 'Blog'
  }
];

type IconWithLabelProps = {
  image: any;
  label: string;
  onPress: () => void;
};

export default function HomePage() {
  const router = useRouter();
  const { user } = useUser(); // Get the logged-in user
  const [userName, setUserName] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);

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
        }
      }
    };

    fetchUserName();
  }, [user]);

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

      if (!result.canceled && result.assets && result.assets.length > 0) {
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
      if (!user) {
        Alert.alert('Error', 'User not authenticated.');
        return;
      }

      const response = await fetch(uri);
      const blob = await response.blob();

      const fileName = `baby-photo-${Date.now()}.jpg`;
      const { data, error } = await supabase.storage.from('images').upload(fileName, blob, {
        cacheControl: '3600',
        upsert: false,
      });

      if (error) {
        console.error('Supabase Upload Error:', error.message);
        Alert.alert('Upload Error', error.message);
        return;
      }

      const { data: publicUrlData } = supabase.storage.from('images').getPublicUrl(data.path);
      const publicUrl = publicUrlData.publicUrl;

      setImageUri(publicUrl); // Display the uploaded image
      Alert.alert('Upload Successful', 'Your image has been uploaded successfully.');
    } catch (error) {
      console.error('Error uploading image:', error);
      Alert.alert('Upload Error', 'Failed to upload the image.');
    }
  };

  return (
    <ScreenWrapper bg="white">
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hi {userName}</Text>
          <TouchableOpacity onPress={() => router.push('/dialogs/myprofile' as any)}>
            <Image source={profile} style={styles.avatar} />
          </TouchableOpacity>
        </View>

        <View style={styles.iconsRow}>
          <IconWithLabel 
            image={feedingImage} 
            label="Feeding" 
            onPress={() => router.push('/dialogs/feeding' as any)} 
          />
          <IconWithLabel 
            image={sleepImage} 
            label="Sleep" 
            onPress={() => router.push('/dialogs/sleeping')} 
          />
          <IconWithLabel 
            image={nappyImage} 
            label="Nappy" 
            onPress={() => router.push('/dialogs/nappy')} 
          />
          <IconWithLabel 
            image={growthImage} 
            label="Growth" 
            onPress={() => router.push('/dialogs/growth')} 
          />
          <IconWithLabel 
            image={healthImage} 
            label="Health" 
            onPress={() => router.push('/dialogs/health')} 
          />
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={pickAndUploadImage}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.babyPhoto} />
            ) : (
              <Image source={babyImage} style={styles.babyPhoto} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.quoteContainer}>
          <Text style={styles.quote}>
            "Raising a child is like planting a seed and watching it grow into a beautiful flower." — Lisa Wingate
          </Text>
        </View>
        <Text style={styles.TextHeader}>Baby Care</Text>
        <View>
          {articles.map((article) => (
            <View key={article.id} style={styles.articleCard}>
              <Image source={article.image} style={styles.articleImage} />
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.articleDescription}>{article.description}</Text>
              <TouchableOpacity style={styles.articleButton}  onPress={() => router.push('/articles/article1' as any)}>
                <Text style={styles.articleButtonText}>Read</Text>
                <Text style={styles.articleType}>{article.type}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View>
          {article1.map((article) => (
            <View key={article.id} style={styles.articleCard}>
              <Image source={article.image} style={styles.articleImage} />
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.articleDescription}>{article.description}</Text>
              <TouchableOpacity style={styles.articleButton}  onPress={() => router.push('/articles/article2' as any)}>
                <Text style={styles.articleButtonText}>Read</Text>
                <Text style={styles.articleType}>{article.type}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View>
          {article2.map((article) => (
            <View key={article.id} style={styles.articleCard}>
              <Image source={article.image} style={styles.articleImage} />
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.articleDescription}>{article.description}</Text>
              <TouchableOpacity style={styles.articleButton}  onPress={() => router.push('/articles/article3' as any)}>
                <Text style={styles.articleButtonText}>Read</Text>
                <Text style={styles.articleType}>{article.type}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

function IconWithLabel({ image, label, onPress }: IconWithLabelProps) {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
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
    padding: 10
  },
  articleCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  articleImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  articleDescription: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  articleButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e0f7fa',
  },
  articleButtonText: {
    color: '#00796b',
    fontWeight: 'bold',
  },
  articleType: {
    color: '#00796b',
  },
});