import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { ListItem } from "react-native-elements";


export default function Project({ project }) {
    return (
        <View style={styles.containerList}>
                <ListItem
                    Component={TouchableHighlight}
                    containerStyle={{}}
                    disabledStyle={{ opacity: 0.5 }}
                    onPress={() => console.log(project.id)}
                    pad={20}
                >
                    <ListItem.Content>
                        <ListItem.Title>
                            <Text>{project.name}</Text>
                        </ListItem.Title>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <ListItem.Subtitle>
                                    <Text>{project.description}</Text>
                                </ListItem.Subtitle>
                            </View>
                            <View style={{ flexDirection: 'column', paddingLeft: '10%' }}>
                                <ListItem.Subtitle>
                                    <Text>{project.status}</Text>
                                </ListItem.Subtitle>
                            </View>
                        </View>
                    </ListItem.Content>
                </ListItem>
        </View>
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