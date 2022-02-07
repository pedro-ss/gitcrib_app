import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Modal } from 'react-native';
import { ListItem, CheckBox, Button } from "react-native-elements";
import axios from 'axios';
const baseUrl = 'http://localhost:8081';


export default function Project({ route, navigation }) {

    const [checkProject, setCheckProject] = React.useState(false);
    const [projectEditDelete, setProjectEditDelete] = React.useState(false);
    const project = route.params.project;
    const userSystem = route.params.userSystem;

    const openOptionsProject = () => {
        setCheckProject(true);
        setProjectEditDelete(true);
    }

    const cancelEditProject = () => {
        setCheckProject(false);
        setProjectEditDelete(false);
    }

    const deleteProject = () => {

        axios.post(`${baseUrl}/project/delete-project`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            projectId: project.projectId,
            description: project.description,
            projectStatus: project.projectStatus,
            founderId: userSystem.id
        }).then((response) => {
            console.log(response.status);
            alert("Task deletada com sucesso");
            navigation.navigate('Menu', { userSystem: userSystem } );
        }).catch((error) => {
            console.log(`Erro ao deletar a task: ${error}`);
            alert('Erro ao deletar a task.');
        });
    }

    const showEditproject = () => {
        setCheckTask(false);
        setTaskEditDelete(false);
        navigation.navigate('ManageProject', { userSystem: userSystem, screenType: 'UPDATE', project: project });
    }

    return (
        <View style={styles.containerList}>
            <View style={styles.centeredView}>
                {userSystem.userType == 'Founder' ?
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={projectEditDelete}
                    >
                        <View style={styles.basicModalContainer}>
                            <Text style={styles.projectListHeader}>O que deseja fazer com o projeto:</Text>
                        </View>
                        <View style={styles.basicModalContainer}>
                            <Text style={styles.projectListText}>{project.description} ?</Text>
                        </View>
                        <View style={styles.basicModalContainer}>
                            <View style={styles.buttonModalStyle}>
                                <Button
                                    buttonStyle={styles.modalButton}
                                    titleStyle={styles.buttonText}
                                    onPress={ cancelEditProject }
                                    title={'Cancelar'}
                                />
                            </View>
                            <View style={styles.buttonModalStyle}>
                                <Button
                                    buttonStyle={styles.modalButton}
                                    titleStyle={styles.buttonText}
                                    onPress={ deleteProject }
                                    title={'Deletar'}
                                />
                            </View>
                            <View style={styles.buttonModalStyle}>
                                <Button
                                    buttonStyle={styles.modalButton}
                                    titleStyle={styles.buttonText}
                                    onPress={showEditproject}
                                    title={'Editar'}
                                />
                            </View>
                        </View>
                    </Modal>
                    : ''}
            </View>
            <ListItem
                key={project.projectId}
                Component={TouchableHighlight}
                disabledStyle={{ opacity: 0.5 }}
                onPress={() => navigation.navigate('ListTasks', { projectId: project.projectId, userSystem: userSystem })}
                pad={20}
            >
                { userSystem.userType == 'Founder' ?
                    <CheckBox
                        checked={checkProject}
                        onPress={openOptionsProject}
                    /> : '' }
                <ListItem.Content>
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
    },
    basicModalContainer: {
        paddingTop: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    taskListHeader: {
        color: '#1D075E'
    },
    taskListText: {
        color: '#666'
    },
    buttonModalStyle: {
        flexDirection: 'column',
        paddingRight: '2%',
        backgroundColor: '#ffffff',
        paddingBottom: 8,
        paddingTop: 8
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
});