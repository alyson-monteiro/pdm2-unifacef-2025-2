import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda</Text>
      <Text style={styles.subtitle}>Alyson Monteiro e Silva</Text>
      <Text style={styles.subtitle}>Ciencia da Computação 8º Semestre</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Compromissos do dia')}>
        <Text style={styles.buttonText}>Compromissos do Dia</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Compromissos da semana')}>
        <Text style={styles.buttonText}>Compromissos da Semana</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: '#f6f8fa' },
  title: { fontSize: 22, fontWeight: '700', color: '#0d6efd', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#444', marginVertical: 12, textAlign: 'center' },
  button: { width: '100%', maxWidth: 320, backgroundColor: '#0d6efd', paddingVertical: 14, borderRadius: 10, marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 16, textAlign: 'center', fontWeight: '600' },
});
