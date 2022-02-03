import React from 'react';
import { View, ScrollView } from 'react-native';
import Task from './Task';
import { gitCribAPI } from '../../../integration/BaseApi';

export default function Listagem( route, navigation ) {

  const projectId = route.params;

  let tasks = []
  const listtasks = [];

  if(projectId != undefined) {
    listtasks = gitCribAPI.get("/task/projects-tasks/" + projectId);
  }

  listtasks.forEach(taskItem => {
    tasks.push(
      <Task task={taskItem} />
    )
  })

  return (
    <View >
      <Header
        backgroundColor="#1D075E"
        barStyle="default"
        centerComponent={{
          text: "PROJETOS",
          style: { color: "#ffffff" }
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