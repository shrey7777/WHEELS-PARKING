var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var car_width =100;
var car_height=170;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
var car_x= 35;
var car_y = 50;

function add() {
	background_imagetag=new Image();
    background_imagetag.onload=uploadBackground;
    background_imagetag.src=background_image;

    greencar_imagetag=new Image()
    greencar_imagetag.onload=uploadgreencar;
    greencar_imagetag.src=greencar_image;
	document.getElementById("audio").play();
}


function uploadBackground() {
	ctx.drawImage( background_imagetag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage( greencar_imagetag,car_x,car_y,car_width,car_height);
	

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
			}
		
		
}

function up()
{
	
	if(car_y>=0 ){
		car_y=car_y-10;
		uploadBackground();
		uploadgreencar();
	}    	
}

function down()
{if(car_y<=500 ){
    car_y=car_y+10;
	uploadBackground();
    uploadgreencar();
    }  
	
}

function left()
{
	if(car_x>=0 ){
		car_x=car_x-10;
		uploadBackground();
		uploadgreencar();
		} 
	
}

function right()
{
	if(car_x<=700 ){
		car_x=car_x+10;
		uploadBackground();
		uploadgreencar();
		} 
	
}
