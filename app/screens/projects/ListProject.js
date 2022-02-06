import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Project from './Project';
import { Header } from 'react-native-elements';
import axios from 'axios';
import { PlusOutlined, MenuOutlined } from '@ant-design/icons';
const baseUrl = 'http://localhost:8081';

export default function Listagem({ route, navigation }) {
  
  const [projects, setProjects] = React.useState([]);
  console.log(JSON.stringify(route.params));
  const userSystem = route.params;
  let listprojects = [];
  
  const lookForProjects = () => {
    axios.get(`${baseUrl}/project/list-projects`)
      .then((response) => {
        console.log(`Resultado: ${response.data}`);
        if (response.status == 200) {
          response.data.forEach(projectItem => {
            listprojects.push(
              <Project project={projectItem} userSystem={userSystem} navigation={navigation}/>
            );
          });
          setProjects(listprojects);
        }
      }).catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    lookForProjects();
  }, []);


  console.log(`Array projects: ${projects}`);
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
        rightComponent={ userSystem.userType != 'Contributor' ? 
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
        : ''}
        centerComponent={{
          text: "PROJETOS",
          style: styles.headingStyle
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

const styles = StyleSheet.create({
  headingStyle: {
    paddingTop: '3%',
    color: "#ffffff",
    fontSize: 17,
    fontWeight: 'bold',
  },
})