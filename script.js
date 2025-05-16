const button = document.getElementById('crazyButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  const texts = [
    "To był błąd...",
    "Dlaczego kliknąłeś?",
    "Teraz już za późno.",
    "Zostałeś oznaczony.",
    "Antek obserwuje."
  ];
  const randomText = texts[Math.floor(Math.random() * texts.length)];
  message.textContent = randomText;

  // Efekt migającego tła
  document.body.style.backgroundColor = 'red';
  setTimeout(() => {
    document.body.style.backgroundColor = '#000';
  }, 300);
});
