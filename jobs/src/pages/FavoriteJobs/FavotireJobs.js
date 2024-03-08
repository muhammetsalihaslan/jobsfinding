import React from 'react';
import {FlatList, View} from 'react-native';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const FavoriteJobs = () => {
  const {error, loading} = useFetch();

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={}
        renderItem={renderJobs}
        ListFooterComponent={() => <View style={styles.buttonContainer}></View>}
      />
    </View>
  );
};

export default FavoriteJobs;
