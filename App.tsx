import { useState } from 'react';
import { Button, FlatList, GestureResponderEvent, ListRenderItem, ListRenderItemInfo, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [lista, setLista] = useState<string[]>([])
  const [item, setItem] = useState<string>("")

  const handleAddItem = (event: GestureResponderEvent) => {
    event.preventDefault()
    setLista([...lista, item])
    setItem("")
  }

  return (
    <>

      <View style={styles.container}>
        <View>
          <Text style={styles.containerAuthorText}>Lucas Cavalheiro</Text>
          <Text style={styles.containerAuthorText}>RA : 2021103344</Text>
        </View>
        <Text>Adicione um item a lista</Text>
        <TextInput style={styles.input} value={item} onChangeText={setItem} />
        <Button onPress={handleAddItem} title='Adicionar' />
        <Button color="#e66e6e" onPress={e => setLista([])} title='Limpar Lista' />
        <FlatList style={styles.list} data={lista} renderItem={({ item }) => <Text>{item}</Text>} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
    gap: 8,
    padding: 24
  },
  containerAuthor: {
    marginVertical: 12
  },
  containerAuthorText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  list: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#DDD',
    padding: 8
  },
});
