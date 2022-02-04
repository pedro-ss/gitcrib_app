import React from 'react';
import { View, ScrollView } from 'react-native';
import Project from './Project';
import { gitCribAPI } from '../../../integration/BaseApi';
import { Header } from 'react-native-elements';

export default function Listagem({ navigation }) {

  let projects = [];
  let listprojects = [];

  gitCribAPI.get("/project/list-projects")
    .then((response) => {
      listprojects = response.data
      consoler.log(response);
      if (listprojects.length > 0) {
        listprojects.forEach(projectItem => {
          projects.push(
            <Project project={projectItem} />
          )
        });
      }
    }).catch((error) => {
      console.log(error);
    });

  console.log(listprojects);


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
      <ScrollView>
        {projects}
      </ScrollView>
    </View>
  );
}