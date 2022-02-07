import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Project from './Project';
import { Header } from 'react-native-elements';
import axios from 'axios';
import { PlusOutlined, HomeOutlined } from '@ant-design/icons';
const baseUrl = 'http://localhost:8081';

export default function ListProject({ route, navigation }) {

  const [projects, setProjects] = React.useState([]);
  const userSystem = route.params;
  let listprojects = [];
  console.log("Usuário atual: "+JSON.stringify(userSystem));
  const lookForProjects = () => {
    axios.get(`${baseUrl}/project/list-projects`)
      .then((response) => {
        console.log(`Resultado: ${response.data}`);
        if (response.status == 200) {
          response.data.forEach(projectItem => {
            listprojects.push(
              <Project route={{params: {project: projectItem, userSystem: userSystem}}} navigation={navigation} />
            );
          });
          setProjects(listprojects);
        }
      }).catch((error) => {
        console.log(error);
      });
  }

  const lookForFounderProjects = () => {
    axios.get(`${baseUrl}/project/founder-projects/${userSystem.id}`)
      .then((response) => {
        console.log(`Resultado: ${response.data}`);
        if (response.status == 200) {
          response.data.forEach(projectItem => {
            listprojects.push(
              <Project route={{params: {project: projectItem, userSystem: userSystem}}} navigation={navigation} />
            );
          });
          setProjects(listprojects);
        }
      }).catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    if (userSystem.userType == 'Contributor') {
      lookForProjects();
    } else {
      lookForFounderProjects();
    }
  }, []);

  const gotoManageProject = () => {
    navigation.navigate('ManageProject', { screenType: 'CREATE', userSystem: userSystem });
  }

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
              onPress={ () => navigation.navigate('Menu', userSystem) }
            >
              <HomeOutlined
                style={{ color: '#ffffff', fontSize: 21 }}
              />
            </TouchableOpacity>
          </View>
        }
        rightComponent={userSystem.userType != 'Contributor' ?
          <View style={styles.headerRight}>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={gotoManageProject}
            >
              <PlusOutlined
                style={{ color: '#ffffff', fontSize: 21 }}
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