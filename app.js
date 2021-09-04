document.getElementById('quoteBtn').addEventListener('click', () => {
    getQuote();
});

const getQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => loadQuote(data));
};

const loadQuote = quote => {
    console.log(quote.quote);
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = quote.quote;
};