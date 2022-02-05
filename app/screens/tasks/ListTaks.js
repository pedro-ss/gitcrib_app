import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Task from './Task';
import { Header} from 'react-native-elements';
import { PlusOutlined, MenuOutlined } from '@ant-design/icons';
import axios from 'axios';
const baseUrl = 'http://localhost:8081';

export default function Listagem({ route, navigation }) {
  const [tasks, setTasks] = React.useState([]);
  const projectId = 1;//route.params.projectId;
  const userSysId = 1;//route.params.userSysId;
  let listtasks = [];

  if(projectId != undefined) {
    axios.get(`${baseUrl}/task/projects-tasks/${projectId}`).then((response) => {
      if (response.status == 200) {
        response.data.forEach( taskItem => {
          listtasks.push(
            <Task task={taskItem} userSysId={userSysId} navigation={navigation}/>
          );
        });
        setTasks(listtasks);
        }
    }).catch((error) => {
      console.log(`ocorreu um erro ao listar as tasks ${error}`);
    });
  }

  // listtasks.forEach(taskItem => {
  //   tasks.push(
  //     <Task task={taskItem} />
  //   )
  // })

  return (
    <View >
      <Header
        backgroundColor="#1D075E"
        barStyle="default"
        leftComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => console.log("pressed")}
            >
              <MenuOutlined 
                style={{color: '#ffffff', fontSize: 21}}
              />
            </TouchableOpacity>
          </View>
        }
        rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => console.log("pressed")}
            >
              <PlusOutlined 
                style={{color: '#ffffff', fontSize: 21}}
              />
            </TouchableOpacity>
          </View>
        }
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