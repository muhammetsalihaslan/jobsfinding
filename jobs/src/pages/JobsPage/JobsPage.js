import React from 'react';
import {FlatList, Text, View} from 'react-native';
import useFetch from '../../hooks/useFetch';

const JobsPage = () => {
  const {data, error, loading} = useFetch();

  return (
    <View>
      <FlatList />
    </View>
  );
};

export default JobsPage;
