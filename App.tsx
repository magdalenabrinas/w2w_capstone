import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignUpScreen from './src/screens/SignUp';
import LoginPage from './src/screens/LoginPage';
import HomePage from './src/screens/HomePage';
import WelcomePage from './src/screens/WelcomePage'; // Correct import path
import ProfilePage from './src/screens/ProfilePage';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
