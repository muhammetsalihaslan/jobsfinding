import React from 'react';
import {Text, View} from 'react-native';
import styles from './JobsCard.style';

const JobsCard = ({jobs}) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.jobsname}>
        {jobs.name}
      </Text>
      <Text>{jobs.company.name}</Text>
      <Text>{jobs.locations[0].name}</Text>
      <View style={styles.innerContainer}>
        <Text>{jobs.levels[0].name}</Text>
      </View>
    </View>
  );
};

export default JobsCard;
