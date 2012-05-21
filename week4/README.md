Week 4 HTML Course @ CoderDojo DCU
===================================

Date
---------
19 / May / 2012

Aim
---------
This week we covered the following areas

* Put div around image
* Css the image and div to resize the image
* Add some padding inside this div
* Put border on the image and show difference between margin and padding
* Explained the three ways to add a CSS to your HTML

So lets get started,

Where do we write our CSS code?
------------------------------
We always write the CSS code in our css file style.css
`<link rel="stylesheet" type="text/css" href="style.css" />`

Create an image inside a div
------------------------------
We started with creating a new image `<img src=""></img>`.  You put
your image inside the `src=""`, the important thing to note is that this 
image must be in the same folder. 

File types also caused some problems especially with windows machines
that hide them.
* PNG images save as .png
* GIFF images save as .gif
* JPEG images save as .jpg
Just remember to put the file type at end of file name then you should be good.

Ok now that you have added the image tag lets add the div and style them.

````html
<div class="mainImage">
	<img src="coder.png" class="imageStyle"><img>
</div> 
````
As you can see we have styled the tags using the class property.  We will 
discuss this further later.  Now style this with a border and width in pixels.

If this is your first time using a border style then the values after the : are
* Width
* Type of border (solid, dashed)
* Color
So feel free change this values as you wish.

````css
div.mainImage {
	border: 2px solid black;
	width: 300px;
}
````

Css the image and div to resize the image
------------------------------------------

Its now time to style the image, set the width to 100%.  Do you know
what the 100% is calculated off?

Ok go back to your HTML and tell me what tag its inside.

````css
img.imageStyle {
	width: 100%;
}
````

Your right the 100% is calculated off the size of the div tag.  If the
div is 300px then the image is 300px.  

Go change the size of the div in the CSS and see what happens to your image.

Add some padding inside this div
---------------------------------

Padding is a very important feature when you are looking to position or 
moved HTML tags.  We learnt that padding impacts the positioning inside
the tag.  You can see this by adding the following style to your mainImage
in the css

````css
div.mainImage {
	border: 2px solid black;
	width: 300px;
	padding: 10px;
}
````

You will now see there is a space between the image and border.  This is 
what padding does.

Explained the three ways to add a CSS to your HTML
==================================================

Style the tag
-------------

We started with styling the tag such as `<h1></h1>` to add this style
to the CSS.

````css
h1 {
	font-size: 10px;
	color: red;
}
````

Here we took the tag name h1 and put it directly into the css `h1 { }` 
and put the brackets around it and added the CSS properties and values inside
this.  Here we set
* The font size to be 10px
* Color to red

If you style by the tag, then every tag with this name will have the style
you set.  Its very important to remember here that this styling every
h1 tag you use in your HTML.

Style the tag id (use the #)
----------------------------

We started with styling the tag div with an id `<div id="container"></div>` to add this style
to the CSS.

````css
div#container {
	margin-left: auto;
	margin-right: auto;
	width: 960px;
	background-color: white;
}
````

Here we took the tag name div put a # and then the id value you added into the css `div#container { }` 
and put the brackets around it.

This will only style this element, you style by #id when you want
to style and individual tag on your HTML page.  The container div
is our centre div, there will only be one of them on a page so the 
id styling is the correct decision here.


Style the tag and a class
----------------------------

This is by most common way of adding styling to your CSS tags.  This allows
you to add styling to multiple tags.  To add a class to your tag put the class
property inside your tag.  `<div class="mainImage"></div>` 

````css
div.mainImage {
	border: 2px solid black;
	width: 300px;
	padding: 10px;
}
````

Here we took the tag name div, a dot and then the class value you added into the css `div.mainImage { }` 
and put the brackets around it.

This will style every div tag with the class mainImage.  This is best way
to reuse CSS styles.