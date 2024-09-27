function setup(){
createCanvas (windowWidth, windowHeight);
frameRate(60);
background (0);
rectMode(CENTER);
noCursor();


}
function draw(){
    background(255, 40,60, 2);
    cursor(CROSS);
    circle(mouseX,0, 80);
    noFill();
    circle(mouseX,725, 80);
    noFill();
    circle(1525,mouseY, 50);
    noFill();
    circle(0,mouseY, 50);
    noFill();

    
    circle(mouseX,mouseY, 100);
    
    circle(mouseX,mouseY, 80);
    circle(mouseX,mouseY, 60);
    circle(mouseX,mouseY, 50);
    circle(mouseX,mouseY, 40);
    circle(mouseX,mouseY, 30);
    rect(mouseX,mouseY,30 ,30);
    
    strokeWeight(10);
    stroke(mouseX,mouseY,random(0,255));
strokeWeight(1);




}