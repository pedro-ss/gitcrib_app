import * as React from 'react';
import { Button, Header } from 'react-native-elements';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { RollbackOutlined } from '@ant-design/icons';
import RNPickerSelect from 'react-native-picker-select';
import Constants from 'expo-constants';
import axios from 'axios';
const baseUrl = 'http://localhost:8081';

export default function ManageProject({ route, navigation }) {

    const project = route.params.project;
    const [description, setDescription] = React.useState(project != null ? project.description : null);
    const [projectStatus, setProjectStatus] = React.useState(project != null ? project.projectStatus : 'ACTIVE');
    const screenType = route.params.screenType;
    const userSystem = route.params.userSystem;
    
    const createProject = () => {
        axios.post(`${baseUrl}/project/save-project`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            projectId: project.projectId,
            description: description,
            projectStatus: projectStatus,
            founderId: userSystem.id
        }
        ).then((response) => {
            if (response.status == 201) {
                console.log(JSON.stringify(userSystem))
                alert("Projeto cadastrado com sucesso.");
                // navigation.navigate('ListarProjetos', userSystem); -> redirecionar para o menu
            }
        }).catch((error) => {
            console.log("Erro ao cadastrar projeto");
            alert("Erro ao cadastrar projeto");
        })
    }

    const updateProject = () => {
        axios.put(`${baseUrl}/project/update-project`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            description: description,
            projectStatus: projectStatus,
            founderId: userSystem.id
        }).then((response) => {
            if (response.status == 204) {
                alert("Projeto atualizado com sucesso.");
                // navigation.navigate('ListarProjetos', userSystem); -> redirecionar para o menu
            }
        }).catch((error) => {
            console.log("Erro ao atualizar projeto");
            alert("Erro ao atualizar projeto");
        })
    }

    return (
        <View>
            <Header
                backgroundColor="#1D075E"
                barStyle="default"
                leftComponent={
                    <View>
                        <TouchableOpacity
                            style={{ marginLeft: 10 }}
                            onPress={ () => navigation.navigate('Menu', userSystem) }
                        >
                            <RollbackOutlined
                                style={{ color: '#ffffff', fontSize: 21 }}
                            />
                        </TouchableOpacity>
                    </View>
                }
                centerComponent={{
                    text: "Cadastro de Projetos",
                    style: styles.headingStyle
                }}
                containerStyle={{ width: 'auto' }}
                placement="center"
            />
            <Text style={styles.basicText}>
                Descrição
            </Text>
            <TextInput style={styles.basicInput} value={description} placeholder="Descrição" onChangeText={setDescription} />
            {screenType == 'UPDATE' ?
                <View>
                    <Text style={styles.basicText}>
                        Status
                    </Text>
                    <RNPickerSelect
                        value={projectStatus}
                        onValueChange={(value) => { setProjectStatus(value) }}
                        items={[
                            { label: 'Active', value: 'ACTIVE' },
                            { label: 'Canceled', value: 'CANCELED' },
                            { label: 'Done', value: 'DONE' },
                        ]}
                    />
                </View>
                : ''}
            <View style={styles.basicButtonsContainer}>
                <Button
                    buttonStyle={styles.basicButtonRegister}
                    titleStyle={styles.buttonText}
                    onPress={screenType == 'UPDATE' ? updateProject : createProject}
                    title={screenType == 'UPDATE' ? 'Atualizar' : 'Salvar'}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    momContainer: {
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
    },
    basicText: {
        alignSelf: 'center',
        fontFamily: "Roboto",
        fontSize: 14,
        paddingTop: 10,
        color: '#1D075E',
    },
    basicInput: {
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        width: 250,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#1D075E'
    },
    basicButtonsContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        padding: 8,
    },
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
    headingStyle: {
        paddingTop: '3%',
        color: "#ffffff",
        fontSize: 17,
        fontWeight: 'bold',
    },
});