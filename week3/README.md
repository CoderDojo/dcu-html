Week 3 HTML Course @ CoderDojo DCU
===================================

Date
---------
12 / May / 2012

Aim
---------
This week we are targeting the following areas

* Download __Filezilla client__ from http://filezilla-project.org/
* Start the page again, lets see if you understand what we have done
* Watch out with Internet Explorer (Its the worse browser for web developers)
* Add class styles to your webpage
* Create an center div
* Put the new website online 

Start to build your webpage again
---------------------------------
Remember how you start your website

* Go to your current folder and create a new folder
called week 3
* In the week 3 folder create a new file
* index.html
* style.css
* Add an image you want to use
* Now create your website, make it cool as it will
be online later

Tags
* html
* head
* body

* Add the same css link as before
* Add a header
* Add an image
* Add a paragraph with text
* Color the background

Internet explorer work around
------------------------------
Can you add this on top of your page above the HTML tag, this
is not compulsory, but will help us get over some internet explorer
pain.

`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"/>`

Add class styles to your webpage
---------------------------------
We have see before how we match tag names to css styles by using the
tag name so the `<h1> </h1>` in html mapped to `h1 {` in css for styling.

Sometimes you need greater flexibility than this and want to style just
one element.  To do this you can use a class in css.  To do this add
the class property inside you html tag so its now
`<div class="mainDiv"></div>`.  In the css you are now going to add a dot
after the html tag name with the class value.  So its now
`div.mainDiv {`

Create an center div
---------------------
Websites look cooler with centre panel, most website have one.  You
can clearly see this on (www.rte.ie) the main panel is centred.  To 
add your centre panel create a `<div> </div>` inside you body tag.

````html
<body> 
	<div class="mainDiv">
	
	</div>
</body>`

Now add the CSS to style.css file 

`div.mainDiv {`
`margin-left: auto;`
`margin-right: auto;`
`}`

To upload files
----------------
* Put the following into the host field dojo.hallamor.org
* Press enter
* Open the folders uploads > dcu > 
* Create a folder your last name and first initial no spaces
* Navigate to your files on filezilla left hand side
* Insure you are at uploads > dcu > your last name and first initial folder
* Right click on your file and select upload

Open your first website online
-------------------------------
Navigate to
http://dojo.hallamor.org/eden/dcu/kingn
Replace kingn with your last name and first initial

Congratulations