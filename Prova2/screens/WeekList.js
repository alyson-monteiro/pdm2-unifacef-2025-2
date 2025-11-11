import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function WeekList() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.subtitle}>Alyson Monteiro e Silva</Text>
      <Text style={styles.subtitle}>Ciencia da Computação 8º Semestre</Text>

      {/* Segunda-feira */}
      <View style={styles.dayBlock}>
        <Text style={styles.day}>Segunda-feira (10/11)</Text>
        <Text style={styles.item}>08h30: Dentista</Text>
        <Text style={styles.item}>16h00: Pilates</Text>
      </View>

      {/* Terça-feira */}
      <View style={styles.dayBlock}>
        <Text style={styles.day}>Terça-feira (11/11)</Text>
        <Text style={styles.item}>08h00: Médico</Text>
        <Text style={styles.item}>10h30: Reunião de planejamento</Text>
        <Text style={styles.item}>15h00: Saída viagem</Text>
      </View>

      {/* Quarta-feira */}
      <View style={styles.dayBlock}>
        <Text style={styles.day}>Quarta-feira (12/11)</Text>
        <Text style={styles.item}>09h00: Congresso</Text>
        <Text style={styles.item}>12h30: Almoço com executivos</Text>
        <Text style={styles.item}>20h30: Jantar de confraternização</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
  },
  dayBlock: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  day: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 5,
  },
  item: {
    fontSize: 15,
    color: '#333',
    marginLeft: 10,
    marginBottom: 3,
  },
});
