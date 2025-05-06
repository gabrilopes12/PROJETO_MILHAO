import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Volume2 } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function HistoricoScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Ícone de som */}
      <TouchableOpacity style={styles.soundIcon}>
        <Volume2 size={30} color="black" />
      </TouchableOpacity>

      {/* Medalha e título */}
      <View style={styles.header}>
        <View style={styles.coin}>
          <Text style={styles.coinText}>$</Text>
        </View>
        <Text style={styles.title}>POLIEDRO{"\n"}DO MILHÃO</Text>
      </View>

      {/* Histórico */}
      <Text style={styles.historyTitle}>HISTÓRICO</Text>

      <View style={styles.historyBox}>
        <View style={styles.bullets}>
          {Array.from({ length: 20 }).map((_, index) => (
            <View key={index} style={styles.bullet} />
          ))}
        </View>

        <View style={styles.attemptsBox}>
          <ScrollView>
            <Text style={styles.attemptText}>Tentativa1: R$:xxx.xx</Text>
            <Text style={styles.attemptText}>Tentativa2: R$:xxx.xx</Text>
            <Text style={styles.attemptText}>Tentativa3: R$:xxx.xx</Text>
            {/* Adicione mais tentativas conforme necessário */}
          </ScrollView>
        </View>

        <View style={styles.bulletsBottom}>
          {Array.from({ length: 20 }).map((_, index) => (
            <View key={index} style={styles.bullet} />
          ))}
        </View>
      </View>

      {/* Botão de Voltar ao Início */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/home/')}>
        <Text style={styles.backButtonText}>Voltar ao Início</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b0d0d',
    alignItems: 'center',
    paddingTop: 50,
  },
  soundIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  coin: {
    width: 80,
    height: 80,
    backgroundColor: 'gold',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coinText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    color: 'gold',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  historyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gold',
    marginVertical: 20,
  },
  historyBox: {
    width: '90%',
    backgroundColor: '#8b0000',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  bullets: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
  },
  bulletsBottom: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gold',
    margin: 3,
  },
  attemptsBox: {
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 5,
    padding: 10,
  },
  attemptText: {
    fontSize: 16,
    marginVertical: 5,
  },
  backButton: {
    marginTop: 20,
    backgroundColor: 'gold',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  backButtonText: {
    color: '#6b0d0d',
    fontWeight: 'bold',
    fontSize: 16,
  },
});