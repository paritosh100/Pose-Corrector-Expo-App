import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

/**
 * A simple presentational component representing a single exercise tile.
 * It displays an image and the exercise name.  On press, it calls
 * the provided onPress callback.  Feel free to tweak styling to
 * better suit your design language or integrate into a theme.
 */
const ExerciseTile = ({ item, onPress }) => (
  <TouchableOpacity style={styles.tile} onPress={onPress}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.name}>{item.name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ExerciseTile;