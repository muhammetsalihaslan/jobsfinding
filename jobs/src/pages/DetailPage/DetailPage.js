import React from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './DetailPage.style';
import RenderHTML from 'react-native-render-html';
import {useDispatch} from 'react-redux';

const DetailPage = ({route}) => {
  const dispatch = useDispatch();
  const jobs = route.params.item;

  const handleFavorite = () => {
    dispatch(addFavorite(jobs));
  };

  return (
    <ScrollView style={styles.container}>
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

      <RenderHTML
        baseStyle={styles.bodyText}
        source={{html: jobs.contents}}
        contentWidth={Dimensions.get('window').width}
      />

      <View style={styles.button}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.button1Text}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleFavorite}>
          <Text style={styles.button2Text}>Favorite Job</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailPage;
