import React from 'react';
import {Text, View} from 'react-native';
import styles from './JobsCard.style';

const JobsCard = ({jobs}) => {
  return (
    <View style={styles.container}>
      <Text>{jobs.name}</Text>
      <Text>{jobs.company.name}</Text>
      <Text>{jobs.locations[0].name}</Text>
      <Text>{jobs.levels[0].name}</Text>
    </View>
  );
};

export default JobsCard;
