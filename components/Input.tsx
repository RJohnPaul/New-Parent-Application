import { StyleSheet, TextInput, View, TextInputProps, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { Colors } from '@/constants/Colors';
import { hp } from '@/helpers/common';

type Props = TextInputProps & {
  containerStyles?: ViewStyle;
  icon?: ReactNode;
};

const Input = ({ containerStyles, icon, onChangeText, ...textInputProps }: Props) => {
  return (
    <View style={[styles.container, containerStyles]}>
      {icon && icon}
      <TextInput
        style={styles.textInput}
        placeholderTextColor={Colors.textLight}
        onChangeText={onChangeText}
        {...textInputProps}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp(7.2),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.4,
    borderColor: Colors.text,
    borderRadius: 10, 
    paddingHorizontal: 18,
    gap: 12,
  },
  textInput: {
    fontFamily: 'SFProDisplay-Bold',
    flex: 1,
    borderWidth: 0, 
  },
});
