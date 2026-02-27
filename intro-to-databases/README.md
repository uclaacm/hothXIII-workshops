# HOTHXIII Intro to Databases

**Date of Workshop:** March 1, 2026


**Teacher:** [Kaelyn Yang](https://github.com/Kaelynsyang)

Hello! Welcome to the Intro to Databases workshop for HOTHXIII. We will go over what databases are, different types, purposes of databases, and CRUD operations. Additionally, you will learn how to set up your own database with MongoDB and use CRUD.

## Resources
- [Slides](https://docs.google.com/presentation/d/1H2r-xmcuVzgbgcm5AJ80XMWF14bbiljHozk_ZpuBycw/edit?usp=sharing)
- [Workshop Recording]()
- [Postman](https://www.postman.com/)
- [MongoDB](https://www.mongodb.com/)

## Overview
- [What is a Database?](#what-is-a-database)
- [Purpose of Databases](#purpose-of-databases)
- [Different types of Databases](#different-types-of-databases)
- [Setting up example with MongoDB](#setting-up-example-with-mongodb)
- [CRUD operations](#crud-operations)
- [Demo with MongoDB](#demo-with-mongodb)

---

## What is a Database?

Data is any information that is raw, which means that it has not been processed or edited yet, you might be familiar with this term if you do photography, with raw images, and then you typically edit the photos. Examples of data include, words, symbols, numbers, audio, or video files.

Databases are these containers to store the data or information in an organized and easily accessible way. 
They can include tables with rows and columns, indexes that allow for easier access to the data and information on how to manage or control the database, which is database management.

---

## Purpose of Databases

- **Storing data you want to reference later**
- **Security**
- Organized
- Efficient
- Scalable
- Fast retrieval
- Consistent
- **Make cool things!**

---

## Different types of Databases

The different types of Databases that we will be focusing on are SQL and noSQL. To be more specific, SQL is a type of relational database, while noSQL is a non-relational database.

Relational has predefined categories, data consistency, accuracy and reliability, and complex queries. 
While on the other hand, non relational databases are great for large data volume, low latency (not much delay), flexible data models, reading and writing data. The similarities is that they both are able to store data, use CRUD operations which we will get into, secure, and use indexes for efficiency.

**SQL (Structured Query Language) Examples:** Banking Systems, University Systems

**noSQL Examples:** Catalog management, Chat Applications, E-commerce or online shopping

---

## Setting up example with MongoDB

Go to [MongoDB](https://www.mongodb.com/) and create an account or sign in if you have one.
Create a new project, add a cluster (allow access from anywhere), and create a database user.

---

## CRUD operations

CRUD stands for:
**C**reate
**R**ead
**U**pdate
**D**elete

### Create (inserting data)

```js
app.get('/findall', async (req, res) => {
    try {
        const students = await StudentModel.find();
        res.send(students);
    } catch (err) {
        console.error("Find all failed:", err);
        res.status(500).send("Error fetching data");
    }
});
```

### Read (Find data)

```js
app.post('/save', async (req, res) => {
    try {
        console.log("Received body:", req.body);

        const newStudent = new StudentModel(req.body);
        const savedStudent = await newStudent.save();

        console.log("Saved:", savedStudent);
        res.send("Data inserted");
    } catch (err) {
        console.error("Save failed:", err);
        res.status(500).send("Error inserting data");
    }
});
```

### Update (modify data)

```js
app.post('/update', async (req, res) => {
    try {
        const updatedStudent = await StudentModel.findByIdAndUpdate(
            req.body.id,
            { Name: req.body.Name },
            { new: true } // returns the updated document
        );

        if (!updatedStudent) {
            return res.status(404).send("Student not found");
        }

        console.log("Data updated!");
        res.send(updatedStudent);
    } catch (err) {
        console.error("Update failed:", err);
        res.status(500).send("Error updating data");
    }
});
```

### Delete (erase data)

```js
app.post('/delete', async (req, res) => {
    try {
        const deletedStudent = await StudentModel.findByIdAndDelete(req.body.id);
        if (!deletedStudent) {
            return res.status(404).send("Student not found");
        }
        console.log("Data Deleted!");
        res.send(deletedStudent);
    } catch (err) {
        console.error("Delete failed:", err);
        res.status(500).send("Error deleting data");
    }
});
```

---

## Demo with MongoDB

### Step 1: Sets up backend directory and initialize it

```sh
mkdir backend
cd backend
npm init -y
npm install express mongoose cors dotenv
```
Create an index.js and .env file as well!

### Step 2: Create a schema

```js
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    StudentId: Number,
    Name: String,
    Roll: Number,
    Birthday: Date
});

module.exports = mongoose.model(
    'student', StudentSchema, 'Students');
```

### Step 3: Create a backend (ex. index.js)

```js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
//const StudentModel = require('./models/studentSchema');
//If you want to test your CRUD operations here, make sure you include the directory to the schema file

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;

mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});
```

You can use CRUD operations with [Postman](https://www.postman.com/) to make sure it works. Postman is a database API testing tool.

---

Thank you and happy hacking!
