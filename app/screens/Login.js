import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default function App({ navigation }) {
  return (
    <View style={styles.momContainer}>
      <View style={styles.container}>
        <Text style={styles.basicText}>
          Email
        </Text>
        <TextInput style={styles.basicInput} placeholder="Email" />
        <Text style={styles.basicText}>
          Senha
        </Text>
        <TextInput style={styles.basicInput} placeholder="Senha" secureTextEntry={true} />
      </View>
      <View style={styles.containerSecond}>
        <View style={styles.basicButtonsContainer}>
          <Button
            buttonStyle={styles.basicButtonRegister}
            titleStyle={styles.buttonText}
            onPress={() => { navigation.navigate('ListTasks') }}
            title={'Login'}
          />
        </View>

        <View style={styles.basicButtonsContainer}>
          <Button
            buttonStyle={styles.basicButtonRegister}
            titleStyle={styles.buttonText}
            onPress={() => { navigation.navigate('Cadastro') }}
            title={'Cadastre-se'}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  momContainer: {
    flexDirection: 'column',
    paddingTop: 100,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '50%'
  },
  containerSecond: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: '50%',
    paddingTop: '5%'
  },
  basicText: {
    alignSelf: 'flex-start',
    fontFamily: "Roboto",
    fontSize: 14,
    paddingTop: 10,
    paddingStart: '15%',
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
  basicButtonsContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    padding: 8,
  },
  basicButtonLogin: {
    minWidth: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#0E00A4'
  },
  basicButtonRegister: {
    minWidth: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#1D075E'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
