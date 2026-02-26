import { StatusBar } from 'expo-status-bar';

import React, { useState } from "react";
import {
  Text, View,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet
} from "react-native";
import TaskItem from "./components/TaskItem"

export default function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  const addTask = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;

    const newTask = {
      id : Date.now(),
      text : trimmed,
      done : false,
    }

    setTasks((prev) => [newTask, ...prev]);
    setInputText("");
  }

  const toggleTask = (id) => {
    setTasks((prev) => 
      prev.map((task) =>
        task.id === id ? {...task, done : !task.done} : task,
      )
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hack Checklist</Text>
      <Text style={styles.subtitle}>Intro to React Native</Text>
      <View style={styles.inputRow}>
        <TextInput 
          value = {inputText}
          onChangeText = {setInputText}
          placeholder = "Add a task..."
          style = {styles.input}
          returnKeyType = "done"
          onSubmitEditing={addTask}
        />
        <Pressable onPress = {addTask} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      </View>

      <Text style={styles.countText}>
        {tasks.length} task{tasks.length === 1 ? "" : "s"}
      </Text>

      <FlatList 
        data = {tasks}
        keyExtractor={(item) => String(item.id)}
        renderItem = {({item}) => (
          <TaskItem task = {item} onToggle = {toggleTask} onDelete = {deleteTask}/>
        )}
        ListEmptyComponent = {
          <Text style={styles.emptyText}>No tasks yet. Add one above.</Text>
        }
        keyboardShouldPersistTaps = "handled"
        contentContainerStyle = {styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  subtitle: {
    color: "#666",
    marginTop: 2,
    marginBottom: 12,
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: "#111",
    borderRadius: 8,
    paddingHorizontal: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  countText: {
    color: "#444",
    marginBottom: 6,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyText: {
    color: "#777",
    paddingVertical: 12,
    textAlign: "center",
  },
});
