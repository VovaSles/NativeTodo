
import { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';


export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffe', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'go to work', key: '3' }
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          { text: text, key: Math.random().toString() }
        ]
      })
    } else {
      Alert.alert('OOPS', 'Text must be over 3 characters', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ])
    }

  }
  return (
    <TouchableWithoutFeedback onPress={()=> {
      Keyboard.dismiss()}}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor: '#ddd'
  },
  content: {
    margin: 30,
    flex: 1
  },
  list: {
    flex: 1,
    marginTop: 5
  }
});
  