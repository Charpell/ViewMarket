import React from 'react'
import { View, Text } from 'react-native'
import AppButton from '../../AppButton'
import { useFormikContext } from 'formik'

export default function index({ title }) {
    const { handleSubmit } = useFormikContext()
    return (
        <AppButton title={title} onPress={handleSubmit} />
    )
}
