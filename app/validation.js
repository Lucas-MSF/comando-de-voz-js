h1 = document.querySelector('h1');
console.log(secretNumber);
function validateValue(value) {
    const number = +value;

  
    if (Number.isNaN(number) || number < smallerValue || number > largerValue) {
        h1.innerHTML = `Valor inválido: favor falar um número entre ${smallerValue} e ${largerValue}`;
        return `<div class ="icon"><i class="fa-solid fa-x"></i> </div>
            <div>Você disse: </div>
            <span class="box" id="speak-number">${value}</span>`
    }
    if (number > secretNumber) {
        return `
            <div>Você disse: </div>
            <span class="box" id="speak-number">${value}</span>
            <div>Valor maior, tente um numero menor <i class="fa-solid fa-arrow-down"></i> </div>`;
    }
    if (number < secretNumber) {
        return `
            <div>Você disse: </div>
            <span class="box" id="speak-number">${value}</span>
            <div>Valor menor, tente um numero maior <i class="fa-solid fa-arrow-up"></i> </div>`;
    }
    if(number == secretNumber){
        h1.innerHTML = 'PARABENS, VOCÊ ACERTOU O NÚMERO!!!!';
        button.innerHTML = 'Tentar Novamente <i class="fa-solid fa-rotate-right"></i>';
        button.addEventListener('click', function () {
            window.location.reload();
        })

        return `
            <div> <i class="fa-regular fa-face-laugh-beam icon "></i> </div>
            <div>Você disse: </div>
            <span class="box" id="speak-number">${value}</span>`;
    }

}