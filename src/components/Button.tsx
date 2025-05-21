import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Colors from './../utils/colors';
import {FONTSCALE, ISIOS, WIDTH} from './../utils/constants';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({title, onPress}): React.JSX.Element => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          padding: ISIOS ? WIDTH * 0.04 : WIDTH * 0.035,
        },
      ]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.black,
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.white,
    fontFamily: 'Inter-Bold',
    fontSize: FONTSCALE * 16,
    lineHeight: FONTSCALE * 20,
    textAlign: 'center',
  },
});

export default React.memo(Button);
