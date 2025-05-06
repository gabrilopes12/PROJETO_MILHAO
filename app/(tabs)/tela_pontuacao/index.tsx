import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const PontuacaoScreen: React.FC = () => {
  const router = useRouter();

  const handleReturnHome = () => {
    router.push('/home'); // Retorna para a tela inicial
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>POLIEDRO DO MILHÃO</Text>

      <View style={styles.moneyRain}>
        <Text style={styles.congratsText}>PARABÉNS!{'\n'}VOCÊ GANHOU</Text>
        <Text style={styles.amount}>R$1.000.000,00</Text>
      </View>

      <TouchableOpacity style={styles.arrowButton} onPress={handleReturnHome}>
        <Text style={styles.arrow}>➜</Text>
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7b1113',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 30,
    textAlign: 'center',
  },
  moneyRain: {
    backgroundColor: '#ff3333',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    marginBottom: 40,
  },
  congratsText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  amount: {
    color: '#FFD700',
    fontSize: 26,
    fontWeight: 'bold',
  },
  arrowButton: {
    backgroundColor: '#FFD700',
    borderRadius: 50,
    padding: 10,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 28,
    color: '#7b1113',
    fontWeight: 'bold',
  },
});

export default PontuacaoScreen;
