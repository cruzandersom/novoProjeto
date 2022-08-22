import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import Imagem from './src/telas/imagem'
// Precisa importar as fontes do pacote do expo
import {useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

//expo install expo-font @expo-google-fonts/montserrat




export default function App() {

    //Vai verificar se as fontes foram carregadas, se sim da continuidade, se não, retorna nulo, enquanto as fontes nao estiverem no projeto
    let [fontsLoaded] = useFonts({
        "montSerratRegular":Montserrat_400Regular,
        "montSerratBold": Montserrat_600SemiBold
    });

    // se as fontes naõ estiverem carregadas retorna nullo
    if (!fontsLoaded) {
        return null;
    }

    // Se as fontes estiverem carregadas, retorna a aplicacao
  return (
    <View >

        <SafeAreaView>
            <StatusBar/>
            <Imagem
                texto='Detalhe da Cesta'
                nomeCesta = 'Cesta de verduras'
                fabricante = 'Jenny Jack Farm'
                descricao = 'Uma cesta selecionada diretamente do fabricante para sua mes'
                preco = 'R$40,00'
            />




        </SafeAreaView>






    </View>
  );
}

