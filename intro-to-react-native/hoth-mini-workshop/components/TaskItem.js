import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <View style={styles.row}>
      <Pressable style={styles.taskArea} onPress={() => onToggle(task.id)}>
        <Text style={styles.check}>{task.done ? "✅" : "⬜️"}</Text>
        <Text style={[styles.taskText, task.done && styles.taskTextDone]}>
          {task.text}
        </Text>
      </Pressable>

      <Pressable style={styles.deleteButton} onPress={() => onDelete(task.id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  taskArea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  check: {
    marginRight: 8,
    fontSize: 16,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  taskTextDone: {
    textDecorationLine: "line-through",
    color: "#777",
  },
  deleteButton: {
    backgroundColor: "#f3f3f3",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  deleteText: {
    color: "#b00020",
    fontWeight: "600",
  },
});
