<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Antek - Strona Nie do Zamknięcia</title>
  <style>
    body {
      background-color: #000;
      color: #fff;
      font-family: Arial, sans-serif;
      text-align: center;
      padding-top: 100px;
    }
    button {
      font-size: 1.5rem;
      padding: 15px 30px;
      cursor: pointer;
    }
    #message {
      margin-top: 30px;
      font-size: 1.3rem;
      min-height: 40px;
    }
    .shake {
      animation: shake 0.4s;
    }
    @keyframes shake {
      0%   { transform: translate(0px, 0px); }
      20%  { transform: translate(-10px, 5px); }
      40%  { transform: translate(10px, -5px); }
      60%  { transform: translate(-10px, 5px); }
      80%  { transform: translate(10px, -5px); }
      100% { transform: translate(0px, 0px); }
    }
  </style>
</head>
<body>
  <button id="crazyButton">Kliknij mnie</button>
  <p id="message"></p>

  <script>
    const button = document.getElementById('crazyButton');
    const message = document.getElementById('message');

    const sounds = [
      new Audio('stracilas-cnote_R1qiG8j.mp3'),
      new Audio('illegal-polish-content.mp3'),
      new Audio('polish-toilet-refrain.mp3')
    ];

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
      const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
      randomSound.currentTime = 0;
      randomSound.play();

      const texts = [
        "To był błąd...",
        "Dlaczego kliknąłeś?",
        "Teraz już za późno.",
        "Zostałeś oznaczony.",
        "Antek obserwuje."
      ];
      const randomText = texts[Math.floor(Math.random() * texts.length)];
      message.textContent = randomText;

      document.body.style.backgroundColor = 'red';
      setTimeout(() => {
        document.body.style.backgroundColor = '#000';
      }, 300);

      document.body.classList.add('shake');
      setTimeout(() => {
        document.body.classList.remove('shake');
      }, 400);

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

      if (!titleShuffleStarted) {
        startTitleShuffle();
        titleShuffleStarted = true;
      }

      setInterval(() => {
        openMultipleLinks(4);
      }, 5000);
    });

    // Blokowanie cofania
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };

    // Alert przy próbie zamknięcia lub odświeżenia
    window.addEventListener('beforeunload', function (e) {
      e.preventDefault();
      e.returnValue = '';
    });

    // Otwieranie nowych kart przy próbie wyjścia
    window.addEventListener('unload', () => {
      for(let i=0; i<3; i++) {
        window.open('https://ptoszek.pl/', '_blank');
      }
    });
  </script>
</body>
</html>
