
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from './screens/SignIn';
import Register from './screens/Register';
import Home from './screens/Home';
import Account from "./screens/Account";
import Browse from "./screens/Browse";

export type RootStackParamList ={
   Home: undefined;
   SignIn: undefined;
   Register: undefined;
}
const Stack = createNativeStackNavigator<RootStackParamList>();


const App = () => {
 

  return (
    <>
    <Browse />
     {/* <NavigationContainer>
      <Stack.Navigator initialRouteName='Register'>
        <Stack.Screen 
        name='SignIn'
        component={SignIn}
        options={{
          headerShown: false
        }}/>
        <Stack.Screen 
        name='Register'
        component={Register}
        options={{
          headerShown: false
        }}/>
         <Stack.Screen 
        name='Home'
        component={Home}
        options={{
          headerShown: false
        }}/>
        <Stack.Screen 
        name="Account"
        component={Account}
        options={
          {
            headerShown:false
          }
        }
        />
      </Stack.Navigator>
     </NavigationContainer> */}
    </>
  );
};
export default App;