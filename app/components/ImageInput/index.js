import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import colors from '../../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function index({ imageUri, onChangeImage }) {
    const requestPermission = async () => {
        const result = await ImagePicker.requestCameraPermissionsAsync()
        if (!result.granted) {
          alert('You need to enable permission to access the libary')
        }
      }

      useEffect(() => {
        requestPermission()
      }, [])

    const handlePress = () => {
        if (!imageUri) selectImage()
        else  Alert.alert('Delete', 'Are you sure you want to delete this image?', [{ text: "Yes", onPress: () => onChangeImage(null)}, { text: "No" }])
    }

    const selectImage = async () => {
        try { 
          const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 0.5
          })
          if (!result.cancelled) {
            onChangeImage(result.uri)
          }
        } catch (error) {
          console.log('Error reading an Image')
        }
      }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons name="camera" size={40} colors={colors.medium} />}
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
       alignItems: 'center',
       backgroundColor:  colors.light,
       borderRadius: 15,
       height: 100,
       justifyContent: "center",
       overflow: "hidden",
       width: 100
    }, 
    image: {
        height: '100%',
        width: '100%'
    }
})

