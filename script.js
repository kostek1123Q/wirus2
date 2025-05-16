// --- Elementy ---
const button = document.getElementById('crazyButton');
const message = document.getElementById('message');
const follower = document.getElementById('follower');
const timerEl = document.getElementById('timer');
const faviconEl = document.getElementById('favicon');

// --- Dźwięki ---
const sounds = [
  new Audio('stracilas-cnote_R1qiG8j.mp3'),
  new Audio('illegal-polish-content.mp3'),
  new Audio('polish-toilet-refrain.mp3'),
  new Audio('szatanie-moja-dupa (1).mp3'),
  new Audio('zamknij-pizde-bo-cie-podpale.mp3'),
  new Audio('metal-pipe-clang.mp3'),
  new Audio('rmf-fm-muzyczka-intro.mp3')
];

// --- Tytuły ---
const titles = [
  "Antek patrzy...",
  "To nie żart.",
  "Jeszcze tu jesteś?",
  "Uciekaj!",
  "Klikniesz znowu?",
  "404: Bez powrotu",
  "Nie ma odwrotu",
  "Antek w twoim systemie",
  "👁️",
  "💀💀💀"
];

// --- Linki do otwierania ---
const links = [
  "https://www.google.com/search?q=czy+antek+jest+grozny",
  "https://youtu.be/Wocq0AQr_hE",
  "https://www.google.com/search?q=czy+antek+jest+grozny",
  "https://youtu.be/Wocq0AQr_hE",
  "https://www.google.com/search?q=czy+antek+jest+grozny",
  "https://youtu.be/Wocq0AQr_hE"
];

// --- Obrazki losowe ---
const images = [
  'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
  'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
  'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif'
];

// --- Alerty kliknięć ---
const clickAlerts = [
  "No serio? Nadal klikasz?",
  "Kliknięcie to zły pomysł!",
  "Antek się nie poddaje!",
  "Jeszcze jedno kliknięcie i...",
  "Za dużo klikasz!"
];

// --- Favicony ---
const favicons = [
  'favicon1.ico',
  'favicon2.ico',
  'favicon3.ico'
];

// --- Zmienne ---
let titleShuffleStarted = false;
let faviconIndex = 0;
let seconds = 0;

// --- Funkcje ---
function startTitleShuffle() {
  setInterval(() => {
    const newTitle = titles[Math.floor(Math.random() * titles.length)];
    document.title = newTitle;
  }, 1500);
}

function openMultipleLinks(count = 4) {
  for (let i = 0; i < count; i++) {
    const randomUrl = links[Math.floor(Math.random() * links.length)];
    window.open(randomUrl, "_blank");
  }
}

function randomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

function spawnRandomImage() {
  const img = document.createElement('img');
  img.src = images[Math.floor(Math.random() * images.length)];
  img.classList.add('random-img');
  img.style.left = Math.random() * (window.innerWidth - 100) + 'px';
  img.style.top = Math.random() * (window.innerHeight - 100) + 'px';
  document.body.appendChild(img);
  setTimeout(() => img.remove(), 5000);
}

function moveButtonRandomly() {
  const maxShift = 20;
  const x = Math.floor(Math.random() * (maxShift * 2 + 1)) - maxShift;
  const y = Math.floor(Math.random() * (maxShift * 2 + 1)) - maxShift;
  button.style.transform = `translate(${x}px, ${y}px)`;
}

// --- Event Listeners ---
// Główny button kliknięcie
button.addEventListener('click', () => {
  // Odtwarzanie losowego dźwięku
  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
  randomSound.currentTime = 0;
  randomSound.play();

  // Losowy tekst
  const texts = [
    "To był błąd...",
    "Dlaczego kliknąłeś?",
    "Teraz już za późno.",
    "Zostałeś oznaczony.",
    "Antek obserwuje."
  ];
  const randomText = texts[Math.floor(Math.random() * texts.length)];
  message.textContent = randomText;

  // Migające tło
  document.body.style.backgroundColor = 'red';
  setTimeout(() => {
    document.body.style.backgroundColor = '#000';
  }, 300);

  // Drganie
  document.body.classList.add('shake');
  setTimeout(() => {
    document.body.classList.remove('shake');
  }, 400);

  // Popupy
  setTimeout(() => {
    alert("Hej! To nie był najlepszy pomysł.");
  }, 500);

  setTimeout(() => {
    const response = confirm("Czy naprawdę myślisz, że to już koniec?");
    if (response) {
      prompt("Podaj swoje imię... Antek chce wiedzieć.");
    } else {
      alert("Antek się zawiódł...");
    }
  }, 1500);

  // Start tytułu shuffle (jeśli nie ruszone)
  if (!titleShuffleStarted) {
    startTitleShuffle();
    titleShuffleStarted = true;
  }

  // Start otwierania linków co 5s
  setInterval(() => {
    openMultipleLinks(4);
  }, 5000);
});

// Kliknięcia na body — alerty
document.body.addEventListener('click', () => {
  const text = clickAlerts[Math.floor(Math.random() * clickAlerts.length)];
  alert(text);
});

// Kursor śledzący myszkę
window.addEventListener('mousemove', e => {
  follower.style.left = e.clientX + 'px';
  follower.style.top = e.clientY + 'px';
});
window.addEventListener('click', () => {
  follower.classList.add('active');
  setTimeout(() => follower.classList.remove('active'), 200);
});

// Losowe przesuwanie przycisku co 3s
setInterval(moveButtonRandomly, 3000);

// Migające kolory co 400ms
setInterval(() => {
  document.body.style.backgroundColor = randomColor();
  document.body.style.color = randomColor();
}, 400);

// Spawning obrazków co 2s
setInterval(spawnRandomImage, 2000);

// Licznik sekund
setInterval(() => {
  seconds++;
  timerEl.textContent = `Czas ucieczki: ${seconds}s`;
}, 1000);

// Zmiana favicon co sekundę
setInterval(() => {
  faviconIndex = (faviconIndex + 1) % favicons.length;
  faviconEl.href = favicons[faviconIndex];
}, 1000);

// --- Utrudnienia wyjścia ze strony ---
// Blokowanie cofania
history.pushState(null, null, location.href);
window.onpopstate = function () {
  history.go(1);
};

// Alert przed zamknięciem/odświeżeniem
window.addEventListener('beforeunload', function (e) {
e.preventDefault();
e.returnValue = '';
});
