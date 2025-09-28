import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import the screen components
import HomeScreen from './src/screens/HomeScreen';
import ExerciseScreen from './src/screens/ExerciseScreen';

// Create a stack navigator to handle simple navigation between screens
const Stack = createStackNavigator();

/**
 * The root component of the app.  It defines a basic two‑screen
 * navigation flow: the Home screen lists available exercises and the
 * Exercise screen shows a placeholder for the selected workout.  This
 * component is intentionally minimal; it will serve as the basis for
 * integrating pose detection functionality later on.
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Workout' }}
        />
        <Stack.Screen
          name="Exercise"
          component={ExerciseScreen}
          // Dynamically set the header title based on the selected exercise
          options={({ route }) => ({ title: route.params.exercise.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}