import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import Colors from './../utils/colors';
import {FONTSCALE, HEIGHT, WIDTH} from './../utils/constants';

const Input: React.FC<TextInputProps> = ({
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  secureTextEntry = false,
  style,
  multiline,
  keyboardType,
  numberOfLines,
  textAlignVertical,
  testID,
}): React.JSX.Element => {
  return (
    <TextInput
      testID={testID}
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      keyboardType={keyboardType}
      numberOfLines={numberOfLines}
      textAlignVertical={textAlignVertical}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: HEIGHT * 0.06,
    borderRadius: 8,
    paddingLeft: WIDTH * 0.03,
    fontSize: FONTSCALE * 16,
    fontFamily: 'Inter-Regular',
    lineHeight: FONTSCALE * 20,
    backgroundColor: Colors.white,
  },
});

export default React.memo(Input);
