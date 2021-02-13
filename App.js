import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native-ui-lib';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Pulse = require('react-native-pulse').default;

const Spacer = ({ ...styles }) => (
  <View style={styles} />
)

const HomeScreen = ({ navigation }) => (

  <View>
    <Text>Home Screen</Text>
    <Spacer height={ 20 } />
    <Button
      title="Go to Grounding"
      onPress={() => navigation.navigate('Grounding')}
    />
    <Spacer height={20} />
    <Button
      title="Go to Deep Breathing"
      onPress={() => navigation.navigate('Deep Breathing')}
    />
    <Spacer height={20} />
    
    <Button
      label="Go to Resources"
      style={{marginBottom: 20}}
      size={Button.sizes.medium}
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
    <View style={{ 
      flexDirection:'column',
      justifyContent:'center',
      flex: 1,
    }}>
      <Text style={{
        width: "100%",
        textAlign: "center",
      }}>
        Deep Breathing Screen
      </Text>
      <Pulse color="blue" numPulses={ 1 } diameter={ 400 } speed={ 40 } duration={ 14000 } />
    </View>
  )
}

const ResourcesScreen = ({ navigation }) => {
  /*

  */
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

