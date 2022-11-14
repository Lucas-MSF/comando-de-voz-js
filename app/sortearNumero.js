const smallerValue = 1;
const largerValue = 1000;
const secretNumber = randomNumberGenerate();

function randomNumberGenerate() {
    return parseInt(Math.floor(Math.random() * (largerValue - smallerValue) + smallerValue));
}

const smallerValueElement = document.getElementById('menor-valor');
smallerValueElement.innerHTML = smallerValue;

const largerValueElement = document.getElementById('maior-valor');
largerValueElement.innerHTML = largerValue;
