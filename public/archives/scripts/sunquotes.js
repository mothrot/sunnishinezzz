
        const quotes = [
    "The site used to be named Freakysunshine, you can still access to it in the wayback machine!",
    "There used to ba altenative layouts.. but it didn't work",
    "There used to be a secret page... i deleted it",
    "Did you know the Plantern in pvz used to be just a lightbulb in the concept art?",
    "There is zombies in your lawn.",
    "Am I the only who used to believe in those -official Plants vs Zomies movie!!- videos?",
    "there is a wechat version of pvz",
    "Genya x Senjuro is canon because I SAY SO",
    "PvZ annyversary is on May 5th!",
    "My birthday is on december 3rd",
    "I used to play Pvz Adventures on my dad's facebook account. I hated the Aspearagus.",
    "If you like Transformers you should check out my gf's twt and tiktok! @maxkartt_ ",
    "Ma Chérie, are you missing me?",
    "Some scrapped names for PvZ were: Doom & Bloom, Zom-Botany, Weedz and Grave-Yard",
    "Doors are watching me",
    "Pulling your gyatt to the rizzler",
    "diddy ah blud mango 67",
    "William J. Afton gives me nightmares",
    "i like sunflowers but i lowkey prefer roses",
    "Psss you should listen to Los Prisioneros",
    "CON SUAVIDAAAAAAAAAAAAAD",
    "the rat thing you can sometimes see in the site is my fursona :) i just call it the rat",
    "60's aesthetic kinda goes hard",
    "I see him in my dreams.",
    "I got into fandom culture when I was 10 or something :)",
    "Estoy llorando y no haces nada...",
];

const quoteDisplay = document.getElementById("quote-display");
const SunQuote = document.getElementById("sunflower");
const clickSound = document.getElementById("sun-sound");

let lastQuote = "";

function displayRandomQuote() {
    let randomQuote;
    do {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        randomQuote = quotes[randomIndex];
    } while (randomQuote === lastQuote);


    clickSound.currentTime = 0;
    clickSound.play();

    lastQuote = randomQuote;
    quoteDisplay.innerText = randomQuote;
}

SunQuote.addEventListener("click", displayRandomQuote);
