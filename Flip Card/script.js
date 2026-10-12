function flipCard() {
    var card = document.getElementById("myCard");
    
    if (card.className === "card-container flipped") {
        card.className = "card-container";
    } else {
        card.className = "card-container flipped";
    }
}
