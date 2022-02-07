import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import { RollbackOutlined } from '@ant-design/icons';
import axios from 'axios';
const baseUrl = 'http://localhost:8081';


export default function App({ route, navigation }) {

  const userSystem = route.params;
  const [email, setEmail] = React.useState(userSystem != null ? userSystem.email : null);
  const [password, setPassword] = React.useState(userSystem != null ? userSystem.password : null);
  const [userName, setUsername] = React.useState(userSystem != null ? userSystem.userName : null);
  const [checked, setChecked] = React.useState('Contributor');

  const onSubmitFormHandler = async (event) => {

    console.log(email, userName, password, checked);
    if (email == null || userName == null || password == null) {
      alert("Erro ao cadastrar, verifique os campos preenchidos.");
    }

    axios.post(`${baseUrl}/user`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      userName: userName,
      userType: checked,
      email: email,
      password: password
    }).then((response) => {
      console.log(response);
      if (response.status == 201) {
        setChecked('Contributor');
        setEmail('')
        setPassword('')
        setUsername('')
        navigation.navigate('Login')
      }
    }).catch((error) => {
      console.log(error);
      alert("Erro ao cadastrar, verifique os campos preenchidos.");
    });
  }

  return (
    <View >
      <Header
        backgroundColor="#1D075E"
        barStyle="default"
        leftComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => { userSystem != null ? navigation.navigate('Menu',{ userSystem: userSystem }) : navigation.navigate('Login') }}
            >
              <RollbackOutlined
                style={{ color: '#ffffff', fontSize: 21 }}
              />
            </TouchableOpacity>
          </View>
        }
        centerComponent={{
          text: "CADASTRO",
          style: styles.headingStyle
        }}
        containerStyle={{ width: 'auto' }}
        placement="center"
      />
      <View style={styles.containerSecond}>
        <Text style={styles.basicText}>
          Email
        </Text>
        <TextInput style={styles.basicInput} value={email} onChangeText={setEmail} placeholder="Email" />
        <Text style={styles.basicText}>
          Senha
        </Text>
        <TextInput style={styles.basicInput} value={password} onChangeText={setPassword} secureTextEntry={true} placeholder="Senha" />
        <Text style={styles.basicText}>
          Username do Github
        </Text>
        <TextInput style={styles.basicInput} value={userName} onChangeText={setUsername} placeholder="Username" />
      </View>
      <View style={styles.container}>
        <RadioButton
          value="Contribuidor"
          status={checked === 'Contributor' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('Contributor')}
        />
        <Text style={styles.userTypeText}>
          Contribuidor
        </Text>
        <RadioButton
          value="Fundador"
          status={checked === 'Founder' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('Founder')}
        />
        <Text style={styles.userTypeText}>
          Fundador
        </Text>
      </View>
      <View style={styles.container}>
        <Button
          raised
          buttonStyle={styles.basicPressableUserRegister}
          onPress={onSubmitFormHandler}
          textStyle={styles.buttonTextRegister}
          title={`Cadastrar`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '10%'
  },
  containerSecond: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '10%',
    paddingTop: '10%'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  basicText: {
    fontFamily: "Roboto",
    fontSize: 14,
    paddingTop: 10,
    color: '#1D075E',
    paddingLeft: 12
  },
  basicInput: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#1D075E'
  },
  basicPressableUserType: {
    flexDirection: 'row',
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#0E00A4',
    borderColor: '#1D075E'
  },
  basicPressableUserRegister: {
    flexDirection: 'row',
    maxWidth: 110,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 8,
    backgroundColor: '#1D075E'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  buttonTextRegister: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1D075E',
  },
  userTypeText: {
    fontFamily: "Roboto",
    fontSize: 14,
    paddingTop: 10,
    color: '#1D075E'
  },
  headingStyle: {
    paddingTop: '3%',
    color: "#ffffff",
    fontSize: 17,
    fontWeight: 'bold',
  },
});