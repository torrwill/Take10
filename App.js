import React from 'react';
import { View, Text, Button } from 'react-native-ui-lib';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Home Screen</Text>
    <Button
      title="Go to Grounding"
      onPress={() => navigation.navigate('Grounding')}
    />
    <Button
      title="Go to Deep Breathing"
      onPress={() => navigation.navigate('Deep Breathing')}
    />
    <Button
      title="Go to Resources"
      onPress={() => navigation.navigate('Resources')}
    />
  </View>
)

const GroundingScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Grounding Screen</Text>
    </View>
  )
}

const DeepBreathingScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Deep Breathing Screen</Text>
    </View>
  )
}

const ResourcesScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Resources Screen</Text>
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Grounding" component={GroundingScreen} />
        <Stack.Screen name="Deep Breathing" component={DeepBreathingScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

