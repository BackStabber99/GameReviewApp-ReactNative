import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails'
import Header from '../shared/Header';


const Stack = createStackNavigator();

const HomeStack = () => {
    return (

        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
                backgroundColor: '#eee',
                height: 70
            },
            headerTintColor: '#444',

        }}
        >
            <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({
                headerTitle: () => <Header navigation={navigation} title='GameZone' />,
            })}
            />

            <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Review Details' }} />

        </Stack.Navigator>

    )
}

export default HomeStack
