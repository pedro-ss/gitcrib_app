import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Modal } from 'react-native';
import { ListItem, Button, CheckBox } from "react-native-elements";
import axios from 'axios';
const baseUrl = 'http://localhost:8081';

export default function Task({ route, navigation }) {
    console.log(JSON.stringify(route));
    const [modalVisible, setModalVisible] = React.useState(false);
    const [taskEditDelete, setTaskEditDelete] = React.useState(false);
    const [checkTask, setCheckTask] = React.useState(false);
    const task = route.task;
    const userSystem = route.userSystem;
    const msgModal = (route.screenType == 'MyTasks') ? 'Deseja remover essa task' : 'Deseja atuar nessa task';


    const registerActivity = () => {
        console.log(`cirou vinculo entre usuario de id: ${userSystem.id} e task: ${task.taskId}`);
        axios.post(`${baseUrl}/task/link-task-to-contributor`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            taskId: task.taskId,
            contributorId: userSystem.id
        }).then((response) => {
            console.log("Redirecionando para as tasks do contributor")
            console.log(response)
            navigation.navigate('Menu', { userSystem: userSystem });
        }).catch((error) => {
            alert(`um erro ocorreu ao criar task ${error}`)
        });
        setModalVisible(false);
    }

    const cancelActivity = () => {
        setModalVisible(false);
        console.log(`Cancelou atividade`);
    }

    const openOptionsTask = () => {
        setCheckTask(true);
        setTaskEditDelete(true);
    }

    const cancelEditTask = () => {
        setCheckTask(false);
        setTaskEditDelete(false);
    }

    const deleteTask = () => {
        axios.post(`${baseUrl}/task/delete-task`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            taskId: task.taskId,
            title: task.title,
            description: task.description,
            status: task.taskStatus,
            projectId: task.projectId,
            founderId: userSystem.id
        }).then((response) => {
            console.log(response.status);
            alert("Task deletada com sucesso");
            navigation.goBack(null);
        }).catch((error) => {
            console.log(`Erro ao deletar a task: ${error}`);
            alert('Erro ao deletar a task.');
        });
    }
    const removeActivity = () => {
        setModalVisible(false);
    }

    const showEditTask = () => {
        setCheckTask(false);
        setTaskEditDelete(false);
        navigation.navigate('ManageTask', { userSystem: userSystem, screenType: 'UPDATE', projectId: task.projectId, task: task });
    }
    return (
        <View>
            <View style={styles.containerList}>
                <View style={styles.centeredView}>
                    {userSystem.userType == 'Contributor' ?
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                        >
                            <View style={styles.basicModalContainer}>
                                <Text style={styles.taskListHeader}>{msgModal}?</Text>
                            </View>
                            <View style={styles.basicModalContainer}>
                                <Text style={styles.taskListText}>{task.description}</Text>
                            </View>
                            <View style={styles.basicModalContainer}>
                                <View style={styles.buttonModalStyle}>
                                    <Button
                                        buttonStyle={styles.modalButton}
                                        titleStyle={styles.buttonText}
                                        onPress={cancelActivity}
                                        title={'Cancelar'}
                                    />
                                </View>
                                {route.screenType != 'MyTasks' ?
                                    <View style={styles.buttonModalStyle}>
                                        <Button
                                            buttonStyle={styles.modalButton}
                                            titleStyle={styles.buttonText}
                                            onPress={registerActivity}
                                            title={'Confirmar'}
                                        />
                                    </View> 
                                    : 
                                    <View style={styles.buttonModalStyle}>
                                    <Button
                                        buttonStyle={styles.modalButton}
                                        titleStyle={styles.buttonText}
                                        onPress={removeActivity}
                                        title={'Confirmar'}
                                    />
                                </View>}
                            </View>
                        </Modal>
                        : ''}
                </View>
                <View style={styles.centeredView}>
                    {userSystem.userType == 'Founder' ?
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={taskEditDelete}
                        >
                            <View style={styles.basicModalContainer}>
                                <Text style={styles.taskListHeader}>O que deseja fazer com a task:</Text>
                            </View>
                            <View style={styles.basicModalContainer}>
                                <Text style={styles.taskListText}>{task.description} ?</Text>
                            </View>
                            <View style={styles.basicModalContainer}>
                                <View style={styles.buttonModalStyle}>
                                    <Button
                                        buttonStyle={styles.modalButton}
                                        titleStyle={styles.buttonText}
                                        onPress={cancelEditTask}
                                        title={'Cancelar'}
                                    />
                                </View>
                                <View style={styles.buttonModalStyle}>
                                    <Button
                                        buttonStyle={styles.modalButton}
                                        titleStyle={styles.buttonText}
                                        onPress={deleteTask}
                                        title={'Deletar'}
                                    />
                                </View>
                                <View style={styles.buttonModalStyle}>
                                    <Button
                                        buttonStyle={styles.modalButton}
                                        titleStyle={styles.buttonText}
                                        onPress={showEditTask}
                                        title={'Editar'}
                                    />
                                </View>
                            </View>
                        </Modal>
                        : ''}
                </View>
                <ListItem
                    key={task.taskId}
                    Component={TouchableHighlight}
                    disabledStyle={{ opacity: 0.5 }}
                    onPress={() => setModalVisible('true')}
                    pad={20}
                >
                    {userSystem.userType == 'Founder' ?
                        <CheckBox
                            checked={checkTask}
                            onPress={openOptionsTask}
                        />
                        : ''}

                    <ListItem.Content>
                        <ListItem.Title style={styles.taskListHeader}>
                            <Text>Task: {task.title}</Text>
                        </ListItem.Title>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <ListItem.Subtitle style={styles.taskListHeader}>
                                    <Text>Descrição: </Text>
                                    <Text style={styles.taskListText}>{task.description}</Text>
                                </ListItem.Subtitle>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <ListItem.Subtitle style={styles.taskListHeader}>
                                    <Text>Status: </Text>
                                    <Text style={styles.taskListText}>{task.status}</Text>
                                </ListItem.Subtitle>
                            </View>
                        </View>
                    </ListItem.Content>
                </ListItem>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerList: {
        paddingTop: '10%',
        paddingRight: '5%',
        paddingLeft: '5%'
    },
    taskListHeader: {
        color: '#1D075E'
    },
    taskListText: {
        color: '#666'
    },
    basicModalContainer: {
        paddingTop: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    modalButton: {
        maxWidth: 100,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        backgroundColor: '#1D075E'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    centeredView: {
        flex: 1,
        maxWidth: 100,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center"
    },
    messageText: {
        color: '#1D075E',
        backgroundColor: '#ffffff',
    },
    buttonModalStyle: {
        flexDirection: 'column',
        paddingRight: '2%',
        backgroundColor: '#ffffff',
        paddingBottom: 8,
        paddingTop: 8
    }
});