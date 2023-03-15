const myContainer = document.querySelector('.container');
const myArray = ['mela', 'pera', 'banana', 'arancia', 'mandarino'];
console.log(myArray);
// inizializzo la variabile di contatore
let i = 0;
let hoarder = '';
while (i < (myArray.length)){
    hoarder += `<li class="item">${myArray[i]}</li>`
    i++;
}
myContainer.innerHTML = hoarder;