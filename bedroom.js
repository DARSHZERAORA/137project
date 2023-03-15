img ="";

function preload(){
img = loadImage ("https://tse3.mm.bing.net/th?id=OIP.kNygXWDQRTL5f8j5o7cO_QHaFb&pid=Api&P=0");    
}

function setup() {
canvas = createCanvas(640, 420);
canvas.center();    
}

function draw() {
image(img, 0, 0, 640, 420);
}