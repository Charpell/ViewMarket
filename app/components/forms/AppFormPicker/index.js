import React from 'react'
import { useFormikContext } from 'formik'

import AppPicker from '../../AppPicker'
import ErrorMessage from '../ErrorMessage'

export default function index({ items, name, PickerItemComponent, placeholder, width, numberOfColumns }) {
    const { errors, setFieldValue, touched, values } = useFormikContext()
    return (
        <>
            <AppPicker 
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectionItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectionItem={values[name]}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}
