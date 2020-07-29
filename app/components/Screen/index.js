import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'

export default function index(props) {
    return (
        <SafeAreaView style={[styles.screen, props.style]}>
            <View style={[styles.view, props.styles]}>
            {props.children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    },
    view: {
        flex: 1
    }
})