import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';


//<TouchableOpacity onPress={() => navigation.navigate('ViewTask', {id: Task.id})}>

export default function Task({ task }) {
    // const navigation = useNavigation();
    return (
        <View style={styles.containerList}>
            <TouchableOpacity>
                <View style={styles.taskListHeader}>
                    <Text style={styles.taskListName}>{Task.name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', width: 100 }}>
                        <Text style={styles.taskListText}>{Task.description}</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.taskListText}>{Task.status}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    containerList: {
        paddingTop: '20%'
    },
    taskListHeader: {
        flexDirection: 'row',
        backgroundColor: '#1D075E',
        borderColor: '#1d075E',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    taskListName: {
        color: 'white'
    },
    taskListText: {
        color: '#1d075E'
    }

});