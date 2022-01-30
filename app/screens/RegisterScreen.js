import * as React from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';

export default function App() {
  return (
    <View >
      <View style={styles.container}>
        <View style={{ width: '45%', paddingRight: 5, paddingTop: 15 }}>
          <Button title="Contribuidor" accessibilityLabel="Contribuidor" />
        </View>
        <View style={{ width: '45%', paddingLeft: 5, paddingTop: 15 }}>
          <Button title="Fundador" accessibilityLabel="Fundador" />
        </View>
      </View>
      <View style={styles.containerSecond}>
        <Text style={styles.basicText}>
          Email
        </Text>
        <TextInput style={styles.basicInput} />
        <Text style={styles.basicText}>
          Senha
        </Text>
        <TextInput style={styles.basicInput} />
        <Text style={styles.basicText}>
          Confirmar Senha
        </Text>
        <TextInput style={styles.basicInput} />
        <Text style={styles.basicText}>
          Username do Github
        </Text>
        <TextInput style={styles.basicInput} />
      </View>
      <View style={styles.registerButtons}>
        <Button title="Cadastrar" accessibilityLabel="Cadastrar" />
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