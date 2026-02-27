# HOTHXIII Intro to HTML, CSS, JavaScript

**Date of Workshop:** Februaru 25, 2026

**Teacher:** Soumya Kalle

**Description:**
Hi! This workshop introduces the basics of front-end web development with HTML/CSS/JS. Learn how to use these tools with a small demo called Dice Roll Simulator.

- [Slides](https://docs.google.com/presentation/d/11eWqxtoThupIx8Iu_ExZH1K58fXAIvqaZc_oRIP6d9U/edit?usp=sharing)
- [Workshop Recording](https://drive.google.com/file/d/1JhmP0f4j78mCIR90n1I2DL3FcHw0ipwx/view?usp=sharing)

---
### Set Up
1. Install both [VSCode]([url](https://code.visualstudio.com/)) and [Chrome]([url](https://www.google.com/chrome/))
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

There are 3 ways to style your HTML file with CSS
1. **Inline**: Add styles directly to HTML elements (limited use).
2. **Internal**: Put styles inside the HTML file in a <style> tag.
3. **External**: Create a separate CSS file (.css) and link it to your HTML.



  





