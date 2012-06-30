010 Intro to Animation - HTML Course @ CoderDojo DCU
===================================

I hope everyone enjoyed this week, this is the start of our adventure
to HTML games.

Date
---------
30 / June / 2012

Aim
---------

This week its all about animation, this will provide us with the basics
we need to build really cool HTML Games.  To start with animation we 
need to expand our minds to a new language called JavaScript.

All webpages you use are built using one of three languages and you have already
learnt two of them HTML and CSS. 
* HTML is the language for displaying content on the Internet.
* CSS is the language we used to style our HTML

JavaScript
-----
JavaScript is a language that will allow us to add movement and excitment
to our webpage.

This week the aims are:
* To animate an image, that will grow on click

To do this we will need to
* Create a new page with image on it
* Create a new JavaScript file
* Create your first function
* Link your function to the image
* Create a variable
* Resize the image

This week are we are introducing two new concepts that live at the core
of every language.  These principles are
* Functions
* Variables
So keep an eye out for these and we will see more from them over our next
few weeks.

Create a new page with image on it
----
To get started its your turn
* Create a new folder
* Add an new webpage called index.html
* Add a stylesheet and background to the webpage
* Add a image to your webpage - say the coderdojo logo
* Make sure your image has an id

Ok maybe its time to see if you are right
````html
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="style.css" />
	</head>
	<body>
		<img src="coder.png" id ="logo"/>
	</body>
</html>
````

Create a new JavaScript file
----
Now you will need to create a new file for your JavaScript code.  JavaScript
files are stored in .js files.  So lets get started create a new blank file in your
current folder called animation.js

Create your first function
----
Functions are acivities that do one only.  Think of a game every time you press a key
it causes an activity which is handled by the function.

A function has the following rules
* starts with the word function
* then the function name (you can put what ever name you want, no spaces through)
* now put the open and close brackets ()
* add the open backet for your function {
* close your function with }

````function
function sizeImage() {

}
````

