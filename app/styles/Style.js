import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#666',
    },
    inputTitle: {
      alignItems: 'center',
      paddingTop: 20,
    },  
    basicText: {
      fontFamily:"Roboto",
      fontSize: 14,
      paddingTop: 10,
      color: '#1D075E',
      paddingLeft: 12
    },
    contactText:{
      paddingLeft: 40,
      paddingTop: 10,
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
    containerList: {
      flex: 1,
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    loginButton: {
      alignItems: 'center',
      paddingTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      fontFamily: 'Roboto'
    },
    newLoginButton: {
      position: 'absolute',
      width: 174,
      left: 87,
      top: 384,
      borderRadius: 7,
    },
    registerButtons: {
      alignItems: 'center',
      paddingTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
    }
  });

  export default styles;