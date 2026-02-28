# HOTHXIII Intro to React.js

**Date of Workshop:** 02/28/26

**Teacher:** Kritish Alli

**Description:**
Hi! This workshop introduces the basics of React.js. Learn how to use React's core concepts — components, props, state, and event handling — by building a React Trivia Quiz app.

- [Slides](https://docs.google.com/presentation/d/1NLaZyaPtMk3RE-yQaOyS7xDmTxHlo0hCkusFIUvFCEM/edit?usp=sharing)
- [Workshop Recording](https://drive.google.com/file/d/1wT9HlddmdqXjtfMgMwryi5Kl9Mbe_aR2/view?usp=share_link)

---
## Set Up
1. Install [Node.js](https://nodejs.org/en) (includes npm)
2. Install [VSCode](https://code.visualstudio.com/)
3. Run the following command to scaffold your project:
```bash
npm create vite@latest my-quiz-app -- --template react
cd my-quiz-app
npm install
npm run dev
```
4. Open `http://localhost:5173` in your browser — you should see the Vite + React starter page!
5. Open the project folder in VSCode. You'll be working mainly inside `src/App.jsx`.

---
## What is React?

React is a JavaScript library for building user interfaces out of reusable **components**. It was created by Meta and first released in 2013.

The core idea: **UI = f(state)**. Your UI is just a function of your data. Change the data, and React automatically updates the UI for you — no manual DOM manipulation needed.

---
## Components

A **component** is a reusable piece of UI. In React, components are just JavaScript functions that return JSX.

```jsx
function Greeting() {
  return <h1>Hello, Hackathon!</h1>
}
```

Components can be nested inside each other to build up a larger UI:

```jsx
function App() {
  return (
    <div>
      <h1>React Quiz</h1>
      <Greeting />
    </div>
  )
}
```

Think of components like Lego bricks — each piece is reusable and snaps together to make something bigger.

### JSX

**JSX** is HTML you can write inside JavaScript. It gets compiled to regular JavaScript under the hood.

```jsx
// This is JSX
function QuestionCard() {
  return (
    <div className="question-card">
      <h2>What year was React first released?</h2>
    </div>
  )
}
```

> **Note:** In JSX, use `className` instead of `class` (since `class` is a reserved word in JavaScript).

---
## Props

**Props** are how you pass data into a component — like arguments to a function. The parent component is always in charge of the data it passes down.

```jsx
function QuestionCard({ question }) {
  return (
    <div className="question-card">
      <h2>{question}</h2>
    </div>
  )
}

// Used like this:
<QuestionCard question="What year was React first released?" />
```

### Rendering Lists with `.map()`

When you have an array of data (like a list of answers), use `.map()` to render each item. Always include a `key` prop — React uses it to track which item is which.

```jsx
const answers = ["2010", "2013", "2016", "2019"]

// ❌ Don't do this — doesn't scale
<ul>
  <li>2010</li>
  <li>2013</li>
</ul>

// ✅ Do this instead
<ul>
  {answers.map((answer) => (
    <li key={answer}>{answer}</li>
  ))}
</ul>
```

### Component Tree

As your app grows, components form a tree. Data flows **downward** through props:

```
App
└── QuestionCard
    ├── AnswerButton ("2010")
    ├── AnswerButton ("2013")
    ├── AnswerButton ("2016")
    └── AnswerButton ("2019")
```

---
## State

**Props** are read-only — they can't change. But what happens when something in your app *does* need to change, like which answer the user clicked?

That's where **state** comes in. State is data that can change over time, and when it does, React automatically re-renders the component with the new value.

### useState

```jsx
import { useState } from 'react'

const [selected, setSelected] = useState(null)
//     ^current    ^setter        ^initial value
```

`useState` returns two things: the current value, and a function to update it. Calling the setter triggers a re-render.

```
state changes → React re-renders → UI updates automatically
```

### Example

```jsx
import { useState } from 'react'

function QuestionCard({ question }) {
  const [selected, setSelected] = useState(null)

  function handleSelect(answer) {
    setSelected(answer)
  }

  return (
    <div className="question-card">
      <h2>{question.text}</h2>
      {question.answers.map((answer) => (
        <button key={answer} onClick={() => handleSelect(answer)}>
          {answer}
        </button>
      ))}
      <p>You selected: {selected}</p>
    </div>
  )
}
```

### Multiple State Variables

You can have as many state variables as you need. In our quiz app, `App` owns both `score` and `currentIndex` so they persist across questions:

```jsx
const [score, setScore] = useState(0)
const [currentIndex, setCurrentIndex] = useState(0)

// Derive values from state — don't store what you can calculate
const currentQuestion = questions[currentIndex]
const isFinished = currentIndex >= questions.length
```

---
## Event Handling

**Events** let you respond to user actions like clicks, typing, or hovering.

```jsx
function AnswerButton({ answer, onClick }) {
  return (
    <button onClick={onClick}>
      {answer}
    </button>
  )
}
```

When you need to pass data back *up* to a parent component, pass a callback function down as a prop. The child calls it when something happens:

```jsx
// App.jsx — parent owns the score
function App() {
  const [score, setScore] = useState(0)

  return (
    <QuestionCard
      question={currentQuestion}
      onCorrect={() => setScore(score + 1)}  // callback passed down
    />
  )
}

// QuestionCard.jsx — child reports back
function QuestionCard({ question, onCorrect }) {
  function handleSelect(answer) {
    if (answer === question.correct) {
      onCorrect()  // tell the parent!
    }
  }
  // ...
}
```

> **Mental model:** Data flows **down** via props. Events bubble **up** via callbacks.

---
## Conditional Rendering

You can render different UI depending on state. One of the cleanest approaches is an early `return`:

```jsx
function App() {
  const isFinished = currentIndex >= questions.length

  if (isFinished) {
    return <ScoreScreen score={score} total={questions.length} />
  }

  return (
    <div>
      <QuestionCard question={currentQuestion} />
    </div>
  )
}
```

You can also use inline conditionals for smaller cases:

```jsx
// Only show the "Next" button after the user has picked an answer
{selected && (
  <button onClick={onNext}>Next Question →</button>
)}
```

---
## The `key` Prop (Advanced Tip)

The `key` prop isn't just for lists — you can use it on any component to force React to remount it with fresh state. In our quiz, this resets `QuestionCard`'s `selected` state every time the question changes:

```jsx
<QuestionCard
  key={currentIndex}   // when this changes, React creates a brand new component
  question={currentQuestion}
/>
```

---
## The Demo App: React Trivia Quiz

By the end of this workshop, you'll have built a fully working trivia quiz with:
- Multiple questions rendered from a data array
- Answer selection with correct/wrong feedback
- Score tracking across questions
- A results screen with a "Play Again" button

```
App (score, currentIndex)
├── QuestionCard (selected) — shown during the quiz
│   └── AnswerButton × 4
└── ScoreScreen — shown when all questions are answered
```

---
## Closing Notes

This was just an introduction to React. There is so much more to learn. Visit the following resources to continue!

* [React Docs (react.dev)](https://react.dev/) — the official docs are excellent and beginner-friendly
* [Vite Docs](https://vitejs.dev/) — learn more about the build tool we used
* [JavaScript Refresher](https://www.w3schools.com/js/) — brush up on JS fundamentals
* **Next project idea:** Build a weather app that fetches from a public API — a great way to learn `useEffect` and data fetching!
