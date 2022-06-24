
import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react'
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [modalisVisible, setModalIsVisible] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoal(currentGoals => [...currentGoals, {
      id: Math.random().toString(), value:goalTitle
    }]);
    setModalIsVisible(false)
  }

  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoals =>{
      return currentGoals.filter((goal) => goal.id !== goalId );
    });
    
  }

  const cancelGoalHandler = () =>{
    setModalIsVisible(false)
  }
  return (
    <View style={styles.container}>
      <Button onPress={() => setModalIsVisible(true)} title='Add New Goal' />
      <View>
        <GoalInput 
        visible={modalisVisible} 
        onAddGoal={addGoalHandler} 
        onCancel={cancelGoalHandler}
        />
      </View>
      <FlatList data={courseGoal} renderItem={itemData => (
        <GoalItem title={itemData.item.value} onDelete={removeGoalHandler} id={itemData.item.id} />
      )}
      />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
})