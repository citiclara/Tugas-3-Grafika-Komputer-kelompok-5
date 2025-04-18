let angle = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);
  
  // Translasi ke tengah canvas
  translate(width/2, height/2);
  
  // Rotasi
  rotate(angle);
  
  // Gambar persegi
  rectMode(CENTER);
  fill(0, 150, 255);
  rect(0, 0, 100, 100);
  
  // Tambah sudut untuk animasi
  angle += 0.02;
}