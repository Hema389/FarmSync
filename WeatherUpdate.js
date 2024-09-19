import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherUpdate = ({ weather }) => {
  return (
    <View style={styles.container}>
      <Text>Weather Update: {weather}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#e0f7fa',
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default WeatherUpdate;
