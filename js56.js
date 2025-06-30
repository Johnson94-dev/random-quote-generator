let data = [];
let front = true;

const textEls = document.querySelectorAll('.text');
const authorEls = document.querySelectorAll('.author');
const boxFront = document.querySelector('.text');
const boxBack = document.querySelector('.text');

async function loadQuotes() {
  try {
    const res = await fetch("https://type.fit/api/quotes");
    data = await res.json();
    displayQuote();
  } catch (err) {
    textEls[0].innerText = "Oops! Could not load quotes.";
  }
}

function displayQuote() {
  const index = Math.floor(Math.random() * data.length);
  const quote = data[index].text;
  const author = data[index].author || "Anonymous";

  textEls[front ? 0 : 0].innerText = quote;
  authorEls[front ? 0 : 0].innerText = "— " + author;

  front = !front;
}

function newQuote() {
  displayQuote();
}

loadQuotes();