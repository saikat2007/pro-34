//Create variables here
var dog , dogImg , happydogImg , database ,foods , foodstock;

function preload()
{
  //load images here
  dogImg=loadImage("image/dogImg.png");
  happydogImg=loadImage("image/happydogImg.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  foodstock=database.ref("food");
  foodstock.on("value",readStock);

  dog = createSprite(250,350,10,60);
  dog.addImage(dogImg)
  dog.scale = 0.2;

}


function draw() {  
  background("green");
  textSize(20);
  fill(255)


if(keyWentdown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(dogImg);

}

if(food === 0){
  foods = 20;



}

  drawSprites();
  //add styles here

}



