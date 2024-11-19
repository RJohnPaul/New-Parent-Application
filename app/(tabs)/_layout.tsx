// app/_layout.js
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import  Tracking  from '@/app/tracking/Tracker';

const home_icon = require('../../assets/images/home_icon.png')
const dailyLog = require('../../assets/images/dailyLog.png')
const memories = require('../../assets/images/memories.png')
const evolution = require('../../assets/images/evolution.png')

export default function Layout() {
  return (
    <View style={styles.container}>
      <View style={styles.feedTrackingContainer}>
      <Tracking />
      </View>
      <Tabs screenOptions={{ tabBarActiveTintColor: Colors.highlight, headerShown: false }}>
      
      <Tabs.Screen
          name="Home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={home_icon}
                style={{
                  width: size,
                  height: size,
                  tintColor: color, 
                }}
                resizeMode="contain"
              />
            ),
          }}
        
        />
        <Tabs.Screen
          name="dailylog"
          options={{
            title: 'Daily Log',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={dailyLog}
                style={{
                  width: size,
                  height: size,
                  tintColor: color, 
                }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="memories"
          options={{
            title: 'Memories',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={memories}
                style={{
                  width: size,
                  height: size,
                  tintColor: color, 
                }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="evolution"
          options={{
            title: 'Evolution',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={evolution}
                style={{
                  width: size,
                  height: size,
                  tintColor: color, 
}}
                resizeMode="contain"
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '100%',
  },
  feedTrackingContainer: {
    position: 'absolute',
    bottom: 60, 
    left: 0,
    right: 0,
    
    zIndex: 1,
    alignItems: 'center',
  },
});
