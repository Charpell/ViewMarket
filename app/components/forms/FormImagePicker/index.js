import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageInputList from '../../ImageInput/multiple'
import ErrorMessage from '../ErrorMessage'
import { useFormikContext } from 'formik'

export default function index({ name}) {
    const { errors, setFieldValue, touched, values } = useFormikContext()
    const imageUris = [...values[name]]

  const handleAdd = uri => {
    setFieldValue(name, [...imageUris, uri])
  }

  const handleRemove = uri => {
    setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri))
  }

    return (
        <>
            <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {}
})

