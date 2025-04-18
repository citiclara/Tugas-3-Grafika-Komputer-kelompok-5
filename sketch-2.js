function setup() {
    createCanvas(600, 400);
    background(240);
  }
  
  function draw() {
    // Jangan panggil background() untuk mempertahankan jejak gambar
    
    // Warna berdasarkan posisi mouse
    let r = map(mouseX, 0, width, 0, 255);
    let g = map(mouseY, 0, height, 0, 255);
    let b = 150;
    
    // Ukuran berdasarkan kecepatan mouse
    let size = dist(mouseX, mouseY, pmouseX, pmouseY);
    size = constrain(size, 2, 20);
    
    // Gambar lingkaran pada posisi mouse
    noStroke();
    fill(r, g, b, 150);
    ellipse(mouseX, mouseY, size, size);
  }
  
  function mousePressed() {
    // Hapus canvas ketika mouse ditekan
    background(240);
  }