import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default function Menu({ route, navigation }) {
    console.log(JSON.stringify(route.params));
    const userSystem = route.params;
    const projectTitle = userSystem.userType == 'Fundador' ? 'Meus projetos' : 'Projetos';

    return (
        <View>
            { userSystem.userType == 'Contributor' ?
                <View>
                    <Text>Minhas tasks</Text>
                </View>
                : ''}
            <View>
                <View style={styles.basicButtonsContainer}>
                    <Button
                        buttonStyle={styles.basicButtonRegister}
                        titleStyle={styles.buttonText}
                        onPress={() => { navigation.navigate('Cadastro', userSystem) }}
                        title={'Alterar senha'}
                    />
                </View>
                <View style={styles.basicButtonsContainer}>
                    <Button
                        buttonStyle={styles.basicButtonRegister}
                        titleStyle={styles.buttonText}
                        onPress={() => { navigation.navigate('ListarProjetos', userSystem) }}
                        title={projectTitle}
                    />
                </View>
                <View style={styles.basicButtonsContainer}>
                    <Button
                        buttonStyle={styles.basicButtonRegister}
                        titleStyle={styles.buttonText}
                        onPress={() => { navigation.navigate('Login') }}
                        title={'Logout'}
                    />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    basicButtonRegister: {
        minWidth: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        padding: 8,
        backgroundColor: '#1D075E'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    basicButtonsContainer: {
        paddingTop: '10%',
        flexDirection: "row",
        justifyContent: 'center',
        padding: 8,
    },
});