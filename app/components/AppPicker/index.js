import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../config/colors'
import defaultStyles from '../../config/styles'
import AppText from '../AppText'
import Screen from '../Screen'
import PickerItem from './PickerItem'

export default function index({ icon, placeholder, items, onSelectedItem, selectedItem , width = "100%", PickerItemComponent = PickerItem, numberOfColumns = 1}) {
    const [ modalVisible, setmodalVisible ] = useState(false)
    return (
        <>
        <TouchableWithoutFeedback onPress={() => setmodalVisible(true)}>
            <View style={[styles.container, { width }]}>
            {icon && <MaterialCommunityIcons name={icon} style={styles.icon} size={20} color={colors.medium} />}
            {
                selectedItem ?  <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>
            }
            <MaterialCommunityIcons name="chevron-down"  size={20} color={colors.medium} />
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Screen>
            <Button title="Close" onPress={() => setmodalVisible(false)} />
            <FlatList 
                data={items}
                keyExtractor={item => item.value.toString()}
                numColumns={numberOfColumns}
                renderItem={({ item}) => 
                <PickerItemComponent item={item} label={item.label} onPress={() => {
                    setmodalVisible(false)
                    onSelectedItem(item)
                }} />
            }
            />
            </Screen>
        </Modal>
        </>
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
    },
    text: {
        flex: 1
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1
    }
})
