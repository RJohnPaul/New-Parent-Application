import React, { useState } from 'react';
import { View, TextInput, Text, Image, Button, StyleSheet, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { supabase } from '../../supabase';

const ProfileScreen = () => {
  const router = useRouter();
  const [profilePic, setProfilePic] = useState('');
  const [name, setName] = useState('');
  const [parentname, setParentname] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');

  const onLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert('Sign Out', 'Error signing out!');
    }
  };

  return (
    <View style={styles.container}>

<View style={styles.header}>
<MaterialIcons name="cancel" size={30} color="#000" onPress={() => router.back()}/>  
    <View style={styles.head}> <Text style={styles.headerText}>My Profile</Text></View> 
    </View>
        
        
        


      <View style={styles.profilepic}>  
      {/* Profile Picture Holder */}
      <Image
        source={profilePic ? { uri: profilePic } : require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg')}
        style={styles.profilePic}
      />
       </View>

      {/* Name Holder */}
      <Text style={styles.label}> Baby's Name:</Text>
      <TextInput
        placeholder="Enter your baby's name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

<Text style={styles.label}> Parent Name:</Text>
      <TextInput
        placeholder="Enter your name"
        value={parentname}
        onChangeText={setParentname}
        style={styles.input}
      />

<Text style={styles.label}> Email:</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      {/* DOB Holder */}
      <Text style={styles.label}>Date of Birth:</Text>
      <TextInput
        placeholder="Enter your baby,s date of birth (e.g., YYYY-MM-DD)"
        value={dob}
        onChangeText={setDob}
        style={styles.input}
      />

      {/* Logout Button */}
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    
    
    
    
  },
  head:{
    alignItems: 'center',
    
    


  },
  profilepic: {
    alignItems: 'center'

  },
  
  header: {
   
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:17,
    
 },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 110
    
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
});

export default ProfileScreen;