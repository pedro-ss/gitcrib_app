import React from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function App() {
  const [ checked,setChecked ] = React.useState('contribuidor');
  const [ email, setEmail ] = React.useState(null);
  const [ senha,setSenha ] = React.useState(null);
  const [ username,setUsername ] = React.useState(null);

  return (
    <View >
      <View style={styles.container}>
        <View style={{ width: '45%', paddingTop: 15, flexDirection:'row' }}>
          <RadioButton
            value="contribuidor"
            status={checked === 'contribuidor' ? 'checked' : 'unchecked'}
            onPress={() => setChecked("contribuidor")}
          />
          <Text>Contribuidor</Text>
        </View>
        <View style={{ width: '45%', paddingTop: 15, flexDirection:'row'  }}>
          <RadioButton
            value="fundador"
            status={checked === 'fundador' ? 'checked' : 'unchecked'}
            onPress={() => setChecked("fundador")}
          />
          <Text>Fundador</Text>
        </View>
      </View>
      <View style={styles.containerSecond}>
        <Text style={styles.basicText}>
          Email
        </Text>
        <TextInput style={styles.basicInput} value={email} onChangeText={setEmail} />
        <Text style={styles.basicText}>
          Senha
        </Text>
        <TextInput style={styles.basicInput} value={senha} onChangeText={setSenha} />
        <Text style={styles.basicText}>
          Username do Github
        </Text>
        <TextInput style={styles.basicInput} value={username} onChangeText={setUsername} />
      </View>
      <View style={styles.registerButtons}>
        <Button title="Cadastrar" accessibilityLabel="Cadastrar" onPress={() => console.log(email,senha,username) } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '10%',
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
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#1D075E'
  },
  registerButtons: {
    alignItems: 'center',
    paddingTop: '10%',
    paddingBottom: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});