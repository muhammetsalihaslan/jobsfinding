import React from 'react';
import {FlatList, View} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Config from 'react-native-config';

const JobsPage = () => {
  const [page, setPage] = useState(0);
  const {data, error, loading} = useFetch(`${Config.API_URL}${page}`);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  const renderJobs = () => (
    
  )

  return (
    <View>
      <FlatList data={data.results} renderItem={renderJobs} />
    </View>
  );
};

export default JobsPage;
