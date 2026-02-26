# HOTHXIII Intro to React Native

**Date of Workshop:** TBD

**Teacher:** Benjamin Garcia

Hi! Welcome to the Intro to React Native workshop. In this session, we'll cover the React Native basics and build a mini mobile app called **Hack Checklist** using Expo. You'll learn how to structure UI with core components, manage state with hooks, and break your app into reusable pieces.

## Resources
- [Slides]()
- [Workshop Recording]()

## Topics Covered
- [Why React Native?](#why-react-native)
- [Core React Native Components](#core-react-native-components)
- [State and User Input](#state-and-user-input)
- [Reusable Components with Props](#reusable-components-with-props)
- [Demo: Build a Hack Checklist App](#demo-build-a-hack-checklist-app)
- [Next Steps](#next-steps)

---

## Why React Native?

React Native lets you build real mobile apps for iOS and Android using JavaScript and React patterns. For hackathons, it's a great option when you want one codebase and fast iteration.

In this workshop, we use **Expo**, which makes it easy to start and run a React Native app without manual native setup.

---

## Core React Native Components

In the demo app, we use:

- `View` for layout containers
- `Text` for text rendering
- `TextInput` for user input
- `Pressable` for tap interactions
- `FlatList` for rendering task lists efficiently
- `StyleSheet` for organized component styles

If you've used React for web, this should feel familiar, but the UI primitives are mobile-native.

---

## State and User Input

We manage app data with `useState`:

- `inputText` stores what the user is typing
- `tasks` stores the checklist items

The app supports three core actions:

- **Add task**: trims input, ignores empty values, prepends new task
- **Toggle task**: marks a task done/undone
- **Delete task**: removes the selected task by `id`

---

## Reusable Components with Props

To keep `App.js` clean, each row is extracted into `components/TaskItem.js`.

Each `TaskItem` receives:

- `task` (the task data)
- `onToggle` (called when tapping the task area)
- `onDelete` (called when pressing Delete)

This keeps logic in one place and makes the UI easier to scale.

---

## Demo: Build a Hack Checklist App

The finished app lives in:

- [`hoth-mini-workshop`](./hoth-mini-workshop)

### Step 1: Install prerequisites

- [Node.js + npm](https://nodejs.org/en/download)
- Expo Go app on your phone (optional, but recommended for testing quickly)
- VS Code (or any editor)

### Step 2: Install dependencies

```sh
cd intro-to-react-native/hoth-mini-workshop
npm install
```

### Step 3: Start the Expo dev server

```sh
npm start
```

From the Expo terminal UI, you can:

- Press `i` to open iOS simulator
- Press `a` to open Android emulator
- Press `w` to run web
- Scan the QR code with Expo Go to open on your phone

### Step 4: Build the checklist logic

In `App.js`, the core flow is:

- Track input + tasks with `useState`
- Add tasks from `TextInput` + Add button
- Render tasks with `FlatList`
- Pass toggle/delete handlers into `TaskItem`

```jsx
const [inputText, setInputText] = useState("");
const [tasks, setTasks] = useState([]);

const addTask = () => {
  const trimmed = inputText.trim();
  if (!trimmed) return;

  const newTask = { id: Date.now(), text: trimmed, done: false };
  setTasks((prev) => [newTask, ...prev]);
  setInputText("");
};
```

### Step 5: Create a reusable task row

In `components/TaskItem.js`, each row handles complete/delete actions through props:

```jsx
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
```

---

Good luck and Happy Hacking!
