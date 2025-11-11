import React, { useCallback } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

// Dados fixos dos compromissos
const compromissosDia = [
  { id: '1', hora: '08h00', descricao: 'Médico' },
  { id: '2', hora: '10h30', descricao: 'Reunião de planejamento' },
  { id: '3', hora: '15h00', descricao: 'Saída viagem' },
];

// Função para gerar a data de hoje no formato "11/11 (ter)"
function obterDataFormatada() {
  const hoje = new Date();
  const dia = hoje.getDate().toString().padStart(2, '0');
  const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
  const diasSemana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
  const diaSemana = diasSemana[hoje.getDay()];
  return `${dia}/${mes} (${diaSemana})`;
}

export default function DayList() {
  const renderItem = useCallback(({ item }) => (
    <View style={styles.card}>
      <Text style={styles.hora}>{item.hora}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
    </View>
  ), []);

  return (
    <View style={styles.container}>
      {/* Cabeçalho fixo */}
      <Text style={styles.data}>{obterDataFormatada()}</Text>
      <Text style={styles.subinfo}>Alyson Monteiro e Silva</Text>
      <Text style={styles.subinfo}>Ciencia da Computação 8º Semestre</Text>

      {/* Lista de compromissos */}
      <FlatList
        data={compromissosDia}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        initialNumToRender={10}
        windowSize={5}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  data: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subinfo: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
  },
  lista: {
    marginTop: 25,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  hora: {
    width: 80,
    fontWeight: 'bold',
    fontSize: 16,
  },
  descricao: {
    fontSize: 16,
  },
});
