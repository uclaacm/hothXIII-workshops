# Intro to Web APIs Workshop

**Teacher**: Kartik Bhatia

Hey! Welcome to the Intro to Web APIs workshop. We'll be covering the client-server model, what APIs are, how HTTP works, a note on keeping your API keys safe, and a fun demo where we build a mini movie search engine using the OMDb API. If you've ever wondered how apps pull in live data from the outside world, you're in the right place!

## Resources
- [Slides](https://tinyurl.com/hoth-web-apis-slides)
- [Recording](#) *(to do)*

## Topics Covered
- [Client-Server Model](#client-server-model)
- [Understanding APIs](#understanding-apis)
- [Overview of HTTP](#overview-of-http)
- [JSON](#json)
- [Keeping Your API Key Safe](#keeping-your-api-key-safe)
- [Demo: Build a Movie Search Engine](#demo-build-a-movie-search-engine)

---

## Client-Server Model

Before we talk about APIs, we need to understand the **client-server model** -- one of the most fundamental patterns in software.

Think about using an **ATM**. You walk up, insert your card, and request some cash. You never get direct access to the bank's vault -- instead, you send a request and get your money back. In this analogy:

- **You** are the **client** -- you initiate requests.
- **The bank** is the **server** -- it holds the actual data and does the real work.
- **The ATM** is the interface in between -- more on this in the next section!

Two things make this model powerful. First, many clients can use the same server at once -- thousands of ATMs can all talk to the same bank simultaneously. Second, it provides **abstraction**: you don't need to know anything about how the bank stores its data. You just press buttons and get cash. The complexity is hidden from you.

---

## Understanding APIs

So what is the ATM, exactly? It's a structured interface that knows how to take your request, communicate it to the right system, and relay the result back to you. Without it, you and the bank have no way to talk to each other.

That's what an **API** is. **API** stands for **Application Programming Interface** -- it's a defined way for two pieces of software to communicate. For our purposes, it's the channel between your app (the client) and some server out there on the internet.

A **web API** specifically is one that works over the internet using the **HTTP** protocol. For example: when you build an app that fetches movie data, your app is the client, the movie database is the server, and the web API is the ATM in between -- the structured interface that makes communication possible.

---

## Overview of HTTP

Just like an ATM has a specific protocol -- insert card, enter PIN, select an action, receive result -- web APIs follow a set of rules that govern how requests and responses are structured. That set of rules is called **HTTP**, which stands for **HyperText Transfer Protocol**. You may have also heard of **HTTPS**, the more secure version (the S stands for Secure).

HTTP defines two things: how **requests** are made, and how **responses** come back.

### HTTP Requests

An HTTP request has a few key components:

- **Method**: What kind of operation you want to perform. The four most common are often called **CRUD operations** (create, read, update, delete):
  - **GET**: Retrieve data from the server.
  - **POST**: Send new data to the server.
  - **PUT**: Update existing data on the server.
  - **DELETE**: Delete data from the server.
- **URL**: Where to send the request and what to ask for. A URL is made up of a protocol (`https`), a domain (`api.example.com`), a path (`/movies`), and optional **query parameters** that refine the request (e.g. `?title=inception&year=2010`).
- **Headers**: Optional metadata sent with the request, like authentication tokens or content format.
- **Body**: Data sent along with the request -- used in POST/PUT requests, not in GET.

Here's a simple example of an HTTP request:
```
GET https://api.example.com/movies?title=inception HTTP/1.1
```

### HTTP Responses

After handling your request, the server sends back a response. The most important part to check is the **status code** -- a 3-digit number indicating whether things went well. Some common ones you'll encounter:

- **200**: OK -- your request worked.
- **403**: Forbidden -- you don't have permission (often means a bad or missing API key).
- **404**: Not Found -- the resource doesn't exist.
- **500**: Internal Server Error -- something went wrong on the server's end.

The response also includes a **body** containing the actual data you asked for, usually formatted as JSON.

---

## JSON

The most common format APIs use to send data back is **JSON** (JavaScript Object Notation). Despite the name, it works with almost every programming language. It's just human-readable text structured as name-value pairs and arrays, similar to a dictionary. Here's an example:

```json
{
    "first_name": "John",
    "last_name": "Smith",
    "is_alive": true,
    "age": 27,
    "address": {
        "street_address": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postal_code": "10021"
    },
    "children": [
        "Catherine",
        "Thomas",
        "Trevor"
    ],
    "spouse": null
}
```

Once this comes back to your app, you can pull out any field you want -- `data.first_name`, `data.age`, etc. -- and use it however you like.

---

## Keeping Your API Key Safe

API keys are essentially passwords. If someone else gets yours, they can make requests on your behalf, exhaust your rate limits, or in some cases rack up charges on paid APIs. The most common way keys get leaked is by accidentally committing them to a public GitHub repository.

**Never hardcode your API key directly in your source code.** Instead, store it in a `.env` file in the root of your project:

```
VITE_API_KEY=your_key_here
```

Then add `.env` to your `.gitignore` so it never gets pushed to GitHub:

```
# .gitignore
.env
```

If you're using Vite (which we will be), any variable prefixed with `VITE_` is accessible in your code via `import.meta.env.VITE_API_KEY` -- no extra setup needed.

We've all accidentally pushed a key at some point -- if it happens, just revoke it from the provider's dashboard and generate a new one.

---

## Demo: Build a Movie Search Engine

We're going to build a React app that lets you search for any movie and see its details, pulled live from the **OMDb API** (the Open Movie Database). We'll make real HTTP requests and display real JSON data.

If you're not familiar with React, check out our React workshop (all workshops [here](https://hoth.uclaacm.com/workshops)) or just follow along to understand the API side of things. All finished code is at the bottom of this README.

### Step 1: Get Your Free OMDb API Key

Go to [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx) and sign up for the free tier (1,000 requests/day). They'll send you an API key by email -- activate it via the link, then keep it handy.

### Step 2: Set Up Your React Project

```sh
npm create vite@latest omdb-demo -- --template react
cd omdb-demo
npm install
npm run dev
```

Open the link that appears in your terminal. Then clean up the starter template: delete the contents of `src/App.jsx`, and delete `src/index.css` along with its import in `src/main.jsx`.

### Step 3: Store Your API Key Safely

In the **root directory** of your project (not inside `src/`), create a `.env` file:

```
VITE_API_KEY=your_key_here
```

And make sure `.env` is in your `.gitignore`:

```
.env
```

### Step 4: Build the App

Open `src/App.jsx`. We'll start by importing `useState` and setting up two state variables -- one for what the user types, and one for the movie result:

```jsx
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState(null);
```

Now write the function that calls the OMDb API. We mark it `async` because network requests take time -- the `await` keyword lets us pause and wait for each step to finish before moving on, without freezing the rest of the app:

```jsx
  const searchMovie = async () => {
    const url = `https://www.omdbapi.com/?t=${query}&apikey=${import.meta.env.VITE_API_KEY}`;

    try {
      const response = await fetch(url);

      if (response.status === 200) {
        const data = await response.json();
        if (data.Response === 'True') {
          setMovie(data);
        } else {
          setMovie(null);
          alert('Movie not found! Try a different title.');
        }
      } else {
        console.error('HTTP error! Status: ' + response.status);
      }
    } catch (error) {
      console.error('Something went wrong:', error);
    }
  };
```

A couple of things to note:
- `fetch(url)` makes the GET request. We `await` it so we don't move on before the response arrives.
- `response.json()` parses the JSON body into a usable JavaScript object. We `await` that too.
- The `try/catch` block handles anything that goes wrong -- a dropped connection, the API being down, etc. Always a good habit with network calls.

Now add the UI -- a search input, a button, and a movie card that appears once we have a result:

```jsx
  return (
    <div>
      <h1>Movie Search</h1>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={searchMovie}>Search</button>
      {movie && (
        <div>
          <h2>{movie.Title} ({movie.Year})</h2>
          <p>Director: {movie.Director}</p>
          <p>Rating: {movie.imdbRating}</p>
          <p>{movie.Plot}</p>
        </div>
      )}
    </div>
  );
}

export default App
```

### Step 5: Try It Out

Save everything and go back to your browser. Search for "Inception", "Parasite", or any movie you love. You should see the title, director, rating, and plot all pulled live from the API.

Check out the full OMDb docs at [https://www.omdbapi.com/](https://www.omdbapi.com/) to see all the other fields and search options available.

---

### Finished Code

#### .env
```
VITE_API_KEY=your_key_here
```

#### .gitignore
```
.env
```

#### src/App.jsx
```jsx
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState(null);

  const searchMovie = async () => {
    const url = `https://www.omdbapi.com/?t=${query}&apikey=${import.meta.env.VITE_API_KEY}`;
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        if (data.Response === 'True') {
          setMovie(data);
        } else {
          setMovie(null);
          alert('Movie not found! Try a different title.');
        }
      } else {
        console.error('HTTP error! Status: ' + response.status);
      }
    } catch (error) {
      console.error('Something went wrong:', error);
    }
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={searchMovie}>Search</button>
      {movie && (
        <div>
          <h2>{movie.Title} ({movie.Year})</h2>
          <p>Director: {movie.Director}</p>
          <p>Rating: {movie.imdbRating}</p>
          <p>{movie.Plot}</p>
        </div>
      )}
    </div>
  );
}

export default App
```

---

## Next Steps

Some APIs worth exploring for your own projects:

- **[OpenWeatherMap](https://openweathermap.org/api)** -- Current weather and forecasts. Free tier is generous and it's one of the most commonly used APIs for beginner projects.
- **[NewsAPI](https://newsapi.org/)** -- Pull in live headlines by topic, source, or keyword. Great for building a personalized news feed.
- **[Google Maps Platform](https://developers.google.com/maps)** -- Maps, location search, directions. Useful for almost any app with a physical component.
- **[Twilio](https://www.twilio.com/)** -- Send real SMS messages and make phone calls from your app. Surprisingly easy to set up.
- **[The Cat API](https://thecatapi.com/)** -- Random cat images and facts. Free, and very important.
- **[Gemini API](https://ai.google.dev/)** -- Add AI-powered text generation to your project. Great for hackathon ideas.

Good luck with your projects!
