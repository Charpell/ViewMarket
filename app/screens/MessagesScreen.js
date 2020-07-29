import React, { useState } from 'react'
import { View, FlatList, SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import Seperator from '../components/ListItem/seperator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require('../assets/me.jpg')
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require('../assets/me.jpg')
    }
]

export default function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id))
    }

    return (
        <Screen>
            <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => 
                <ListItem 
                    title={item.title} 
                    subTitle={item.description} 
                    image={item.image} 
                    onPress={() => console.log("Message")}  
                    renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />} 
                />
             }
            ItemSeparatorComponent={Seperator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                        id: 2,
                        title: "T2",
                        description: "D2",
                        image: require('../assets/me.jpg')
                    }
                ])
            }}
        />
        </Screen>
    )
}

const styles = StyleSheet.create({
    
})
