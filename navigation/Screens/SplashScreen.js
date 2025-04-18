import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000); // After 2 seconds move to Home
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to GeoFence App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4caf50' },
  text: { fontSize: 24, color: 'white', fontWeight: 'bold' },
});
