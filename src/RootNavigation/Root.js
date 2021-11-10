import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from '../RootNavigation/BottomTabs';
// import Slider from '../Account/Slider';
import Login from '../Account/Login';
import Register from '../Account/Register'
import Forgotpass from '../Account/Forgotpass';
import Contactlist from '../Contactlist/Contactlist';
import completed from '../NewCalls/completed';
import pending from '../NewCalls/pending';
import Success from '../Success/Success';
import expertcall from '../Expert/expertCall';




 

 
 
const Stack = createStackNavigator();
 
 
export default class RouteNavigation extends React.Component {
  state = { skip: undefined, comp: '' };
 
  render() {

 

    return (
        <>
        <NavigationContainer>
         <Stack.Navigator
            initialRouteName='Slider'
            screenOptions={{ headerShown: false }}>
              {/* <Stack.Screen name="Slider" component={Slider} /> */}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Forgotpass" component={Forgotpass} />

            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen name="Contactlist" component={Contactlist} />
            <Stack.Screen name="completed" component={completed} />
            <Stack.Screen name="pending" component={pending} />
            <Stack.Screen name="Success" component={Success} />
            <Stack.Screen name="expertcall" component={expertcall} />




               {/* <Stack.Screen name="BottomTabs" component={BottomTabs} /> */}
            {/* <Stack.Screen name="Home" component={Home} /> */}
            
          </Stack.Navigator> 

        </NavigationContainer>
      </>
     
    );
  }
}
