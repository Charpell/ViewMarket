import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'
import useLocation from '../hooks/useLocation'

import Screen from '../components/Screen'
import { AppForm, AppFormField, SubmitButton, AppFormPicker, FormImagePicker } from '../components/forms'
import CategoryPickerItem from '../components/CategoryPickerItem'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(1000).label("Title"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().required().min(1, "Please select at least one image")
})

const categories = [
    { label: "Furniture", value: 1, backgroundColor: 'red', icon: 'apps' },
    { label: "Clothing", value: 2, backgroundColor: 'green', icon: 'email' },
    { label: "Camera", value: 3, backgroundColor: 'blue', icon: 'lock' }
]

export default function ListEditingScreen() {
    const location = useLocation()
    
    return (
        <Screen style={styles.container}>
           
                <AppForm
                    initialValues={{ title: "", price: "", description: "", category: null, images: []}}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <FormImagePicker name="images"/>
                    <AppFormField 
                        maxLength={255}
                        name="title"
                        placeholder="Title"
                    />
                    
                   
                    <AppFormField 
                        keyboardType="numeric"
                        maxLength={8}
                        name="price"
                        placeholder="Price"
                        width={120}
                    />

                    <AppFormPicker 
                        items={categories}
                        name="category"
                        placeholder="Category"
                        width="50%"
                        PickerItemComponent={CategoryPickerItem}
                        numberOfColumns={3}

                    />
                    
                    <AppFormField 
                        maxLength={255}
                        multiline 
                        name="description"
                        numberOfLines={3}
                        placeholder="Description"
                    />
                    
                    <SubmitButton title="Post" />
                </AppForm>
            
        </Screen>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})