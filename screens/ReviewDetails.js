import React from 'react'
import { View, StyleSheet, Text, Button, Image } from 'react-native'
import { globalStyles, Images } from '../styles/global'
import CardReview from '../shared/card'
//Didn't used the native base card because it was not rendering image at its footer for rating



export default ReviewDetails = ({ navigation, route }) => {

    const { title, body, rating } = route.params


    return (
        <View style={globalStyles.container}>
            <CardReview>
                <Text style={globalStyles.titleText} >{title}</Text>
                <Text></Text>
                <Text>{body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone Rating: </Text>
                    <Image source={Images.ratings[rating]} />
                </View>
            </CardReview>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
})
