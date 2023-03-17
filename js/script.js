const myElements = document.querySelector('.elements');
const myArray = ['mela', 'pera', 'banana', 'arancia', 'mandarino'];
console.log(myArray);
// inizializzo la variabile di contatore
let i = 0;
let hoarder = '';
let counter = 0;


const newProduct = document.getElementById('new-product');
const add = document.getElementById('add');
add.addEventListener('click', function(){
    myArray.push(newProduct.value);
    console.log(newProduct.value);
})

while (i < (myArray.length)){
    hoarder += 
    `<tr>
        <td class="product">${myArray[i]}</td>
        <td class="quantity">6</td>
    </tr>`;
    i++;
}
myElements.innerHTML = hoarder;