import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import useFetch from '../../hooks/useFetch';
import styles from './FavoriteJobs.style';
import {useSelector} from 'react-redux';
import JobsCard from '../../components/JobsCard';

const FavoriteJobs = () => {
  const {loading} = useFetch();
  const favoriteJobs = useSelector(state => state.favorite.favoriteJobs);

  if (loading) {
    return <Loading />;
  }

  const renderFavoriteJobs = ({item}) => <JobsCard jobs={item} />;

  return (
    <View style={styles.container}>
      {favoriteJobs.length === 0 ? (
        <View style={styles.container}>
          <Text style={styles.text}>You don't have any favourite job yet!</Text>
        </View>
      ) : (
        <FlatList data={favoriteJobs} renderItem={renderFavoriteJobs} />
      )}
    </View>
  );
};

export default FavoriteJobs;
