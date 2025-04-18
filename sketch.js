function setup() {
  createCanvas(600, 400);
  background(240);
}

function draw() {
  // Atur warna isi
  fill(255, 0, 0);
  // Atur warna garis
  stroke(0);
  // Atur ketebalan garis
  strokeWeight(2);
  
  // Gambar lingkaran
  ellipse(100, 100, 80, 80);
  
  // Ganti warna isi
  fill(0, 255, 0);
  // Gambar persegi
  rect(200, 60, 80, 80);
  
  // Ganti warna isi
  fill(0, 0, 255);
  // Gambar segitiga
  triangle(350, 60, 380, 140, 320, 140);
  
  // Atur tidak ada warna isi
  noFill();
  // Gambar kurva
  bezier(450, 80, 490, 10, 510, 160, 550, 80);
}