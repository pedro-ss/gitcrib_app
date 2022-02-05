import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Modal } from 'react-native';
import { ListItem, Button } from "react-native-elements";
import axios from 'axios';
const baseUrl = 'http://localhost:8081';

export default function Task({ route, navigation }) {
    const [modalVisible, setModalVisible] = React.useState(false);

    console.log(JSON.stringify(route));

    const task = { taskId: 1 }; //route.params.task; remover após testes
    const userId = 1; //route.params.userId; remover após testes

    const registerActivity = () => {
        console.log(`cirou vinculo entre usuario de id: ${userId} e task: ${task.taskId}`);
        // adicionar requisição que vincula task ao conttibuidor
        setModalVisible(false);
    }

    const cancelActivity = () => {
        setModalVisible(false);
        console.log(`Cancelou atividade`);
    }

    return (
        <View style={styles.containerList}>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.basicModalContainer}>
                        <Text>Deseja atuar nessa task?</Text>
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
            <ListItem
                key={task.taskId}
                Component={TouchableHighlight}
                containerStyle={{}}
                disabledStyle={{ opacity: 0.5 }}
                onPress={() => setModalVisible('true')}
                pad={20}
            >
                <ListItem.Content>
                    <ListItem.Title style={styles.taskListHeader}>
                        <Text>Task: {task.taskId}</Text>
                    </ListItem.Title>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <ListItem.Subtitle style={styles.taskListText}>
                                <Text>Descrição: {task.description}</Text>
                            </ListItem.Subtitle>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <ListItem.Subtitle style={styles.taskListText}>
                                <Text>Status: {task.taskStatus}</Text>
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