import { Stack } from 'expo-router/stack';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import { supabase } from '../supabase';
import { useRouter } from 'expo-router';
import { getUserData } from '../services/userService'
import { User } from '@supabase/auth-js';
import { TimerProvider } from '@/constants/TimerContext';
import { UserProvider } from './UserContext'; // Import UserProvider

const _layout = () => {
  return (
    <AuthProvider>
      <TimerProvider>
        <UserProvider>
          <MainLayout />
        </UserProvider>
      </TimerProvider>
    </AuthProvider>
  );
}

const MainLayout = () => {
  const { setAuth, setUserData } = useAuth();
  const router = useRouter();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log('session user: ', session?.user.id);

      if(session){
        setAuth(session?.user);
        updateUserData(session?.user)
        router.replace('/(tabs)/Home');
      }else{
        setAuth(null);
        router.replace('/')
      }
    })
  }, []);

  const updateUserData = async (user: User) => {
    let res = await getUserData(user?.id);
    if(res.success) {
      setUserData(res.data)
    }
  }

  return (
    <View style={styles.container}>
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}

export default _layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
});