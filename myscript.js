var arrayofQuotes = [


    {
        "author": "Jim Rohn",
        "quote": "Beware of what you become in pursuit of what you what you what you want."
    },
    {
        "author": "Epictetus",
        "quote": "It's not what happens to you, but how you react to it that matters."
    },
    {
        "author": "Frank Sinatra",
        "quote": "The best revenge is massive success."
    },
    {
        "author": "Mayne Gretzy",
        "quote": "You miss 100% of the shots you don't take."
    },
    {
        "author": "Nelson Mandela",
        "quote": "Resentment is like drinking poison and waiting for your enemies to die."
    },
    {
        "author": "Confucius",
        "quote": "Silence is a true friend who never betrays."
    },
    {
        "author": "Elbert Hubbard",
        "quote": "Donot take life too seriously. You will not get alive."
    },
    {
        "author": "Lyndon B. Johnson",
        "quote": "Yesterday is not ours to recover, but tomorrow is ours to win or lose."
    },
    {
        "author": "Mensrik Ibsen",
        "quote": "A thousand words can not leave the same deep impression at a single deed."
    },
    {
        "author": "Katherine Peasrson",
        "quote": "A draw without a plan is nothing more than a wish."
    },
    {
        "author":"Salvador Dali",
        "quote":Intelligence without ambition is a bird without wings."
    }

]

function randomSelector(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

function generateQuote() {
    var randomNumber = randomSelector(arrayofQuotes.length);

    document.getElementById("quoteOutput").innerHTML = '"' + arrayofQuotes[randomNumber].quote + '"';

    document.getElementById("authorOutput").innerHTML = "-" + arrayofQuotes[randomNumber].author;

}
