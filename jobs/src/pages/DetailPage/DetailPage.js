import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './DetailPage.style';

const DetailPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.firstHead}>Implementation Consultant</Text>
        <View style={styles.location}>
          <Text style={styles.location1}>Location:</Text>
          <Text style={styles.location2}> Paris, France</Text>
        </View>
        <View style={styles.level}>
          <Text style={styles.level1}>Job Level:</Text>
          <Text style={styles.level2}> Mid Level</Text>
        </View>
        <Text style={styles.job}>Job Detail</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          maiores eius impedit voluptates placeat soluta labore, inventore
          fugiat non nobis quam, provident consequuntur eligendi velit. Iusto
          aut saepe nihil dicta ipsam accusantium quam quis dolores doloremque
          vero consectetur sit, molestias amet aperiam excepturi nulla, atque
          vel deleniti nemo distinctio veniam?
        </Text>
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
