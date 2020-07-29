import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import Icon from '../components/Icon'
import Seperator from '../components/ListItem/seperator'

const menuItems = [
    { 
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }

    },
    { 
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: "Message"

    }
]

export default function AccountScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title="Ebuka Umeh"
                    subTitle="prog"
                    image={require('../assets/me.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={Seperator}
                    renderItem={({ item }) =>
                        <ListItem 
                            title={item.title}
                            ImageComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                            }
                            onPress={() => navigation.navigate('Message')}
                        />
                }
                />
            </View>
            <ListItem 
                title="Log Out"
                ImageComponent={
                    <Icon name="logout" backgroundColor="#ffe66d" />
                }
            />
        </Screen>
    )
}


const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
      marginVertical: 20
    }
  })
  