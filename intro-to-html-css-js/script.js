const button = document.getElementById('rollButton');

const diceElement = document.getElementById('dice'); //for the animation

let historyList = [];

button.addEventListener('click', () => {
   console.log('Button clicked!'); 

   diceElement.classList.add('rollAnimation');
   
   setTimeout(() => {
        diceElement.classList.remove('rollAnimation');
        rollDice();

   }, 1000);

});


function rollDice() {

   const rollResult = Math.floor(Math.random() * 6) + 1;
   diceElement.textContent = rollResult;
   console.log(rollResult);

   const diceFace = getDiceFace(rollResult);
   console.log(diceFace);
   diceElement.innerHTML = diceFace;

    historyList.push(rollResult);
    updateHistory(rollResult);

}

function getDiceFace(rollResult) {

   switch(rollResult) {
       case 1:
           return '&#9856;';
       case 2:
           return '&#9857;';
       case 3:
           return '&#9858;';
       case 4:
           return '&#9859;';
       case 5:
           return '&#9860;';
       case 6:
           return '&#9861;';
       default :
           return '';
   }

}


function updateHistory(rollResult) {
    const historyElement = document.getElementById('rollHistory');
    historyElement.innerHTML = ''; // Clear previous history    

    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
        historyElement.appendChild(listItem);
    }
}