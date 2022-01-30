import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';


//<TouchableOpacity onPress={() => navigation.navigate('Viewcontributor', {id: contributor.id})}>

export default function Contributor({ contributor }) {
    // const navigation = useNavigation();
    return (
        <View style={styles.containerList}>
            <TouchableOpacity>
                <View style={styles.contributorListHeader}>
                    <Text style={styles.contributorListName}>{contributor.name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', width: 100 }}>
                        <Text style={styles.contributorListText}>{contributor.points}</Text>
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
    contributorListHeader: {
        flexDirection: 'row',
        backgroundColor: '#1D075E',
        borderColor: '#1d075E',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    contributorListName: {
        color: 'white'
    },
    contributorListText: {
        color: '#1d075E'
    }

});