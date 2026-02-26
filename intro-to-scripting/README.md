# HOTHXIII Intro to Scripting

**Date of Workshop:** Sunday, March 1, 2026

**Teacher:** [Jaivin](https://github.com/JaivinP)

Hi! Welcome to HOTHXIII's Intro to Scripting workshop! In this session, we'll cover what scripting is, why Python is the go-to language for it, and how to use scripts to scrape data from the web. Whether you've never written a Python script before or just want to get more comfortable with it, this workshop will give you tools you can use tonight. Let's get into it!

## Resources

- [Slides](https://docs.google.com/presentation/d/1WHTzUVPTG6G0RGvZXPPTqRTU5MIq7PPcr2xHmmIjtv0/edit?slide=id.p1#slide=id.p1)
- [Workshop Recording]()

## Overview

- [What is Scripting?](#what-is-scripting)
  - Scripting vs. Compiled Languages
  - Why Python?
- [Python Refresher](#python-refresher)
  - Variables and Print
  - If/Else and Loops
  - Functions
- [Web Scraping](#web-scraping)
  - What is Web Scraping?
  - How will we web scrape?
  - HTML Tags
  - Things to keep in mind

---

## What is Scripting?

A script is a small program written to automate tasks. Instead of doing something manually over and over, you write a set of instructions and let the computer execute them.

Examples of what scripting can do:
- Rename 500 files at once
- Scrape data from a website
- Send automated emails
- Transform and clean CSV data

### Scripting vs. Compiled Languages

When you write Python, your code is executed line by line by an **interpreter** — there's no separate build step. This is different from compiled languages like C++, where your source code gets translated into machine code before it ever runs.

| C++ | Python |
|---|---|
| Compiled language | Interpreted |
| Translated to machine code | Runs line by line |
| Very fast | Slower |
| More complex to write | Easier to iterate |

**The analogy:** C++ is like building furniture from scratch — you have total control but it takes time and expertise. Python is like flat-pack furniture — you follow the instructions and it just works.

```cpp
// C++ — you manage your own memory
int* x = new int(5);
// delete x;  → forget this and you have a memory leak
```

```python
# Python — no manual memory management
x = 5
```

### Why Python?

- Beginner-friendly and reads close to plain English
- Massive library ecosystem for almost any task
- Used across machine learning, web development, and automation
- Fast to write, fast to test — perfect for a hackathon

---

## Setup

Make sure Python is installed. If not, download it at https://www.python.org/downloads/. During installation on Windows, check **"Add Python to PATH"**.

Verify it works:
```bash
python3 --version
```

Install the libraries used in this workshop:
```bash
pip3 install requests beautifulsoup4
```

---

## Python Refresher

### Variables and Print

```python
print("Hello HOTH")

name = "Max Zhang"
age = 21
score = 98.5

print(f"My name is {name}, I am {age} years old and scored a {score} on my last CS test!")
```

Output:
```
Hello HOTH
My name is Max Zhang, I am 21 years old and scored a 98.5 on my last CS test!
```

### If/Else and Loops

```python
score = 85

if score > 90:
    print("A")
else:
    print("Keep pushing!")

for i in range(5):
    print("Building something cool...")
```

Output:
```
Keep pushing!
Building something cool...
Building something cool...
Building something cool...
Building something cool...
Building something cool...
```

### Functions

```python
def greet(name):
    print("Hello", name)

greet("Hackers")
```

Output:
```
Hello Hackers
```

---

## Web Scraping

### What is Web Scraping?

Web scraping is using automated tools/scripts to extract data from websites (usually in HTML) and processing that data into a form that you need.

Real use cases: market research, Bruin Dining menus, news aggregation, feeding data into AI agents.

Common tools: **BeautifulSoup** (what we use in this workshop), Scrapy, and Selenium.

### How will we web scrape?

We use **BeautifulSoup**, a Python package that parses HTML and lets you search through it to find the data you want. Combined with **requests** (which fetches the page), you have everything you need.

Install:
```bash
pip3 install requests beautifulsoup4
```

Basic pattern:
```python
import requests
from bs4 import BeautifulSoup

url = "https://wikipedia.com"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")
headings = soup.find_all("div")

for heading in headings:
    print(heading.text.strip())
```

### HTML Tags

HTML is the structure of every webpage. BeautifulSoup searches through these tags to find your data. Here are the most common ones:

| Tag | Description |
|---|---|
| `<html>` | Declares the page as HTML |
| `<head>` | Contains page metadata |
| `<body>` | Contains the visible content |
| `<h1>` to `<h6>` | Headings of different sizes |
| `<p>` | A paragraph |
| `<div>` | A generic container block |
| `<a href="...">` | A hyperlink |
| `<img src="...">` | An image |
| `<ul>` / `<ol>` | Unordered / ordered list |
| `<li>` | A list item |
| `<b>` | Bold text |
| `<i>` | Italic text |

When scraping, you use these tag names and their CSS classes to target exactly the data you want.

### Keep in mind

Web scraping is harder than it looks in demos. The site used in this workshop was built specifically to be scraped. Real websites are a different story.

- Many sites use CAPTCHAs and other anti-bot measures that will block your scraper
- Sites that load content with JavaScript won't work with BeautifulSoup alone — you'd need tools like Selenium or Playwright
- Always scrape responsibly: only scrape public data, check a site's `robots.txt` file, and add a small delay between requests so you're not overwhelming the server

---

## Resources

- Python documentation: https://docs.python.org/3/
- BeautifulSoup documentation: https://www.crummy.com/software/BeautifulSoup/bs4/doc/
- Requests library: https://requests.readthedocs.io/
- Practice scraping (quotes): https://quotes.toscrape.com
- Practice scraping (books): https://books.toscrape.com
- HOTH XII Scripting Workshop (last year): https://github.com/uclaacm/hothXII-workshops/tree/main/intro-to-scripting

---

Good luck and Happy Hacking!
