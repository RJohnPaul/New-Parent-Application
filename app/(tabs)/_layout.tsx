// app/_layout.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import Tracking from '../tracking/Tracker';



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
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="dailylog"
          options={{
            title: 'Daily Log',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="book" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="memories"
          options={{
            title: 'Memories',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="calendar" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="evolution"
          options={{
            title: 'Evolution',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="line-chart" size={size} color={color} />
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
    bottom: 60, // Adjust this value based on the tab bar height to place FeedTracking above it
    left: 0,
    right: 0,
    zIndex: 1,
    alignItems: 'center',
  },
});
