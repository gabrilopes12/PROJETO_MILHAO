import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const GameScreen: React.FC = () => {
  const router = useRouter();
  const [question, setQuestion] = useState('Carregando pergunta...');
  const [alternatives, setAlternatives] = useState<string[]>([]);
  const [currentValue, setCurrentValue] = useState('R$100,00');

  useEffect(() => {
    // Simulação: futuramente troque por requisição ao banco de dados
    const fetchQuestion = async () => {
      setQuestion('Qual é a capital do Brasil?');
      setAlternatives(['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador']);
    };

    fetchQuestion();
  }, []);

  const handleAnswer = (index: number) => {
    const isCorrect = index === 2; // Brasília
    if (isCorrect) {
      Alert.alert('Correto!', 'Você acertou!');
      // Aqui você pode atualizar pontuação, próxima pergunta etc.
      router.push('/tela_pontuacao'); // Finaliza jogo por agora
    } else {
      Alert.alert('Errado!', 'Resposta incorreta.');
      router.push('/tela_pontuacao');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>POLIEDRO DO MILHÃO</Text>
      <Text style={styles.valueBox}>VALENDO {currentValue}</Text>

      <View style={styles.questionBox}>
        <Text style={styles.questionText}>{question}</Text>
      </View>

      {alternatives.map((alt, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={() => handleAnswer(index)}>
          <Text style={styles.optionText}>{alt}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.actions}>
        <TouchableOpacity style={styles.buttonPurple}>
          <Text style={styles.buttonText}>Pular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRed}>
          <Text style={styles.buttonText}>Parar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLight}>
          <Text style={styles.buttonText}>-2 Alternativas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLight}>
          <Text style={styles.buttonText}>Dica</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonExit} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Sair do Jogo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141c48',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  valueBox: {
    backgroundColor: '#c00',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 20,
    marginBottom: 15,
  },
  questionBox: {
    backgroundColor: '#4dc0c0',
    padding: 15,
    borderRadius: 20,
    width: '100%',
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  option: {
    backgroundColor: '#4dc0c0',
    paddingVertical: 15,
    borderRadius: 20,
    marginVertical: 5,
    width: '100%',
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#1e1e2f',
    fontWeight: '600',
  },
  actions: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonPurple: {
    backgroundColor: '#a288f2',
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    width: '60%',
  },
  buttonRed: {
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    width: '60%',
  },
  buttonLight: {
    backgroundColor: '#b2f7ef',
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    width: '60%',
  },
  buttonExit: {
    backgroundColor: '#25c76c',
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
    width: '60%',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GameScreen;
