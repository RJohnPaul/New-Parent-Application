import { Alert, ActivityIndicator, Pressable, Text, View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import Input from '@/components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { supabase } from '../supabase';
import { hp, wp } from '@/helpers/common';
import { Colors } from '@/constants/Colors';
import { useUser } from './UserContext'; // Import useUser

// Utility function to generate a 5-digit random ID
const generateRandomID = () => Math.floor(10000 + Math.random() * 90000);

const SignUp = () => {
  const router = useRouter();
  const { setUser } = useUser(); // Get setUser from useUser
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const [showCongrats, setShowCongrats] = useState(false);

  const onSubmit = async () => {
    if (!email || !password || !userName) {
      Alert.alert('Sign Up', 'Please fill all the fields');
      return;
    }
    setLoading(true);

    let trimmedName = userName.trim();
    let trimmedEmail = email.trim();
    let trimmedPassword = password.trim();
    const randomID = generateRandomID();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: trimmedEmail,
        password: trimmedPassword,
      });

      if (error) throw error;

      const { error: insertError } = await supabase
        .from('Profiles')
        .insert([{ mainid: randomID, name: trimmedName , email: trimmedEmail}]);

      if (insertError) throw insertError;

      setUser(data.user); // Set the user in the context
      setShowCongrats(true);
    } catch (error) {
      Alert.alert('Sign-up Error', (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  if (showCongrats) {
    return (
      <ScreenWrapper bg="white">
        <StatusBar style="dark" />
        <View style={styles.container}>
          <Text style={styles.congratsText}>Congratulations, {userName}! You are registered.</Text>
          <Pressable onPress={() => router.replace('/login')} style={styles.button}>
            <Text style={styles.text}>Now, Login</Text>
          </Pressable>
        </View>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Pressable onPress={() => router.back()} style={styles.buttonBack}>
          <Icon name="arrow-back" size={24} color="#000" />
        </Pressable>
        <Text style={styles.welcomeText}>Let's Get Started</Text>
        <Text style={styles.instructionText}>Please fill the details to create an account</Text>
        <Input
          placeholder="Enter your Name"
          icon={<Icon name="person" size={24} color={Colors.textLight} />}
          onChangeText={setUserName}
        />
        <Input
          placeholder="Enter your email"
          icon={<Icon name="email" size={24} color={Colors.textLight} />}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          placeholder="Enter your password"
          icon={<Icon name="lock" size={24} color={Colors.textLight} />}
          onChangeText={setPassword}
          secureTextEntry
        />
        {loading ? (
          <ActivityIndicator size="large" color={Colors.highlight} />
        ) : (
          <Pressable onPress={onSubmit} style={styles.button}>
            <Text style={styles.text}>Sign Up</Text>
          </Pressable>
        )}
        <View style={styles.bottomText}>
          <Text style={styles.loginText}>Already have an account!</Text>
          <Pressable onPress={() => router.push('/login')}>
            <Text style={[styles.loginText, { color: Colors.highlight, fontWeight: '700' }]}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(5),
    fontWeight: '800',
    color: 'black',
    fontFamily: 'SFProDisplay-bold',
    textAlign: 'left',
  },
  instructionText: {
    fontSize: hp(2.5),
    fontWeight: '500',
    color: Colors.text,
    fontFamily: 'SFProDisplay-Regular',
  },
  buttonBack: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  button: {
    marginHorizontal: wp(2),
    backgroundColor: Colors.highlight,
    height: hp(6.6),
    borderRadius: 18,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  text: {
    fontSize: hp(3),
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'SFProDisplay-Bold',
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  loginText: {
    textAlign: 'center',
    color: '#494949',
    fontSize: hp(2),
    fontWeight: '500',
    fontFamily: 'SFProDisplay-Regular',
  },
  congratsText: {
    fontSize: hp(4),
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.highlight,
    marginVertical: hp(10),
    fontFamily: 'SFProDisplay-Bold',
  },
});