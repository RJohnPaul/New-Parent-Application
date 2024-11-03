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

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const onSubmit = async () => {
    if (!email || !password || !userName) {
      Alert.alert('Sign Up', 'Please fill all the fields');
      return;
    }
    setLoading(true); // Start loading

    let name = userName.trim();
    let Email = email.trim();
    let Password = password.trim();

    const { data: { session }, error } = await supabase.auth.signUp({
      email: Email,
      password: Password,
      options: {
        data: {
          name
        }
      }
    });


    if (error) {
      Alert.alert('Sign up', error.message);
    }

    setLoading(false); // Stop loading
  };

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Pressable onPress={() => router.back()} style={styles.buttonBack}>
          <Icon name="arrow-back" size={24} color="#000" />
        </Pressable>

        <View>
          <Text style={styles.welcomeText}>Let's</Text>
          <Text style={styles.welcomeText}>Get Started</Text>
        </View>

        <View style={styles.form}>
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

        </View>

        <View style={styles.buttonfooter}>
          {loading ? ( // Show loading spinner if loading state is true
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
  form: {
    gap: 25,
  },
  instructionText: {
    fontSize: hp(2.5),
    fontWeight: '500',
    color: Colors.text,
    fontFamily: 'SFProDisplay-Regular',
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
  buttonfooter: {
    gap: 30,
    width: '100%',
  },
});
