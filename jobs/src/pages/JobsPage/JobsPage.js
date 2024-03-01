import React, {useState} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Config from 'react-native-config';
import JobsCard from '../../components/JobsCard/JobsCard';
import styles from './JobsPage.style';
import CustomButton from '../../components/CustomButton/CustomButton';

const JobsPage = () => {
  const [page, setPage] = useState(0);

  const {data, error, loading} = useFetch(Config.API_URL + `${page}`, page);

  console.log(page);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  const renderJobs = ({item}) => <JobsCard jobs={item} />;

  const handleDown = () => {
    page === 0 ? '' : setPage(page - 1);
  };

  const handleUp = () => setPage(page + 1);

  return (
    <View style={styles.container}>
      <FlatList
        data={data.results}
        renderItem={renderJobs}
        ListFooterComponent={() => (
          <View style={styles.buttonContainer}>
            <CustomButton title="down" onPress={handleDown} />
            <CustomButton title="up" onPress={handleUp} />
          </View>
        )}
      />
    </View>
  );
};

export default JobsPage;
