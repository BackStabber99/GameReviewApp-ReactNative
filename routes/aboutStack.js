import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/About';
import Header from '../shared/Header';

const Stack = createStackNavigator();


const AboutStack = () => {
    return (

        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#eee', height: 80 },
            headerTintColor: '#444'
        }}
        >
            <Stack.Screen name="About" component={About} options={({ navigation }) => ({
                headerTitle: () => <Header navigation={navigation} title='About GameZone' />,
            })}
            />
        </Stack.Navigator>

    )
}

export default AboutStack
