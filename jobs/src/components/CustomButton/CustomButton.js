import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './CustonButton.style';

const CustomButton = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
