import React from 'react';
import { View, ScrollView } from 'react-native';
import Project from './Project';
 
export default function Listagem() {
  
    let projects = [] 
    
    const listprojects = [ 
        {"name":"CRM", "description":"Projeto em Angular", "status":"em andamento" },
        {"name":"Springboot", "description":"Projeto em Java", "status":"em andamento"},
        {"name":"Mayhem", "description":"Projeto em Python", "status":"em andamento"}
    ];

    listprojects.forEach(projectItem => {
      projects.push(
        <Project project={projectItem}/>
        )
    })

  return (
    <View >
        <ScrollView >
          {projects}
        </ScrollView>
    </View>
  );
}