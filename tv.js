img ="";

function preload(){
img = loadImage ("https://tse4.mm.bing.net/th?id=OIP.sGNyrp81KzfxWes6k6oXxgHaE8&pid=Api&P=0");    
}

function setup() {
canvas = createCanvas(640, 420);
canvas.center();    
}

function draw() {
image(img, 0, 0, 640, 420);
}