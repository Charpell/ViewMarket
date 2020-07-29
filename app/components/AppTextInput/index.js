import React from 'react'
import { View, Text, StyleSheet, TextInput, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../config/colors'
import defaultStyles from '../../config/styles'

export default function index({ icon, width = "100%", ...otherProps }) {
    return (
        <View style={[styles.container, { width }]}>
            {icon && <MaterialCommunityIcons name={icon} style={styles.icon} size={20} color={colors.medium} />}
            <TextInput placeholderTextColor={defaultStyles.colors.medium} style={defaultStyles.text} {...otherProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: colors.light,
       borderRadius: 25,
       flexDirection: "row",
       padding: 15,
       marginVertical: 10 
    },
    textInput: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    },
    icon: {
        marginRight: 10
    }
})

