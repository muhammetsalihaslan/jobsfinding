import React from 'react';
import {Text, View} from 'react-native';
import styles from './JobsCard.style';

const JobsCard = ({jobs}) => {
  return (
    <View style={styles.container}>
      <Text>{jobs.name}</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
    </View>
  );
};

export default JobsCard;
