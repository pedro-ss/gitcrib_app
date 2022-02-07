import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Task from './Task';
import { Header } from 'react-native-elements';
import { PlusOutlined, RollbackOutlined } from '@ant-design/icons';
import axios from 'axios';
const baseUrl = 'http://localhost:8081';

export default function ListaTask({ route, navigation }) {
  
  console.log(JSON.stringify(route.params));
  const [tasks, setTasks] = React.useState([]);
  const projectId = route.params.projectId;
  const userSystem = route.params.userSystem;
  const screenType = route.params.screenType;

  let listtasks = [];
  

  const lookForTasks = () => {
    if (projectId != undefined) {
      axios.get(`${baseUrl}/task/projects-tasks/${projectId}`).then((response) => {
        if (response.status == 200) {
          response.data.forEach(taskItem => {
            listtasks.push(
              <Task route={{task: taskItem, userSystem: userSystem}} navigation={navigation} />
            );
          });
          setTasks(listtasks);
        }
      }).catch((error) => {
        console.log(`ocorreu um erro ao listar as tasks ${error}`);
      });
    }
  }

  const lookForContributorTasks = () => {
    axios.get(`${baseUrl}/task/contributor-tasks/${userSystem.id}`).then((response) => {
      if (response.status == 200) {
        console.log("tasks do contri: "+JSON.stringify(response))
        response.data.forEach(taskItem => {
          listtasks.push(
            <Task route={{task: taskItem, userSystem: userSystem}} navigation={navigation} screenType={screenType} />
          );
        });
        setTasks(listtasks);
        console.log(JSON.stringify(listtasks));
      }
    }).catch((error) => {
      console.log(`ocorreu um erro ao listar as tasks ${error}`);
    });
  }

  React.useEffect(() => {
    if ( screenType == 'MyTasks') {
      console.log("MyTasks")
      lookForContributorTasks();
    } else {
      console.log("other")
      lookForTasks();
    }
  }, []);


  return (
    <View >
      <Header
        backgroundColor="#1D075E"
        barStyle="default"
        leftComponent={
          <View>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => navigation.navigate('Menu', { userSystem: userSystem })}
            >
              <RollbackOutlined
                style={{ color: '#ffffff', fontSize: 21 }}
              />
            </TouchableOpacity>
          </View>
        }
        rightComponent={userSystem.userType != 'Contributor' ?
          <View>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => navigation.navigate('ManageTask', { userSystem: userSystem, screeType: 'CREATE', projectId: projectId })}
            >
              <PlusOutlined
                style={{ color: '#ffffff', fontSize: 21 }}
              />
            </TouchableOpacity>
          </View>
          : ''}
        centerComponent={{
          text: "TASKS",
          style: styles.headingStyle
        }}
        containerStyle={{ width: 'auto' }}
        placement="center"
      />
      <ScrollView >
        {tasks}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingStyle: {
    paddingTop: '3%',
    color: "#ffffff",
    fontSize: 17,
    fontWeight: 'bold',
  },
})