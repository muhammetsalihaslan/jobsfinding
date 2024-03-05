import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './JobsCard.style';

const JobsCard = ({jobs, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Text numberOfLines={1} style={styles.jobsname}>
          {jobs.name}
        </Text>
        <Text style={styles.companyName}>{jobs.company.name}</Text>
        <Text style={styles.locationsName}>{jobs.locations[0].name}</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.levelsName}>{jobs.levels[0].name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobsCard;
