//image slideshow

var img1 = new Image()
img1.src="images/re0.jpg"
var img2 = new Image()
img2.src="images/amnesia-2.jpg"
var img3 = new Image()
img3.src="images/fatalframe2.jpg"
var img4 = new Image()
img4.src="images/FEAR.png"
var img5 = new Image()
img5.src="images/ff3.jpg"
var img6 = new Image()
img6.src="images/cocthulhu.jpg"
var img7 = new Image()
img7.src="images/sh2.jpg"

var pic=1
function slides()
{
	if(!document.images)
		return;
		
	document.images.slide.src=eval("img"+pic+".src");
	setTimeout("slides()", 3000);	//time between each image miliseconds
	
	if(pic < 7)	//number of images in slideshow
		pic++;
	else
		pic = 1;

}


//clear textarea

function clearText()
{
	document.getElementById("text").value = "";
}



//check valid input

function validateForm()
{
	//name
	var x = document.forms["myForm"]["firstname"].value;
	if (x == null || x == "")
	{
		alert("First name must be filled out");
		return false;
	}
	
	//email
	var y = document.forms["myForm"]["email"].value;
	var at = y.indexOf("@");
	var dot = y.lastIndexOf(".");
	if (at < 1 || dot < at+2 || dot+2 >= y.length)
    {
		alert("Not a valid e-mail address");
		return false;
    }
}