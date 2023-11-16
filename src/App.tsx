
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from './screens/SignIn';
import Register from './screens/Register';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();
const App = () => {
 

  return (
    <>
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
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
      </Stack.Navigator>
     </NavigationContainer>
    </>
  );
};
export default App;