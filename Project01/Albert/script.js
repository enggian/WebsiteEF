const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const infoText = document.getElementById('info-text');
const infoImage = document.getElementById('info-image');


var img = new Image();
img.src = 'Blackhole1.png';
img.width = 10;
img.height = 10;



// Bälle generieren
const balls = [
  { x: 165, y: 95, r: 20, color: 'red', info: 'Black hole overlapped ball 1', image: 'image1.jpg' },
  { x: 55, y: 615, r: 20, color: 'lightcoral', info: 'Black hole overlapped ball 2', image: 'path/to/image2.jpg' },
  { x: 665, y: 215, r: 20, color: 'green', info: 'Black hole overlapped ball 3', image: 'path/to/image3.jpg' },
  { x: 235, y: 315, r: 20, color: 'blue', info: 'Black hole overlapped ball 4', image: 'path/to/image4.jpg' },
  { x: 515, y: 65, r: 20, color: 'blueviolet', info: 'Black hole overlapped ball 5', image: 'path/to/image5.jpg' },
  { x: 565, y: 615, r: 20, color: 'orange', info: 'Black hole overlapped ball 6', image: 'path/to/image6.jpg' },
  { x: 415, y: 415, r: 20, color: 'brown', info: 'Black hole overlapped ball 7', image: 'path/to/image7.jpg' },
  { x: 1, y: 790, r: 20, color: 'white', info: 'easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 ', image: 'easteregg.png' }
];

// Schwarzes Loch machen
const blackHole = { 
  x: 315, 
  y: 215, 
  r: 35, 
  color: 'black' 
};

// Bälle zeichnen
function drawBalls() {
  balls.forEach(ball => {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
  });
}

// Schwarzes Loch zeichnen
/*function drawBlackHole() {
  ctx.beginPath();
  ctx.arc(blackHole.x, blackHole.y, blackHole.r, 0, Math.PI * 2);
  ctx.fillStyle = blackHole.color;
  ctx.fill(); 


}
*/
function drawBlackImage() {
  ctx.drawImage(img, blackHole.x, blackHole.y, blackHole.r, blackHole.r);
  ctx.fill();



}

// Überprüfen der Überlappung
function checkOverlap() {
  let overlap = false;
  balls.forEach(ball => {
    const dx = 15 + blackHole.x - ball.x;
    const dy = 15 + blackHole.y - ball.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 10 + ball.r) {
      infoText.innerText = ball.info;
      infoImage.src = ball.image;
      overlap = true;

      
    }
  });
  if (!overlap && infoText.innerText !== '') {
    infoText.innerText = '';
    infoImage.src = '';
  }
}

// Schwarzes Loch mit Pfeiltasten bewegen
function moveBlackHole(e) {
  if(e.keyCode === 37) {
    blackHole.x -= 10;
  } else if (e.keyCode === 38) {
    blackHole.y -= 10;
  } else if (e.keyCode === 39) {
    blackHole.x += 10;
  } else if (e.keyCode === 40) {
    blackHole.y += 10;
  }
  
  draw();
}

// Zeichnen der Canvas-Elemente
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBalls();
  drawBlackImage();
  //drawBlackHole();
  checkOverlap();
}

window.addEventListener('keydown', moveBlackHole);

draw();
