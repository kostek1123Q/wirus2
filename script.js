const button = document.getElementById('crazyButton');
const message = document.getElementById('message');

// Dźwięk
const sound = [
  new Audio('stracilas-cnote_R1qiG8j.mp3'),
  new Audio('illegal-polish-content.mp3'),
  new Audio('')
  ];

button.addEventListener('click', () => {
  // Odtwórz dźwięk
  sound.play();

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
});
