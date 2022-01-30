import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';


//<TouchableOpacity onPress={() => navigation.navigate('ViewProject', {id: project.id})}>

export default function Project({ project }) {
    // const navigation = useNavigation();
    return (
        <View style={styles.containerList}>
            <TouchableOpacity>
                <View style={styles.projectListHeader}>
                    <Text style={styles.projectListName}>{project.name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', width: 100 }}>
                        <Text style={styles.projectListText}>{project.description}</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.projectListText}>{project.status}</Text>
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