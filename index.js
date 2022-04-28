var inputId = document.getElementById('inputId');
var inputColor = document.getElementById('inputColor')

function setCard() {
    var card = document.getElementById(inputId.value);
    card.style.color = inputColor.value
    console.log(card)
}
