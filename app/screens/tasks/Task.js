import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Modal } from 'react-native';
import { ListItem, Button, CheckBox } from "react-native-elements";
import axios from 'axios';
const baseUrl = 'http://localhost:8081';

export default function Task({ task, userSystem, navigation }) {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [taskEditDelete, setTaskEditDelete] = React.useState(false);
    const [checkTask, setCheckTask] = React.useState(false);
    console.log(`Task atual: ${JSON.stringify(task)} e usuário: ${JSON.stringify(userSystem)}`);

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
            navigation.navigate('Login');
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

    return (
        <View style={styles.containerList}>
            <View style={styles.containerList}>
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                    >
                        <View style={styles.basicModalContainer}>
                            <Text style={styles.taskListHeader}>Deseja atuar nessa task?</Text>
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
                            <View style={styles.buttonModalStyle}>
                                <Button
                                    buttonStyle={styles.modalButton}
                                    titleStyle={styles.buttonText}
                                    onPress={registerActivity}
                                    title={'Confirmar'}
                                />
                            </View>
                        </View>
                    </Modal>
                </View>
                <View style={styles.centeredView}>
                    {userSystem.userType == 'Founder' ?
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={taskEditDelete}
                        >
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
                                        onPress={() => console.log('deletou')}
                                        title={'Deletar'}
                                    />
                                </View>
                                <View style={styles.buttonModalStyle}>
                                    <Button
                                        buttonStyle={styles.modalButton}
                                        titleStyle={styles.buttonText}
                                        onPress={() => console.log('editou')}
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
                    <CheckBox
                        checked={checkTask}
                        onPress={openOptionsTask}
                    />
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
        alignItems: "center",
        paddingTop: '8%'
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