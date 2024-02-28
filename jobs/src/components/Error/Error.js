import LottieView from 'lottie-react-native';
import React from 'react';

const Error = () => {
  return (
    <LottieView
      style={{flex: 1}}
      source={require('../../../assets/error.json')}
    />
  );
};

export default Error;
