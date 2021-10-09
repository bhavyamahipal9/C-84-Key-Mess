// Create a reference for the canvas
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var img_image = " ";

img_width = 300;
img_height = 100;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
if((keyPressed >=97 && keyPressed<=122) || (keyPressed >=65 && keyPressed<=90)){
    //write a code to check the type of key pressed
    alphabetkey();
    document.getElementById("d1").innerHTML = "You pressed Alphabet Key";
    console.log("alphabetkey");
}

if(keyPressed >=48 && keyPressed<=57){
	numberkey();
	document.getElementById("d1").innerHTML = "You pressed Number Key";
	console.log("numberkey");
}
if(keyPressed >=37 && keyPressed<=40){
	arrowkey();
	document.getElementById("d1").innerHTML = "You pressed Arrow Key";
	console.log("arrowkey");
    }

	
	if((keyPressed == 17) || (keyPressed == 18) || (keyPressed == 27)){
		specialkey();
		document.getElementById("d1").innerHTML = "You pressed Special Key";
		console.log("specialkey");
	}

	if((keyPressed < 17) || (keyPressed > 18 && keyPressed < 27) || (keyPressed > 27 && keyPressed < 37) || (keyPressed > 40 && keyPressed < 48) || (keyPressed > 90 && keyPressed < 97) || (keyPressed > 57 && keyPressed < 65) || (keyPressed > 122)) {
		otherkey();
		document.getElementById("d1").innerHTML = "You Pressed other key";
		console.log("otherkey");
	}

function alphabetkey()
{
	//upload respective image with the message.
	img_image="Alpkey.png";
	add();

}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}

function otherkey()
{
	img_image="otherkey.png";
	add();
}

function add(){
	canvas.img_height.upload(img_image);
}

function add() {
img_imgTag = new Image ;
img_imgTag.onload = uploadimg;
img_imgTag.src = img_image;
}

function uploadimg() {
ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
 } 
	
}