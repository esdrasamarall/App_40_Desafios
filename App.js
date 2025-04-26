import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const Cabecalho =({ corTexto, corFundo }) => {
  return (
    <View style={[styles.cabecalhoContainer, { backgorundColor: corFundo}]}>
      <Text style={[styles.cabecalhoTexto, { color: corTexto}]}>
        40 Desafios JS
      </Text>
    </View>
  )
}




const listaDesafiosNomes =[
  "1° Trocador de Cores",
  "2° Contador"
];

// sessao de navegação para desafios
const ListaDesafios = () => {
  return (
    <ScrollView style={styles.listaContainer}>
      {listaDesafiosNomes.map((nomeDesafio, index) => (
        <TouchableOpacity
        key={index}
        style={styles.botaoDesafio}
        onPress={() => {
          //logica para para chegar até o desafio 
        }}
      >
        <Text style={styles.textoBotaoDesafio}>{nomeDesafio}</Text>
      </TouchableOpacity>
      ))}
    </ScrollView>
  );
};


const Rodape = ({ username }) => {
  return (
    <View style={styles.rodapeContainer}>
      <Text style={styles.rodapeTexto}>Meu GitHub: {username}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={{ flex: 1}}>
      <Cabecalho corTexto="black" corFundo="red" />
      <ListaDesafios />
      <Rodape username="esdrasamarall" />
    </View>
  );


}const styles = StyleSheet.create({
  cabecalhoContainer: {
    padding:20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  cabecalhoTexto: {
    fontSize:24,
    fontWeight: 'bold',
  },
  listaContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
    backgroundColor:'purple',
  },
  botaoDesafio: {
    backgroundColor:'yellow',
    paddingVertical:15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom:10,
  },
  textoBotaoDesafio: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  rodapeContainer: {
    backgroundColor :'yellow',
    padding:15,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'purple',
  },
  rodapeTexto: {
    fontSize:14,
    color:'#555',
  },

})