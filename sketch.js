function setup(){
createCanvas (windowWidth, windowHeight);
frameRate(50);
background (0);
rectMode(CENTER);

}
function draw(){
background(90, random(30, 130),6 ,5);
fill(255, mouseX, 54);
circle(mouseX + 70, mouseY, mouseX );
fill(150, 200, 3);
rect(mouseX, mouseY,100,100);


}