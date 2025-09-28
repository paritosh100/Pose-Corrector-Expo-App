import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * A placeholder screen that will eventually host the pose correction
 * functionality for each exercise.  The selected exercise is
 * passed through the route parameters.  For now, we simply
 * display the name of the exercise and a short message.  When
 * integrating pose detection, replace this content with a
 * camera preview and real‑time feedback overlay.
 */
export default function ExerciseScreen({ route }) {
  const { exercise } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{exercise.name}</Text>
      <Text style={styles.description}>
        This is a placeholder for {exercise.name}. Pose correction functionality
        will appear here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
});