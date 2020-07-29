import { StyleSheet } from 'react-native'
import colors from '../../config/colors'

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 10
    },
    text: {
        fontSize: 18,
        color: colors.white,
        fontWeight: "bold",
        textTransform: "uppercase"
    }
})


export default styles