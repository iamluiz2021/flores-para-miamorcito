// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { "text": "You are my church, you are my place of worship", "time": 5 },
  { "text": "I heard you're the plug, can I be the circuit?", "time": 9 },
  { "text": "When I got court, I hope that you're the verdict", "time": 13 },
  { "text": "When you're around, my insides turn inverted", "time": 17 },
  { "text": "My blood starts to rush when I see you, darling", "time": 22 },
  { "text": "I know you're nearby and I know your purpose", "time": 26 },
  { "text": "Take one look at you, your heaven's incarnate", "time": 30 },
  { "text": "What is this spell, baby? Please show some mercy", "time": 34 },
  { "text": "Melting like an ice cream when you smile", "time": 39 },
  { "text": "Melting, you're a daydream, stay a while", "time": 43 },
  { "text": "I pray that I can learn to be funny", "time": 48 },
  { "text": "I'm watching every stand-up comedy", "time": 52 },
  { "text": "Just hoping that it will rub off on me", "time": 56 },
  { "text": "So you'll smile at everything I say", "time": 60 },
  { "text": "You got some soft lips and some pearly whites", "time": 65 },
  { "text": "I wanna touch them in the dead of night", "time": 69 },
  { "text": "Your smile ignites just like a candlelight", "time": 73 },
  { "text": "Then somehow, I know everything's alright", "time": 77 },
  { "text": "Melting like an ice cream when you smile", "time": 82 },
  { "text": "Melting, you're a daydream, stay a while", "time": 86 }
  { text: "TE AMO ALEXANDRA.", time: 90},
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
