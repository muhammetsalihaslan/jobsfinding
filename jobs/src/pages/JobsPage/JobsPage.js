import React, {useState} from 'react';
import {Button, FlatList, View} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Config from 'react-native-config';
import JobsCard from '../../components/JobsCard/JobsCard';
import styles from './JobsPage.style';

const JobsPage = () => {
  const [page, setPage] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const {data, error, loading} = useFetch(Config.API_URL + `${page}`);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  const renderJobs = ({item}) => <JobsCard jobs={item} />;

  const handleEndReached = () => {
    setShowButton(true);
  };

  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const scrollHeight = event.nativeEvent.contentSize.height;
    const screenHeight = event.nativeEvent.layoutMeasurement.height;
    const bottomOffset = scrollHeight - offsetY - screenHeight;

    if (bottomOffset > 0.5) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.results}
        renderItem={renderJobs}
        onEndReached={handleEndReached}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      {showButton && (
        <View style={styles.buttonContainer}>
          <Button title="Press me" style={styles.button} />
        </View>
      )}
    </View>
  );
};

export default JobsPage;
