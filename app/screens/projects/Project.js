import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { ListItem } from "react-native-elements";


export default function Project({ project, userSystem, navigation }) {
    
    return (
        <View style={styles.containerList}>
            <ListItem
                key={project.projectId}
                Component={TouchableHighlight}
                disabledStyle={{ opacity: 0.5 }}
                onPress={() => navigation.navigate('ListTasks', {projectId: project.projectId, userSystem: userSystem })}
                pad={20}
            >
                <ListItem.Content>
                    <ListItem.Title style={styles.projectListHeader}>
                        <Text>Projeto: {project.projectId}</Text>
                    </ListItem.Title>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <ListItem.Subtitle style={styles.projectListText}>
                                <Text>Descrição: {project.description}</Text>
                            </ListItem.Subtitle>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <ListItem.Subtitle style={styles.projectListText}>
                                <Text>Status: {project.projectStatus}</Text>
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
        paddingTop: '10%',
        paddingRight: '5%',
        paddingLeft: '5%'
    },
    projectListHeader: {
        color: '#1D075E'
    },
    projectListText: {
        color: '#666'
    }
});