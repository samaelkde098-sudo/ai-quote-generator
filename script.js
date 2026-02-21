async function getQuote() {
    try {
        const response = await fetch("https://zenquotes.io/api/random");
        const data = await response.json();

        const quote = data[0].q;
        const author = data[0].a;

        document.getElementById("quote").innerText = `"${quote}"`;
        document.getElementById("author").innerText = `- ${author}`;

    } catch (error) {
        document.getElementById("quote").innerText = "Failed to fetch quote.";
    }
}

function copyQuote() {
    const quoteText = document.getElementById("quote").innerText;
    navigator.clipboard.writeText(quoteText);
    alert("Copied to clipboard!");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}