import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './DetailPage.style';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import RenderHTML from 'react-native-render-html';

const DetailPage = ({route}) => {
  const jobs = route.params.item;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.firstHead}>{jobs.name}</Text>
        <View style={styles.location}>
          <Text style={styles.location1}>Location:</Text>
          <Text style={styles.location2}> {jobs.locations[0].name}</Text>
        </View>
        <View style={styles.level}>
          <Text style={styles.level1}>Job Level:</Text>
          <Text style={styles.level2}> {jobs.levels[0].name}</Text>
        </View>
        <Text style={styles.job}>Job Detail</Text>
      </View>
      <View style={styles.body}>
        <RenderHTML baseStyle={styles.bodyText} />
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.button1Text}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.button2Text}>Favorite Job</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailPage;
