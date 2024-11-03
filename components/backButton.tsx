import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  onPress?: () => void;
  router: any; // Add this prop to receive the router in the parent component
};

const BackButton = ({ router }: Props) => {
  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
      <Icon name="arrow-back" size={24} color="#000" /> {/* Left arrow icon */}
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
});
