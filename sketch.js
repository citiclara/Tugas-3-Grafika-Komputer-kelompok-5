// Deklarasi variabel
let circleSize = 50;
let circleColor;

function setup() {
  createCanvas(600, 400); // Membuat kanvas
  circleColor = color(100, 100, 250); // Warna awal
}

function draw() {
  background(240);

  // Mengubah warna saat mouse ditekan
  if (mouseIsPressed) {
    circleColor = color(random(255), random(255), random(255));
  }

  // Menampilkan lingkaran mengikuti mouse
  fill(circleColor);
  noStroke();
  ellipse(mouseX, mouseY, circleSize, circleSize);

  // Petunjuk interaksi
  fill(0);
  textSize(14);
  text("Tekan tombol panah ↑ atau ↓ untuk mengubah ukuran", 10, height - 30);
  text("Klik mouse untuk mengubah warna", 10, height - 10);
}

function keyPressed() {
  // Menambah atau mengurangi ukuran lingkaran
  if (keyCode === UP_ARROW) {
    circleSize += 5;
  } else if (keyCode === DOWN_ARROW) {
    circleSize = max(10, circleSize - 5);
  }
}
