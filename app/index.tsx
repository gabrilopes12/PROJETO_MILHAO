import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const StartScreen: React.FC = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push('/(tabs)/login/');
  };

  const handleHistory = () => {
    router.push('/(tabs)/historico');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <Text style={styles.title}>Quiz do Milhão</Text>
        <Text style={styles.subtitle}>Teste seus conhecimentos e ganhe milhares!</Text>
        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Começar Jogo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleHistory}>
          <Text style={styles.buttonText}>Histórico</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  contentBox: {
    backgroundColor: '#2e2e40',
    padding: 30,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#ddd',
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#ffd700',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 20,
  },
  buttonText: {
    color: '#1e1e2f',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StartScreen;