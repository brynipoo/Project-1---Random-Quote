// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
const quotes = [
{ quote: "And in the morning, I'm making waffles!", source: "Donkey",
citation: "Shrek", year: 2001, tag: "Movie quote"},
{ quote: "Yayyy! I'm a llama again!! Oh wait...", source: "Kuzco",
citation: "The Emperor's New Groove", year: 2000, tag: "Movie quote"},
{ quote: "Help me I'm poor!", source: "Kristen Wiig",
citation: "Bridesmaids", year: 2011, tag: "Movie quote"},
{ quote: "It's an avocado!!! Thaaaankkkss!", source: "Vine", tag: "Internet culture" },
{ quote: "Road work ahead?! Well yeah I sure hope it does!", source: "Vine", tag: "Internet culture" },
{ quote:"Butter is my favorite food!", source:"Andy Dwyer",
citation: "Parks and Recreation, Season 5 Episode 19", year: 2012, tag: "Television quote" }
]

// Create the getRandomQuote function and name it getRandomQuote
const getRandomQuote = (array) => {
let randomQuote = array[Math.floor(Math.random() * quotes.length)];
return randomQuote;
}

// Checking to make sure the random quote function works properly
console.log(getRandomQuote(quotes));

// Create the printQuote funtion and name it printQuote
const printQuote = () => {
let randomQuote = getRandomQuote(quotes);
let stringOfQuoteProperties;
stringOfQuoteProperties = "<p class='quote'>" + randomQuote.quote + "</p>";
stringOfQuoteProperties += "<p class='source'>" + randomQuote.source;

//Determining if the object contains a citation or year and adding that html if it does
if (randomQuote.citation) {
  stringOfQuoteProperties += "<span class='citation'>" + randomQuote.citation + "</span>";
}
if (randomQuote.year) {
  stringOfQuoteProperties += "<span class='year'>" + randomQuote.year + "</span>"
}
stringOfQuoteProperties += "<h3>" + randomQuote.tag + "</h3>"
/* Adding the final html paragraph syntax - as it's not included in the earlier parts of the string, so that if a quote
does or does not have a citation or year, it will still be formatted in the same div.
*/
stringOfQuoteProperties += "</p>"

document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
//Attributing the random color function inside the print quote function
document.getElementById('quote-box').style.background = getRandomColor();
}

// Function to get a random background color
const getRandomColor = () => {
const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);
const randomColor = "rgb(" + red + "," + green + "," + blue + ")"
console.log(randomColor);

document.body.style.background = randomColor;
}

getRandomColor();

//Automatically changes the quote every 20 seconds
setInterval(printQuote, 20000);


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
