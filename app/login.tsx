import { Alert, StyleSheet, Text, View, Pressable, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { hp, wp } from '@/helpers/common';
import { Colors } from '@/constants/Colors';
import Input from '@/components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { supabase } from '../supabase';
import { useUser } from './UserContext'; // Import useUser

const Login = () => {
  const router = useRouter();
  const { setUser } = useUser(); // Get setUser from useUser
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!email || !password) {
      Alert.alert('Login', 'Please fill all the fields');
      return;
    }
    setLoading(true);
  
    let Email = email.trim();
    let Password = password.trim();
  
    const { error, data } = await supabase.auth.signInWithPassword({
      email: Email,
      password: Password
    });
  
    if (error) {
      Alert.alert('Login', error.message);
    } else {
      setUser(data.user); // Set the user in the context
      router.replace('/(tabs)/Home'); // Navigate to the home screen
    }
    setLoading(false);
  };

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Pressable onPress={() => router.back()} style={styles.buttonBack}>
          <Icon name="arrow-back" size={24} color="#000" />
        </Pressable>

        <View>
          <Text style={styles.welcomeText}>Hey,</Text>
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.instructionText}>Please login to continue</Text>

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

          <Text style={styles.forgetPassword}>Forgot Password?</Text>
        </View>

        <View style={styles.buttonfooter}>
          {loading ? ( 
            <ActivityIndicator size="large" color={Colors.highlight} />
          ) : (
            <Pressable onPress={onSubmit} style={styles.button}>
              <Text style={styles.text}>Login</Text>
            </Pressable>
          )}
          <View style={styles.bottomText}>
            <Text style={styles.loginText}>Don't have an account!</Text>
            <Pressable onPress={() => router.push('/signUp')}>
              <Text style={[styles.loginText, { color: Colors.highlight, fontWeight: '700' }]}>
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(5),
    fontWeight: '900',
    color: 'black',
    fontFamily: 'SFProDisplay-Bold',
  },
  form: {
    gap: 25,
  },
  instructionText: {
    fontSize: hp(2.5),
    fontWeight: '500',
    color: Colors.text,
    fontFamily: 'SFProDisplay-Regular',
  },
  forgetPassword: {
    textAlign: 'right',
    fontWeight: '700',
    color: Colors.text,
    fontFamily: 'SFProDisplay-Bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  footerText: {
    textAlign: 'center',
    color: Colors.gray,
    fontSize: hp(1.6),
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
    fontFamily: 'SFProDisplay-Bold',
    fontWeight: '600',
    textAlign: 'center',
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'SFProDisplay-Bold',
    gap: 5,
  },
  loginText: {
    textAlign: 'center',
    color: '#494949',
    fontSize: hp(1.6),
    fontWeight: '500',
    fontFamily: 'SFProDisplay-Regular',
  },
  buttonfooter: {
    gap: 30,
    width: '100%',
  },
});