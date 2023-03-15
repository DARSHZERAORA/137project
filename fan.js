img ="";

function preload(){
img = loadImage ("https://tse3.mm.bing.net/th?id=OIP.kZYl4242IC884bebBoiV4QHaHa&pid=Api&P=0");    
}

function setup() {
canvas = createCanvas(640, 420);
canvas.center();    
}

function draw() {
image(img, 0, 0, 640, 420);
}