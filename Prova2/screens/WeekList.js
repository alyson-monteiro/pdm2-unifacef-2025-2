import React, { useCallback } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

const compromissosSemana = Array.from({ length: 200 }).map((_, i) => ({
  id: String(i),
  dia: diasSemana[i % 7],
  titulo: `Atividade ${i + 1}`,
  hora: `${(7 + (i % 10)).toString().padStart(2, '0')}:${(i % 2 === 0 ? '15' : '45')}`,
  local: `Local ${Math.floor(Math.random() * 10) + 1}`,
}));

export default function WeekList() {
  const renderItem = useCallback(({ item }) => (
    <View style={styles.card}>
      <Text style={styles.dia}>{item.dia}</Text>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.info}>⏰ {item.hora} | 📍 {item.local}</Text>
    </View>
  ), []);

  return (
    <FlatList
      data={compromissosSemana}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      initialNumToRender={15}
      windowSize={10}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f9fa',
    marginVertical: 6,
    marginHorizontal: 10,
    padding: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  dia: {
    color: '#28a745',
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  info: {
    color: 'gray',
    marginTop: 2,
  },
});
