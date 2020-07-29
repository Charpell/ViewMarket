import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppText from '../../AppText'

export default function index({ error, visible }) {
    if (!visible || !error) return null
    return (
        <AppText style={styles.error}>{error}</AppText>
    )
}


const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
})
