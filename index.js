
const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
// Get amount of collumns we can use from the width
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

// Set background to black
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function matrix () {
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);
  
  // Green text with terminal-like text
  ctx.fillStyle = '#00b07c';
  ctx.font = '15pt digital-7';
  
  // Add the text
  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

// setInterval(matrix, 50);

