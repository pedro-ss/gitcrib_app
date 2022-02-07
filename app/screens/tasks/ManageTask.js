import * as React from 'react';
import { Button, Header } from 'react-native-elements';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { RollbackOutlined } from '@ant-design/icons';
import axios from 'axios';
const baseUrl = 'http://localhost:8081';

export default function ManageTask({ route, navigation }) {

    const task = route.params.task;
    const [title, setTitle] = React.useState(task != undefined ? task.title : null);
    const [description, setDescription] = React.useState(task != undefined  ? task.description : null);
    const [taskStatus, setTaskStatus] = React.useState(task != undefined ? task.status : 'ACTIVE');
    const screenType = route.params.screenType;
    const userSystem = route.params.userSystem;
    const projectId = route.params.projectId;
    console.log(JSON.stringify(route.params));

    const createTask = () => {
        if (title == null || description == null) { alert("favor, verificar campos.") }
        axios.post(`${baseUrl}/task/save-task`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            title: title,
            description: description,
            status: taskStatus,
            projectId: projectId,
            founderId: userSystem.id
        }
        ).then((response) => {
            if (response.status == 200) {
                alert("Task cadastrado com sucesso.");
                navigation.navigate('Menu',userSystem );
            }
        }).catch((error) => {
            console.log("Erro ao cadastrar task");
            alert("Erro ao cadastrar task");
        })
    }

    const updateTask = () => {
        if (title == null || description == null) { alert("favor, verificar campos.") }
        axios.put(`${baseUrl}/Task/update-Task`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            taskId: task.taskId,
            title: title,
            description: description,
            status: taskStatus,
            projectId: projectId,
            founderId: userSystem.id
        }).then((response) => {
            if (response.status == 204) {
                alert("Task atualizada com sucesso.");
                navigation.navigate('Menu',{ userSystem: userSystem });
            }
        }).catch((error) => {
            console.log("Erro ao atualizar projeto");
            alert("Erro ao atualizar projeto");
        })
    }

    return (
        <View >
            <Header
                backgroundColor="#1D075E"
                barStyle="default"
                leftComponent={
                    <View>
                        <TouchableOpacity
                            style={{ marginLeft: 10 }}
                            onPress={() => navigation.navigate('ListTasks',{ projectId: projectId, userSystem: userSystem }) }
                        >
                            <RollbackOutlined
                                style={{ color: '#ffffff', fontSize: 21 }}
                            />
                        </TouchableOpacity>
                    </View>
                }
                centerComponent={{
                    text: "Cadastro de Task",
                    style: styles.headingStyle
                }}
                containerStyle={{ width: 'auto' }}
                placement="center"
            />
            <Text style={styles.basicText}>
                Título
            </Text>
            <TextInput style={styles.basicInput} value={title} placeholder="Title" onChangeText={setTitle} />
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
                        value={taskStatus}
                        onValueChange={(value) =>  setTaskStatus(value) }
                        items={[
                            { label: 'Active', value: 'ACTIVE' },
                            { label: 'Freeze', value: 'FREEZE' },
                            { label: 'Closed', value: 'CLOSED' },
                            { label: 'Done', value: 'DONE' },
                        ]}
                    />
                </View>
                : ''}
            <View style={styles.basicButtonsContainer}>
                <Button
                    buttonStyle={styles.basicButtonRegister}
                    titleStyle={styles.buttonText}
                    onPress={screenType == 'UPDATE' ? updateTask : createTask}
                    title={screenType == 'UPDATE' ? 'Atualizar' : 'Salvar'}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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