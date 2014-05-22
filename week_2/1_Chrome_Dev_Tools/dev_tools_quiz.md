#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  * Javascript Debugging
  * Performance Optimization 

* What's the quick key for your OS to spawn the Dev Tools inspector?

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?  How many kilobytes of data can be eliminated?


1. a) The elements tab lets you view the current page's HTML file, select each element in the file, and view the all the CSS selectors that currently affect it. You can also live edit these files on this tab. You can also live edit CSS on the source tab. 

  b) Clicking the link the JS file from within the HTML file brings you to the sources tab, where you can live edit the JS file.

  c) The network tab shows the loading time, file size, and type by file name. This helps visualize which fiels are taking the longest to load. 

2. alt+command+i

3. original background color: #0b0f11; I'm having some trouble changing the hover color. For some reason all of the other changes happen live, but when I add {color: black} to a:hover, it does not turn black upon hover. 

4. This picture is loaded from a .gif file. We cannot edit this because it it not html, css, or js. 

5. The largest image is 92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png, which does not even show up upon loading. 
It is hosted at http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png
It is 316kb.
You find this by going to the network tab and sorting the files by size. 

6.






