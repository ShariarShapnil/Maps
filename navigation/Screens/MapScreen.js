import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapScreen({ navigation }) {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  if (!region) return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Button title="Loading Map..." disabled /></View>;

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region} showsUserLocation>
        {/* Polygon will be drawn here */}
      </MapView>
      <Button title="Center Location" onPress={() => {
        // center back to current location
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
