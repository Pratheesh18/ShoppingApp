import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
    return(
       <SafeAreaProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ProductList">
                <Stack.Screen name="ProductList" component={ProductListScreen} />
                <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
       </SafeAreaProvider>
    );
};

export default App;