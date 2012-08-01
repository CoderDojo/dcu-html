007 HTML Table the Irish Flag HTML Course @ CoderDojo DCU
===================================


Aim
---------
This week we are going to look at tables in HTML, these allow us to put information
on our website in tabular format 

This week we covered the following areas:

* Margin versus Padding in CSS.
* Introduced the marquee by making the h1 move.
* Got marquee to get two images bouncing around our page.

So lets get started,

Margin versus Padding in CSS.
------------------------------
We started with showing the difference between padding and margin.  These are two
CSS properties used for spacing in your website.  The key point is
* Padding will impact the inside of the tag
* Margin will change the spacing out side the tag

To illustrate this we started by using the div around the image tag we 
worked on in week 4.  

````html
<div class="mainImage">
				<img src="coder.png" class="imageStyle"><img>
			</div> 
````

We now updated the CSS for class mainImage by adding padding and a
border.

````css
div.mainImage {
	border: 2px solid black;
	width: 200px;
	padding: 50px;
}
````

After adding the border and padding, we now see a gap between the border
and image of 50px.  This highlights how padding impacts the inside the 
div tag.

Now add the a margin to our div and see what happens

````css
div.mainImage {
	border: 2px solid black;
	width: 200px;
	padding: 10px;
	margin: 20px;
}
````

Remember that the margin should impact outside the tag, so we expect
their to be space placed outside the border.  Did the div move? If you cant
see it, then increase the value from 20px to 100px.  In setting the margin 20px
you should see the div now moves in from the left hand side.  This will 
put a margin of 20px around the outside of the div tag.

Introducing the marquee tag
------------------------------
The marquee tag moves the tags inside the `<marquee> </marquee>`.  To 
get started with this we adding the marquee tag to our heading.  

````html
		<marquee>
			<h1>Coder Dojo @ DCU</h1>
		</marquee>
````

Ok tell us what this did to your header?

How about you change the direction of the marquee

````html
				<table class="linksTable">	
					<tr>
						<td class="leftColumn">Group A</td>
						<td class="middleColumn"></td>
						<td class="rightColumn">Group C</td>
					</tr>
									
					<tr>
						<td class="leftColumn">Ukraine</td>
						<td class="middleColumn"></td>
						<td class="rightColumn">Croatia</td>
					</tr>
					<tr>
						<td  class="leftColumn">Poland</td>
						<td></td>
						<td class="rightColumn">Greece</td>
					</tr>
				</table>		
````



