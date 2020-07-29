import React, { useEffect, useRef } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import colors from '../../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ImageInput from './'

export default function index({ imageUris = [], onRemoveImage, onAddImage }) {
    const scrollView = useRef()

    return (
            <View>
                <ScrollView ref={scrollView} horizontal={true} onContentSizeChange={() => scrollView.current.scrollToEnd()}>
                    <View style={styles.container}>
                    {imageUris.map(uri => 
                        <View style={styles.image}>
                            <ImageInput imageUri={uri} key={uri} onChangeImage={() => onRemoveImage(uri)} />
                        </View>
                    )}
                    <ImageInput onChangeImage={uri => onAddImage(uri)} />
                </View>
                </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flexDirection: 'row'
    },
    image: {
        marginRight: 10 
    }
})

