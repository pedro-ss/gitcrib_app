import * as React from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={styles.momContainer}>
      <View style={styles.container}>
         <Text style={styles.basicText}>
            Email
        </Text>
        <TextInput style={styles.basicInput} />
        <Text style={styles.basicText}>
            Senha
        </Text>
        <TextInput style={styles.basicInput} />
      </View>
      <View style={styles.containerSecond}>
        <View style={{width:'45%', paddingTop: 15}}>
              <Button title="Login" accessibilityLabel="Login" onPress={()=>{ console.log("fazer requisição para o login") }} />
        </View>
        <View style={{width:'45%', paddingTop: 15}}>
              <Button title="Cadastre-se" accessibilityLabel="Cadastre-se" onPress={() => { navigation.navigate('Cadastro') }}/>
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
  },
  basicText: {
      fontFamily:"Roboto",
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
});
