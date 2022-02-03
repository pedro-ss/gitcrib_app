import React from 'react';
import { View, ScrollView } from 'react-native';
import Project from './Project';
import { gitCribAPI } from '../../../integration/BaseApi';
import { Header } from 'react-native-elements';

export default function Listagem(route, navigation) {
  const  founderId  = route.params;
  
  let projects = [];
  const listprojects = [{"id":"1","name":"Angular","description":"Projeto JS","status":"ativo"}];
  
  if(founderId != undefined) {
    listprojects = gitCribAPI.get("/project/founder-projects/"+founderId) ;
  }
  
  listprojects.forEach(projectItem => {
    projects.push(
      <Project project={projectItem}/>
      )
  });
  
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
        { projects }
        </ScrollView>
    </View>
  );
}