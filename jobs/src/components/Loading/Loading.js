import LottieView from 'lottie-react-native';
import React from 'react';

const Loading = () => {
  return (
    <LottieView
      style={{flex: 1}}
      source={require('../../../assets/loading.json')}
    />
  );
};

export default Loading;
