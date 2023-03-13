import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from "./navigators/BottomNavigator";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import OnboardingScreen from "./screens/OnboardingScreen";


const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="Details" component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


