let audioCtx, analyser, source;

  function showMessages() {
    const music = document.getElementById('bday-music');
    const canvas = document.getElementById('visualizer');
    music.play();

    // Показываем поздравления
    document.getElementById('messages').classList.remove('hidden');
    
	let fireworkCount = 0;
	let maxFireworks = 10;

	let fireworkInterval = setInterval(() => {
	  launchFirework();
	  fireworkCount++;
	  if (fireworkCount >= maxFireworks) {
		clearInterval(fireworkInterval);
	  }
	}, 1000);
  }

// 🎆 Fireworks
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function launchFirework() {
  for (let i = 0; i < 100; i++) {
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let radius = Math.random() * 2 + 1;
    let color = `hsl(${Math.random() * 360}, 100%, 70%)`;
    let angle = Math.random() * 2 * Math.PI;
    let speed = Math.random() * 5 + 1;

    let dx = Math.cos(angle) * speed;
    let dy = Math.sin(angle) * speed;

    let particle = {x, y, dx, dy, radius, color, life: 100};
    particles.push(particle);
  }
}

let particles = [];

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, index) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
    ctx.fillStyle = p.color;
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;
    p.life--;

    if (p.life <= 0) particles.splice(index, 1);
  });

  requestAnimationFrame(animateFireworks);
}
animateFireworks();

// 💫 Cursor trail
const cursor = document.querySelector('.cursor-trail');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// 🌈 Emoji rain
const emojiContainer = document.querySelector('.emoji-rain');
const emojis = ['🎉', '🔥', '🌟', '💎', '🎶', '👑'];

function dropEmoji() {
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * window.innerWidth + 'px';
  emoji.style.animationDuration = 2 + Math.random() * 3 + 's';
  emojiContainer.appendChild(emoji);

  setTimeout(() => emoji.remove(), 5000);
}
setInterval(dropEmoji, 300);

const greetings = [
  { from: "Doja Cat", msg: "Happy birthdaaaaay! You are my loveliest fan. I wish I was your Woman:)" },
  { from: "Lady Gaga", msg: "Blessings! You were so true fan of mine and I would VIP sing you Abracadabra:D" },
  { from: "The Weeknd", msg: "You are the best! Wish you to whole your life will last as weekends. Love ya." }
];

function loadGreetings() {
  const box = document.getElementById("chat-box");
  greetings.forEach((g, i) => {
    setTimeout(() => {
      const msg = document.createElement("div");
      msg.className = "chat-msg";
      msg.innerText = `${g.from}: ${g.msg}`;
      box.appendChild(msg);
    }, i * 3000);
  });
}

window.onload = loadGreetings;
