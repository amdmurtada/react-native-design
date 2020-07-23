import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoadAssets } from './src/components';
import { Onboarding } from './src/Authentication/Onboarding';

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () =>{
    return (<AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    </AuthenticationStack.Navigator>)
}

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
}



export default function App() {

  return (
    <LoadAssets {...{ fonts}}>
      <AuthenticationNavigator />
      </LoadAssets>
  );
}