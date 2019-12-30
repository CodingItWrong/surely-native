import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Modal} from 'react-native-paper';
import AppBar from '../../AppBar';
import useTodos from '../../useTodos';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import styles from '../../styles';

const TodoScreen = ({navigation}) => {
  const [todoModalVisible, setTodoModalVisible] = useState(false);
  const {todos, handleAdd, handleComplete, handleDelete} = useTodos();

  const showModal = () => setTodoModalVisible(true);
  const hideModal = () => setTodoModalVisible(false);

  return (
    <>
      <AppBar navigation={navigation} />
      <View style={styles.fill}>
        <NewTodoForm onAdd={handleAdd} />
        <TodoList
          todos={todos}
          onShowModal={showModal}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      </View>
      <Modal visible={todoModalVisible} onDismiss={hideModal}>
        <Text>Modal</Text>
      </Modal>
    </>
  );
};

export default TodoScreen;
