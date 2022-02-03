import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { ListItem } from "react-native-elements";


export default function Project({ task, navigation }) {
    return (
        <TouchableOpacity>
            <View style={styles.containerList}>
                <ListItem
                    Component={TouchableHighlight}
                    containerStyle={{}}
                    disabledStyle={{ opacity: 0.5 }}
                    onPress={() => navigation.navigate('Viewtask', { id: task.id })}
                    pad={20}
                >
                    <ListItem.Content>
                        <ListItem.Title>
                            <Text>task.name</Text>
                        </ListItem.Title>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <ListItem.Subtitle>
                                    <Text>task.description</Text>
                                </ListItem.Subtitle>
                            </View>
                            <View style={{ flexDirection: 'column', paddingLeft: '10%' }}>
                                <ListItem.Subtitle>
                                    <Text>task.status</Text>
                                </ListItem.Subtitle>
                            </View>
                        </View>
                    </ListItem.Content>
                </ListItem>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerList: {
        paddingTop: '20%'
    },
    projectListHeader: {
        flexDirection: 'row',
        backgroundColor: '#1D075E',
        borderColor: '#1d075E',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    projectListName: {
        color: 'white'
    },
    projectListText: {
        color: '#1d075E'
    }
});