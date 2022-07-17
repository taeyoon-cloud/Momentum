const quotes = [
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      quote: "So many books, so little time.",
      author: "Frank Zappa",
    },
    {
      quote:
        "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      quote: "To Travel is to Live.",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "A friend is someone who knows all about you and still loves you.",
      author: "Elbert Hubbard",
    },
    {
      quote: "Never go on trips with anyone you do not love.",
      author: "Hemmingway",
    },
    {
      quote: "Without music, life would be a mistake.",
      author: "Friedrich Nietzsche",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = `- ${todaysQuote.author} -`;