import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import { gitCribAPI } from '../../integration/BaseApi';

export default function App({ navigation }) {

  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [userName, setUsername] = React.useState(null);
  const [checked, setChecked] = React.useState('contributor');

  // const onSubmitFormHandler = async (event) => {
  //   try {
      
  //     const response = await gitCribAPI.post('/user', {
  //       userName: userName,
  //       userType: checked,
  //       email: email,
  //       password: password
  //     });
  //     console.log(response)
  //     if (response.status != 201) {
  //       setEmail('');
  //       setPassword('');
  //       setUsername('');
  //       navigation.navigate('ListarProjetos',{ id:response.body.id });
  //     } else {
  //       throw new Error("An error has occurred");
  //     }

  //   } catch (error) {
  //     console.log("Error ")
  //   }
  // }

  return (
    <View >
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
          value="contributor"
          status={checked === 'contributor' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('contributor')}
        />
        <Text style={styles.userTypeText}>
          Contribuidor
        </Text>
        <RadioButton
          value="founder"
          status={checked === 'founder' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('founder')}
        />
        <Text style={styles.userTypeText}>
          Fundador
        </Text>
      </View>
      <View style={styles.container}>
        <Button
          raised
          buttonStyle={styles.basicPressableUserRegister}
          onPress={() => navigation.navigate('ListarProjetos')}
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
});