import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Image, Button, StyleSheet, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { supabase } from '../../supabase';
import ScreenWrapper from '../../components/ScreenWrapper';
import { useUser } from '../UserContext'; // Adjust the path as needed

const ProfileScreen = () => {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [profilePic, setProfilePic] = useState('');
  const [name, setName] = useState('');
  const [parentname, setParentname] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');

  useEffect(() => {
    if (user) {
      setProfilePic(user.profilePic);
      setName(user.name);
      setParentname(user.parentname);
      setEmail(user.email);
      setDob(user.dob);
    }
  }, [user]);

  // Logout function
  const onLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert('Sign Out', 'Error signing out!');
    }
  };

  // Update function
  const onUpdate = async () => {
    try {
      if (!user) {
        Alert.alert('Update Failed', 'Unable to retrieve user information.');
        return;
      }

      // Update the specific user's row
      const { error } = await supabase
        .from('Profiles')
        .update({
          baby_name: name,
          name: parentname,
          email: email,
          dob: dob,
        })
        .eq('email', user.email);

      if (error) throw error;

      // Update the user context
      setUser({ ...user, name, parentname, email, dob });
      Alert.alert('Success', 'Profile updated successfully!');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Update Error:', error.message);
      } else {
        console.error('Update Error:', error);
      }
      Alert.alert('Error', 'Failed to update profile.');
    }
  };

  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <MaterialIcons name="cancel" size={30} color="#000" onPress={() => router.back()} />
          <View style={styles.head}>
            <Text style={styles.headerText}>My Profile</Text>
          </View>
        </View>

        {/* Profile Picture */}
        <View style={styles.profilepic}>
          <Image
            source={
              profilePic
                ? { uri: profilePic }
                : require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg')
            }
            style={styles.profilePic}
          />
        </View>

        {/* Form Inputs */}
        <Text style={styles.label}>Baby's Name:</Text>
        <TextInput
          placeholder="Enter your baby's name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <Text style={styles.label}> Baby's Date of Birth:</Text>
        <TextInput
          placeholder="Enter your baby's date of birth (e.g., YYYY-MM-DD)"
          value={dob}
          onChangeText={setDob}
          style={styles.input}
        />

        <Text style={styles.label}>Parent Name:</Text>
        <TextInput
          placeholder="Enter your name"
          value={parentname}
          onChangeText={setParentname}
          style={styles.input}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

       

        {/* Update Button */}
        <View style={styles.buttonWrapper}>
          <Button title="Update" onPress={onUpdate} />
        </View>

        {/* Logout Button */}
        <View style={styles.buttonWrapper}>
          <Button title="Logout" onPress={onLogout} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  head: {
    alignItems: 'center',
  },
  profilepic: {
    alignItems: 'center',
  },
  buttonWrapper: {
    marginBottom: 15, // Adjust the spacing as needed
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 17,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 110,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileScreen;