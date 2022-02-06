import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';

export default function Menu({ userSystem, navigation }) {
    // adicionar funções com roteamento para as telas correspondentes:
    // Tela de cafastro com os dados do usuario.
    // Tela com lista de tasks relacionadas ao Contribuidor logado
    // Tela de Listagem de projetos
    // Tela de Login

    // Tela de cadastro com os dados do usuario.
    // Tela com lista de projetos relacionadas ao Fundador logado
    // Tela de Login
    return (
        <View>
            { userSystem.userType == 'Contributor' ?
                <View>
                    <Text>Atualizar perfil</Text> 
                    <Text>Minhas tasks</Text>
                    <Text>Lista de projetos</Text>
                    <Text>Logout</Text>
                </View>
                : <View>
                    <Text>Atualizar perfil</Text>
                    <Text>Meus projetos</Text>
                    <Text>Logout</Text>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({

});