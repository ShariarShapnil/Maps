import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function HomeScreen({ navigation }) {
  const fences = useSelector(state => state.fences.fenceList);

  return (
    <View style={styles.container}>
      <Button title="Add New Map" onPress={() => navigation.navigate('Map')} />
      <Text style={styles.title}>Saved Maps:</Text>
      <FlatList
        data={fences}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name || 'Unnamed Fence'}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No fences saved yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, marginVertical: 10 },
  item: { padding: 10, borderBottomColor: '#ccc', borderBottomWidth: 1 },
});
