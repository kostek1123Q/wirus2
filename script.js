const button = document.getElementById('crazyButton');
const message = document.getElementById('message');

const sounds = [
  new Audio('stracilas-cnote_R1qiG8j.mp3'),
  new Audio('illegal-polish-content.mp3'),
  new Audio('polish-toilet-refrain.mp3'),
  new Audio('szatanie-moja-dupa (1).mp3'),
  new Audio('metal-pipe-clang.mp3'),
  new Audio('metal-pipe-clang.mp3'),
  new Audio('zamknij-pizde-bo-cie-podpale.mp3')
];

const images = [
  'obrazek1.gif', 'obrazek2.gif', 'obrazek3.gif', 'obrazek4.gif'
];

const favicons = [
  'favicon1.ico', 'favicon2.ico', 'favicon3.ico'
];

const texts = [
  "To był błąd...",
  "Dlaczego kliknąłeś?",
  "Teraz już za późno.",
  "Zostałeś oznaczony.",
  "Antek obserwuje.",
  "Czas się kończy...",
  "Przygotuj się na reset.",
  "Twoja przeglądarka nie przeżyje tego.",
  "Nie jesteś już sam.",
];

const titles = [
  "🟥 Antek nadchodzi...",
  "🔊 Uciekaj póki możesz!",
  "⚠️ Groźne ostrzeżenie",
  "💀 System zagrożony",
  "👁️ To był błąd",
  "🧠 Wgrywanie myśli...",
  "😈 Twój koniec",
];

function playRandomSounds() {
  sounds.forEach(s => {
    s.currentTime = 0;
    s.play().catch(() => {});
  });
}

function openTabs() {
  const urls = [
    'https://example.com',
    'https://niebezpiecznik.pl',
    'https://antyweb.pl',
    'https://x.com'
  ];
  urls.forEach(url => window.open(url, '_blank'));
}

function shakeScreen() {
  document.body.classList.add('shake');
  setTimeout(() => document.body.classList.remove('shake'), 500);
}

function changeFavicon() {
  const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
  link.rel = 'icon';
  link.href = favicons[Math.floor(Math.random() * favicons.length)];
  document.head.appendChild(link);
}

function changeTitle() {
  document.title = titles[Math.floor(Math.random() * titles.length)];
}

function flashScreen() {
  const flash = document.createElement('div');
  flash.style.position = 'fixed';
  flash.style.top = '0';
  flash.style.left = '0';
  flash.style.width = '100%';
  flash.style.height = '100%';
  flash.style.backgroundColor = '#fff';
  flash.style.opacity = '0.8';
  flash.style.zIndex = '999999';
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 100);
}

function randomPopup() {
  const types = ['alert', 'confirm', 'prompt'];
  const choice = types[Math.floor(Math.random() * types.length)];
  switch (choice) {
    case 'alert':
      alert("👁 Antek widzi wszystko...");
      break;
    case 'confirm':
      confirm("Czy boisz się?");
      break;
    case 'prompt':
      prompt("Jakie było Twoje ostatnie słowo?");
      break;
  }
}

function spawnRandomImage() {
  const img = document.createElement('img');
  img.src = images[Math.floor(Math.random() * images.length)];
  img.classList.add('random-img');
  img.style.position = 'absolute';
  img.style.left = Math.random() * (window.innerWidth - 200) + 'px';
  img.style.top = Math.random() * (window.innerHeight - 200) + 'px';
  img.style.width = (80 + Math.random() * 200) + 'px';
  img.style.zIndex = '9999';
  document.body.appendChild(img);
  setTimeout(() => img.remove(), 8000);
}

function scrambleText() {
  const all = document.querySelectorAll("p, h1, h2, h3, span, button");
  all.forEach(el => {
    if (Math.random() < 0.3) {
      el.textContent = "🕳️ Antek przejął " + el.tagName;
    }
  });
}

function blockInteraction() {
  const blocker = document.createElement('div');
  blocker.style.position = 'fixed';
  blocker.style.top = '0';
  blocker.style.left = '0';
  blocker.style.width = '100%';
  blocker.style.height = '100%';
  blocker.style.zIndex = '100000';
  blocker.style.cursor = 'not-allowed';
  blocker.style.background = 'rgba(0,0,0,0.3)';
  document.body.appendChild(blocker);
  setTimeout(() => blocker.remove(), 5000);
}

const cursors = [
  "default", "crosshair", "wait", "progress",
  "url('https://cur.cursors-4u.net/symbols/sym-6/sym535.cur'), auto"
];

// Flagi i intervaly, by nie uruchamiać wielokrotnie
let antekActive = false;
let intervals = [];

// Funkcja otwierająca latające okienka z animowanymi ptaszkami
function openFlyingWindows() {
  const birdHTML = `
    <html><head><title>Ptaszek</title>
    <style>
      body { margin:0; background: transparent; overflow: hidden; }
      #bird {
        position: absolute;
        width: 50px; height: 50px;
        background: url('https://i.imgur.com/8RKXAIV.png') no-repeat center/contain;
        top: 0; left: 0;
      }
    </style>
    </head><body>
    <div id="bird"></div>
    <script>
      let bird = document.getElementById('bird');
      let posX = 0;
      let direction = 1;
      const speed = 2 + Math.random() * 3;
      const maxX = window.innerWidth - 50;

      function animate() {
        posX += direction * speed;
        if(posX > maxX) direction = -1;
        if(posX < 0) direction = 1;
        bird.style.left = posX + 'px';
        requestAnimationFrame(animate);
      }
      animate();
    <\/script>
    </body></html>
  `;

  for(let i=0; i<5; i++) {
    const left = Math.floor(Math.random() * (screen.width - 160));
    const top = Math.floor(Math.random() * (screen.height - 160));
    const win = window.open('', `ptaszek${i}`, `width=150,height=150,left=${left},top=${top},toolbar=0,scrollbars=0,resizable=0`);
    if(win) {
      win.document.write(birdHTML);
      win.document.close();
    }
  }
}

button.addEventListener('click', () => {
  if (antekActive) return;
  antekActive = true;

  playRandomSounds();
  shakeScreen();

  const randomText = texts[Math.floor(Math.random() * texts.length)];
  message.textContent = randomText;

  document.body.style.backgroundColor = 'red';
  setTimeout(() => document.body.style.backgroundColor = '#000', 300);

  alert("Hej! To nie był najlepszy pomysł.");

  setTimeout(() => {
    const response = confirm("Czy naprawdę myślisz, że to już koniec?");
    if (response) {
      prompt("Podaj swoje imię... Antek chce wiedzieć.");
    } else {
      alert("Antek się zawiódł...");
    }
  }, 1500);

  if (document.fullscreenEnabled && !document.fullscreenElement) {
    document.body.requestFullscreen().catch(() => {});
  }

  intervals.push(setInterval(changeFavicon, 2000));
  intervals.push(setInterval(changeTitle, 1500));
  intervals.push(setInterval(flashScreen, 7000));
  intervals.push(setInterval(randomPopup, 3000 + Math.random() * 3000));
  intervals.push(setInterval(spawnRandomImage, 3000));
  intervals.push(setInterval(scrambleText, 6000));
  intervals.push(setInterval(blockInteraction, 15000));
  intervals.push(setInterval(() => {
    document.body.style.cursor = cursors[Math.floor(Math.random() * cursors.length)];
  }, 10000));

  intervals.push(setInterval(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, 500));

  intervals.push(setInterval(openTabs, 5000));

  openFlyingWindows(); // uruchamiamy latające okienka
});
