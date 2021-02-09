//Create variables here
var saddog, happyDog, database, foodS, foodStock;
var dog;
function preload()
{
  saddog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,10,10);
  dog.addImage(saddog);
  dog.scale=0.3;

  database=firebase.database();

  foodStock=database.ref('Food');
  foodStock.on('value',(data)=>{
    foodS=data.val();
  })
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
 fill("blue");
 text("Remaining Food : "+foodS,250,50);

}
function writeStock(milk){
  milk--;
  database.ref('/').update({
    Food:milk
  })
}



