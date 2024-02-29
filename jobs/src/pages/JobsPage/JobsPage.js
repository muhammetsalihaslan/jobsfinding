import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Config from 'react-native-config';
import JobsCard from '../../components/JobsCard/JobsCard';

const JobsPage = () => {
  const [page, setPage] = useState(0);

  const {data, error, loading} = useFetch(Config.API_URL + `${page}`);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  const renderJobs = ({item}) => <JobsCard jobs={item} />;

  return (
    <View>
      <FlatList data={data.results} renderItem={renderJobs} />
    </View>
  );
};

export default JobsPage;
