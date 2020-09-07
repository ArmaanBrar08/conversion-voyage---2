var background;
var gameState = 0;
var form;
var click = 0;

function preload(){
  backgroundIMG = loadImage("Images/Ocean.jpg");
  thomasIMG = loadImage("Images/Thomas.png");
  mrsmithIMG = loadImage("Images/MrSmith.png");
  anchorIMG = loadImage("Images/Anchor.png");
  foodIMG = loadImage("Images/Food.jpg");
  waterIMG = loadImage("Images/Water.png");
  shipIMG = loadImage("Images/Ship.png");
  johnIMG = loadImage("Images/John.png");

  speachBubble1 = loadImage("SpeachBubbles/wigflip-ds.png");
  speachBubble2 = loadImage("SpeachBubbles/speachbubble2.png");
  speachBubble3 = loadImage("SpeachBubbles/speachBubble.png");
}

function setup(){
  createCanvas(displayWidth, displayHeight)
  thomas = createSprite(displayWidth - 750, displayHeight - 200, 20, 20);
  thomas.addImage(thomasIMG);
  thomas.scale = 0.5
  mrSmith = createSprite(displayWidth - 900, displayHeight - 250, 20, 20);
  mrSmith.addImage(mrsmithIMG);
  mrSmith.scale = 0.4;
  john = createSprite(displayWidth - 1050, displayHeight - 250, 20, 20);
  john.addImage(johnIMG);
  john.scale = 0.6;

  speachBubble = createSprite(displayWidth/2, displayHeight/2, 20, 20);
  speachBubble.addImage(speachBubble1);



  form = new Form();


}

function draw(){
  if(gameState === 0){
    form.displayPlayButton();
  }

  if(gameState === 1){
    background(backgroundIMG);
    drawSprites();
    image(shipIMG, displayWidth - 1250, displayHeight - 500, 700, 550 );
    form.displayNextButton();
    
  }
  if (gameState === 2){
    clear();
    background(backgroundIMG);
    drawSprites();
    imageMode(CENTER);
    image(shipIMG, 0, displayHeight - 300, 500, 350 );
    speachBubble.destroy();
    thomas.destroy();
    mrSmith.destroy();
    john.scale = 0.2;
    john.x = 200;
    john.y = displayHeight - 320;

  }

}