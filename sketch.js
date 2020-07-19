
var mr, fr,bs;


function setup() {
  createCanvas(800,400);
  fr=createSprite(300, 200, 50, 50);
  fr.shapeColor="red";
  mr= createSprite(300,200,50,50);
  mr.shapeColor="red";
  bs= createSprite(500,200,50,50);
  bs.shapeColor="red";

}

function draw() {
  background(0);
  
  mr.x= mouseX;
  mr.y= mouseY;
  bs.velocityX=-5;

  if(mr.x-fr.x<mr.width/2+fr.width/2 && fr.x-mr.x< mr.width/2+fr.width/2 && mr.y-fr.y<mr.height/2+fr.height/2 && fr.y-mr.y< mr.height/2+ fr.height/2){

    mr.shapeColor="blue";
    fr.shapeColor="blue";

  }
  else{

    mr.shapeColor="red";
    fr.shapeColor="red";
  }
  
  if(bs.x-fr.x<bs.width/2+fr.width/2 && fr.x-bs.x< bs.width/2+fr.width/2){
   
    bs.velocityX=bs.velocityX*(-1);
    fr.velocityX=fr.velocityX*(-1);
  }

 

  drawSprites();
}