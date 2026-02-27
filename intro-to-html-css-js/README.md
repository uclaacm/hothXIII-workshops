# HOTHXIII Intro to HTML, CSS, JavaScript

**Date of Workshop:** Februaru 25, 2026

**Teacher:** Soumya Kalle

**Description:**
Hi! This workshop introduces the basics of front-end web development with HTML/CSS/JS. Learn how to use these tools with a small demo called Dice Roll Simulator.

- [Slides](https://docs.google.com/presentation/d/11eWqxtoThupIx8Iu_ExZH1K58fXAIvqaZc_oRIP6d9U/edit?usp=sharing)
- [Workshop Recording](https://drive.google.com/file/d/1JhmP0f4j78mCIR90n1I2DL3FcHw0ipwx/view?usp=sharing)

---
### Set Up
1. Install both [VSCode]((https://code.visualstudio.com/)) and [Chrome]((https://www.google.com/chrome/))
---
### HTML 
HTML (Hypertext Markup Language) defines the basic structure of a website. HTML is like the skeleton for your site. Using **tags**, you can explicitly define what type of text or icons are displayed. For example, using a button tag, you can display a button. 

**Tags** explicitly define what type of text is on screen. 
Example: 
```html
<p>
```

Tags have a starting tag ( <[tag name]> ) and a closing tag ( </[tag name]> ). 
Example: 
```html
<p> This is a paragraph :) </p>
```
Together, the content and tags create an **element**.

### Tags to Know
```html
<h1>This is a header<h1>

<p>This is a paragraph</p>

<img src="[path to image]" alt="[text to display]"/>

<a href="[link]">[text to display]</a>

<div></div>
```

### Attributes

**Attributes** provide extra information about the content in an element. Attributes are created within the starting tag as follows:
```html
<p [Attribute name]=”[Attribute value]”>
```
Example:
```html
<p class="editor-note">My cat is very grumpy</p>
```
Here, the attribute **class** is especially helpful. The class attribute is one of the attributes we can refer to in a CSS file to access all elements of that class in the HTML file. 

### Attributes to Know

* **src**: Specifies the source URL for media or script files
* **href**: Specifies the URL for a hyperlink
* **alt**: Provides alternative text for an image
* **placeholder**: Specifies a short hint for the input field
  
The following are very important attributes:
* **id**: Specifies a unique identifier for an element
* **class**: Specifies one or more class names for an element

### Creating an HTML File

1. Create a folder anywhere on your machine
2. Open VSCode -> open file -> click on [*title of your folder*]
3. Create a new file and name it **index.html**
4. Copy and paste the following lines:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Visible content goes here -->
    <h1>Hello, World!</h1>
    <p>This is a basic HTML page.</p>
</body>
</html>

```
5. Open the folder on your machine -> open index.html
6. Chrome will open up with your site!
7. 
---
### CSS 
CSS (Cascading Style Sheets) stylizes your HTML file by changing the colors, font, sizes, and more! This is like adding the skin and clothes to your website.

There are 3 ways to style your HTML file with CSS
1. **Inline**: Add styles directly to HTML elements (limited use).
2. **Internal**: Put styles inside the HTML file in a <style> tag.
3. **External**: Create a separate CSS file (.css) and link it to your HTML.

**Inline**
```html
<!-- HTML File -->
...
<body>
    <h1 style ="color: green;">This text is green.</p>
</body>
...
</html>
```
**Internal**
```html
<!-- HTML File -->
...
<body>
    <style>
        h1 {
            color: green;
        }
    </style>
</body>
</html>

```

**External**
```html
<!-- HTML File -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
<!-- Import CSS File named style.css Here -->
    <link rel="stylesheet" href="style.css" />
...
</head>
...
</html>
```
```html
<!-- CSS File -->
h1 {
    color: green;
}

```

In the above examples, we referred to the h1 element and changed the **property** of color to green.

### Properties to Know

* font-family
* font-size
* font-weight
* color
* background-color
* text-align
* border
* border-radius
* border-color
* box-shadow
* display
* flex
* margin
* padding

### Class vs ID Attribute

#### Class
Attribute for multiple elements. All elements labeled under one class will be modified.
```html
<!-- .html -->
<body>
    <h1 class="center">Unaffected</h1>
    <p class="center">Red and centered</p>
    <p class="center large">Large, red, & center</p> 
</body>
```
```html
<!-- .css -->
<style>
    p.center {
        text-align: center;
        color: red;
    }
    p.large {
      font-size: 300%;
    }
</style>
```
[Click here](https://www.w3schools.com/css/tryit.asp?filename=trycss_syntax_element_class2) to see the effect.

#### ID
Unique attribute for the element. Thus, in the CSS file, only this specific element will be modified.
```html
<!-- .html -->
<body>
    <p id="para1">Hello World!</p>
    <p>This paragraph is not affected by the style.</p>
</body>

```
```html
<!-- .css -->
<style>
    #para1 {
      text-align: center;
      color: red;
    }
</style>
```
[Click here](https://www.w3schools.com/css/tryit.asp?filename=trycss_syntax_id) to see the effect.

### Creating a Linked CSS File
1. Make sure you are in the same project as earlier, with the index.html
2. Create a new file named **style.css**
3. Go back to the index.html file and paste the following under the title tag:
```html
<link rel="stylesheet" href="style.css" />
```
---
### JS
JS (JavaScript) makes your website interactive and dynamic! This is like adding the brain to your website.

### Syntax

#### Literals
**Literals** are fixed values: e.g.,
* 10
* 100.8373
* "HOTH is cool!"

#### Variables
**Variables** are values that can be changed. There are two variable **keywords**: ```const``` and ```let```.
```html
let x = 5;
const name = “Tonka”;
const lastName = “Jahari”;
let fullName = name + “ “ + lastName;
```
```const``` means that this variable CANNOT be later changed. On the otherhand, any ```let``` variable CAN be later changed.

#### Conditionals
**Conditional** statements like ```if-else``` statements or ```switch``` statements check whether a certain condition is true and executes the appropriate statements. 

```
if (condition 1) {
	...
} else if (condition 2) {
	...
} else {
	...
}
```

```
switch (value) {
  case 1:
      ...
      break;
  case 2:
      ...
      break;
  default:
      ...
}
```

#### Loops
**Loops** like ```for``` loops or ```while``` repeat certain statements until a condition is met.

```
for (initialize i; i < condition; update i {
	...
}
```

```
initialize i;
while (i < condition) {
	...
  update i 
}
```
#### Functions
**Functions** are generalized code blocks that can be called multiple times within your code to perform the same function. For example, if you are writing a complex math program, you might call a *simplify* function many times to simplify your equations by canceling and reducing. 

In JavaScript, to define a function, you use the **keyword** ```function``` followed by the function's name, then an opening curly bracket, then the statements to execute, and finally a closing curly bracket.

```
function name {
	...
}
```

#### Objects
**Objects** are *containers* that have *properties* and are accessed (and/or modified) via *methods*.
Example:

	Object: 						car
	Properties (key.value): 		car.model, car.name, car.color
	Methods (key.function): 		car.start(), car.stop(), car.brake()
To access the properties or methods, we use **“dot-notation”**

#### DOM
**DOM** (Document Object Model) is used to access different elements in the document from different files. For example, in our JS file, we can access specific elements by their ID and modify them. This makes our site more dynamic.

We can use DOM to  access elements of HTML:

	const button = document.getElementByID(ID)
	
We can use DOM to create or change elements of HTML:

	document.getElementById("ID").innerHTML = “New Text”;

#### Events
**Events** listen for a trigger and then perform some action. 




### Creating a Linked JS File
1. Make sure you are in the same project as earlier, with the index.html
2. Create a new file named **script.js**
3. Go back to the index.html file and paste the following under **all the HTML content you want to load before JS content** (probably right before the closing body tag):
```html
<script src="script.js" />
```









  





