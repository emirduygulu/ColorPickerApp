import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ColorPickerPage from './src/screens/ColorPickerPage';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="ColorPicker" component={ColorPickerPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

