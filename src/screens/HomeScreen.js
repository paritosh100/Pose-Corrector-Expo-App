import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ExerciseTile from '../components/ExerciseTile';

// Define a static list of exercises with associated images.  The
// images live in the assets/images directory.  If you add more
// exercises later, simply append to this array and include a
// corresponding image file.
const exercises = [
  { id: 'pushups', name: 'Push Ups', image: require('../../assets/images/pushups.png') },
  { id: 'squats', name: 'Squats', image: require('../../assets/images/squats.png') },
  { id: 'lunges', name: 'Lunges', image: require('../../assets/images/lunges.png') },
  { id: 'planks', name: 'Planks', image: require('../../assets/images/planks.png') },
  { id: 'chairdips', name: 'Chair Dips', image: require('../../assets/images/chairdips.png') },
];

/**
 * The HomeScreen renders a grid of exercise tiles.  Each tile
 * represents an exercise and navigating to the Exercise screen
 * passes along the selected exercise as a parameter.  Using a
 * FlatList with numColumns=2 makes the grid responsive across
 * different device sizes.
 */
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <ExerciseTile
            item={item}
            onPress={() => navigation.navigate('Exercise', { exercise: item })}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});