import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Cardapio from './src/screens/Cardapio';
import Pagamento from './src/screens/Pagamento';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home page">
        <Stack.Screen name="Home page" component={Home} />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="Pagamento" component={Pagamento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

