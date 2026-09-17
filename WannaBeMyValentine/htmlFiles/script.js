  const noBtn = document.getElementById('no');
  const yesBtn = document.getElementById('yes');
  const subtitle = document.getElementById('subtitle');
  const buttons = document.getElementById('buttons');
  const result = document.getElementById('result');

  const excuses = [
      "Nö, so einfach kommst du nicht davon 😏",
      "Fast erwischt!",
      "Der Nein-Button ist heute etwas schüchtern...",
      "Er hat einfach keinen Bock auf 'Nein'.",
      "Netter Versuch 💨",
      "Man kann's ja mal probieren, was?",
      "Der Button hat Vertrauensprobleme mit deiner Maus.",
      "Sorry, 'Nein' ist gerade nicht erreichbar.",
      "Dieser Button glaubt an bessere Antworten.",
      "Kleiner Tipp: der Ja-Button rennt nicht weg 👀",
      "Er trainiert gerade für den Beziehungs-Marathon.",
      "Nein sagen? In dieser Beziehung? Niemals.",
      "Hartnäckig, das gefällt mir.",
      "Der Button hat sich rechtlich beraten lassen.",
      "Noch ein Versuch und er wechselt die Stadt.",
      "Klick doch einfach 'Ja', spart uns beiden Zeit 😄",
      "Er läuft schneller als deine Geduld reicht.",
      "Diese Antwort ist aktuell ausverkauft."
  ];
  let tries = 0;

  function moveNoButton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const margin = 20;

    const maxX = window.innerWidth - btnWidth - margin;
    const maxY = window.innerHeight - btnHeight - margin;

    const newX = Math.random() * (maxX - margin) + margin;
    const newY = Math.random() * (maxY - margin) + margin;

    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';

    tries++;
    subtitle.textContent = excuses[Math.min(tries - 1, excuses.length - 1)];
  }

  // Erste Position setzen, damit "position: fixed" von Anfang an einen Wert hat
  window.addEventListener('load', () => {
    const rect = noBtn.getBoundingClientRect();
    noBtn.style.left = rect.left + 'px';
    noBtn.style.top = rect.top + 'px';
  });

  noBtn.addEventListener('mouseenter', moveNoButton);
  noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
  });

  yesBtn.addEventListener('click', () => {
    buttons.classList.add('hide');
    result.classList.add('show');
  });

  // Schwebende Herzen im Hintergrund
  const heartsContainer = document.getElementById('hearts');
  const heartCount = 18;
  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = ['💗', '💕', '💖'][Math.floor(Math.random() * 3)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (8 + Math.random() * 10) + 's';
    heart.style.animationDelay = (Math.random() * 10) + 's';
    heart.style.fontSize = (1 + Math.random() * 1.4) + 'rem';
    heartsContainer.appendChild(heart);
  }