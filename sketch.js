function setup(){
createCanvas (windowWidth, windowHeight);
frameRate(300);
background (0);
rectMode(CENTER);

}
function draw(){
    background(90, random(30, 80),90 ,10);

circle(mouseX,mouseY, 50);
noStroke();
fill(random(10, 255), random(20,255), random(32,56,211));






}