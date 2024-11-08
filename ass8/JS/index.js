var quotes = [
  "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans.",
  "The journey of a thousand miles begins with one step.",
  "Don't watch the clock; do what it does. Keep going.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Believe you can and you're halfway there.",
  "It does not matter how slowly you go as long as you do not stop.",
];

var quote = [
  "-- Steve Jobs",
  "-- John Lennon",
  "-- Lao Tzu",
  "-- Sam Levenson",
  "-- Albert Schweitzer",
  "-- Theodore Roosevelt",
  "-- Confucius",
];

var quoteDisplay = document.getElementById("quoteDisplay");
var quotedisplay = document.getElementById("quotedisplay");

var lastIndex = -1;

document.getElementById("quoteBtn").addEventListener("click", () => {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex);

  lastIndex = randomIndex;

  quoteDisplay.textContent = quotes[randomIndex];
  quotedisplay.textContent = quote[randomIndex];
});
