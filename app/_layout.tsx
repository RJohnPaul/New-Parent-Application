import { Stack } from 'expo-router/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Layout() {
  return (
    <View style={styles.container}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '100%',
    paddingTop: 10,
    marginBottom: 10,
    backgroundColor: 'white', // Optional: set background color
  },
});
