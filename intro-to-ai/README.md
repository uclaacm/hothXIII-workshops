# HOTHXIII Intro to AI

**Date of Workshop:** Sunday, March 1, 2026

**Teacher:** [Mark Mairs](https://github.com/Mekski)

Hi! Welcome to HOTHXIII’s Intro to AI workshop! In this session, we’ll explore the fundamentals of what Artificial Intelligence (AI) is, how it differs from traditional algorithms and human thinking, and how to integrate AI into your own projects using Google Gemini’s API. Whether you’re new to AI or looking to understand how models like artificial intelligence works under the hood, this workshop will help you get started. Let’s begin!

## Resources:

- [Slides](https://docs.google.com/presentation/d/1-NhOcMH48Ei7SCf6_vpumUbxGLTfxohckF6xGwhjOw4/edit?usp=sharing)
- [Workshop Recording]()

## Overview:

- [What is AI?](#what-is-ai)
  - How AI works vs. Algorithms & Humans
  - Tokens
  - The Context Window
- [Using AI in your project!](#demo-pasta-recipe-generator-with-gemini)
  - Using LLM APIs
  - Agentic Development & Context Engineering
- [Student Offers](#student-offers)

## What is AI?

Artificial Intelligence (AI) models are trained on massive datasets to learn patterns and use those patterns to make predictions. Unlike traditional **Algorithms**, which follow fixed, step-by-step rules to produce the same output every time (like a strict pasta recipe), AI uses probability to choose the most likely next step based on what it has "seen" before.

While **Humans** adapt using memory, senses, and judgment, AI predicts patterns without a true "understanding" of the task—it simply knows that in millions of examples, certain pieces of information often follow others.

### Tokens
AI doesn't read text in words or sentences like we do; it sees **Tokens**.
* Everything you give to an AI is converted into tokens before being processed.
* For reference, 100 tokens is approximately equal to 75 English words.
* AI generates text by predicting the next small token, over and over again.

### The Context Window
The **Context Window** is the maximum number of tokens a model can "see" and process at one single time.
* This window includes your input (the prompt) AND the model's output.
* Modern models have massive windows; for example, Gemini 3 Pro can handle 2 million tokens.
* If a conversation exceeds this limit, the model starts to "forget" the earliest parts of the chat.

## Demo: Pasta Recipe Generator with Gemini

### Step 1: Open your IDE!
I'll be using **VS Code**, but you can use any editor like **Cursor**. Make sure you have your terminal open!

### Step 2: Make the project folder
Create a new directory for your project to keep things organized. Run these commands in your terminal:
~~~bash
mkdir HackDemo
cd HackDemo
~~~

### Step 3: Create your files
You need a Python file for your code and a `.env` file to keep your API key secure. You can click "New File" in your IDE or use the terminal:
~~~bash
touch .env
touch main.py
~~~

### Step 4: Install Dependencies & get your API key
Run this command to install the Google GenAI and environment variables libraries:
~~~bash
pip install -U google-genai python-dotenv
~~~

**Get your Key:**
1. Go to [https://aistudio.google.com/api-keys](https://aistudio.google.com/api-keys).
2. Click **"Create API Key"**.
3. Copy it and **never share it**!

### Step 5: Configure your Environment
Open your `.env` file and add your key. It should look like this:
~~~env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
~~~

### Step 6: Write the Python Script
Add the following code to your `main.py`. This script uses the `google-genai` library to talk to the model:
~~~python
from dotenv import load_dotenv
from google import genai
import os

# This loads the GEMINI_API_KEY from your .env file
load_dotenv() 

# The client reads the key from your environment
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

response = client.models.generate_content(
    model="gemini-3-flash-preview",
    contents="Give me a simple pasta recipe for beginners. Keep it under 8 steps."
)

print(response.text)
~~~

### Step 7: Run your program!!!
In your terminal, run:
~~~bash
python3 main.py
~~~

## Agentic Development & Context Engineering

### Agentic Development
Agentic development is the transition from a passive code assistant to an autonomous agent. This works because the language model is not just generating text; it is connected to **tools**.
* **MCP (Model Context Protocol):** A way to expose capabilities like reading/writing files and running commands to the model.
* **Autonomous Action:** This allows the AI to take actions inside your IDE instead of just responding in a chat window. 
* **The Loop:** When we combine a language model with tool access and run it in a **Goal → Think → Act → Observe** loop, we get agentic behavior.

### Context Engineering
Context engineering means intentionally shaping what the model "sees" in its context window. Instead of letting raw prompts and tool outputs accumulate uncontrollably, we decide what matters to keep the model focused. 
* **Selection:** Choosing only the relevant files or information needed for the task.
* **Summarization:** Condensing long conversation histories to save token space.
* **Noise Reduction:** Removing unnecessary data to increase clarity and reduce hallucinations.
* **Constraint Preservation:** Ensuring the model remembers important rules or project requirements.

## Student Offers
Take advantage of these deals to power your hackathon projects for free!
* **Google Gemini for Students:** [Free 1 year of Gemini 3 Pro](https://gemini.google/students/)
* **Cursor Pro for Students:** [Free 1 year of Cursor Pro](https://cursor.com/students)
* **Claude Builder Club @ UCLA:** [Join for free Claude Pro & API credits](https://claude.ai/) (Check UCLA ACM Hack discord for the invite link!)
* **GitHub Student Developer Pack:** Includes access to dozens of developer tools. [Claim here](https://education.github.com/pack)

---
Good luck and Happy Hacking!
