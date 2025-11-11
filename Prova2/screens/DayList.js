import React, { useCallback } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const compromissosDia = Array.from({ length: 50 }).map((_, i) => ({
  id: String(i),
  titulo: `Compromisso ${i + 1}`,
  hora: `${(8 + (i % 10)).toString().padStart(2, '0')}:${(i % 2 === 0 ? '00' : '30')}`,
  descricao: `Atividade número ${i + 1} do dia`,
}));

export default function DayList() {
  const renderItem = useCallback(({ item }) => (
    <View style={styles.card}>
      <Text style={styles.hora}>{item.hora}</Text>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
    </View>
  ), []);

  return (
    <FlatList
      data={compromissosDia}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      initialNumToRender={12}
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
  hora: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  descricao: {
    color: 'gray',
    marginTop: 2,
  },
});
