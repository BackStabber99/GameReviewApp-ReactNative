import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ navigation, title }) => {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            {/*Icons*/}
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        position: "absolute",
        left: 0,
    },
    headerTitle: {
        flexDirection: "row"
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1,
    },
})
