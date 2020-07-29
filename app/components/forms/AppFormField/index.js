import React from 'react'
import AppTextInput from '../../AppTextInput'
import ErrorMessage from '../ErrorMessage'
import { useFormikContext } from 'formik'

export default function index({ name, width, ...otherProps }) {
    const { setFieldTouched, touched, handleChange, errors } = useFormikContext()
    return (
       <>
        <AppTextInput 
            onChangeText={handleChange(name)}
            onBlur={() => setFieldTouched(name)}
            width={width}
            {...otherProps}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
       </>
    )
}
