import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

export default function App() {
  const [nickname, setNickname] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    // Aqui você pode colocar a lógica de cadastro
    console.log('Nickname:', nickname);
    console.log('Senha:', senha);
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/icon.png')} // Substitua pela imagem que você tem
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>POLIEDRO{"\n"}DO MILHÃO</Text>
        <Image source={require('../../../assets/images/icon.png')} style={styles.coin} />
        
        <TextInput
          style={styles.input}
          placeholder="Nickname:"
          placeholderTextColor="#fff"
          onChangeText={setNickname}
          value={nickname}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha:"
          placeholderTextColor="#fff"
          secureTextEntry
          onChangeText={setSenha}
          value={senha}
        />
        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFD700',
    marginBottom: 10,
  },
  coin: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#E63946',
    width: '80%',
    padding: 12,
    borderRadius: 25,
    marginVertical: 8,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#1d3557',
    fontWeight: 'bold',
  },
});
