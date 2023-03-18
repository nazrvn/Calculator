// création d'une div avec une class 'calculator'.
const new_calculator = document.createElement("div");
new_calculator.classList.add('calculator');

// création d'une div avec une class 'result'.
const new_result = document.createElement("div");
new_result.classList.add('result');

// création d'une div avec une class 'history'.
const new_history = document.createElement("div");
new_history.classList.add('history');
    
    // création d'une balise p avec un id 'history-value'
    const p_history = document.createElement("p");
    p_history.id = 'history-value';
    
    new_history.appendChild(p_history);

// création d'une div avec une class 'output'.
// ceci va contenire les valeurs de sortie de nos calcules. (afficher le resultat)
const new_output = document.createElement("div");
new_output.classList.add('output');

    // création d'une balise p avec un id 'output-value'
    const p_output = document.createElement("p");
    p_output.id = 'output-value';

    new_output.appendChild(p_output);

// création d'une balise div avec une class 'keyboard'
// ceci va contenire nos bouttons d'entrées
const new_keyboard = document.createElement("div");
new_keyboard.classList.add('keyboard');

const clear = document.createElement('button');
    clear.classList.add('operator');
    clear.id = 'clear';
    clear.innerText="C";
const backspace = document.createElement('button');
    backspace.classList.add('operator');
    backspace.id = 'backspace';
    backspace.innerText="CE";
const modulo = document.createElement('button');
    modulo.classList.add('operator');
    modulo.id = '%';
    modulo.innerText="%";
const diviser = document.createElement('button');
    diviser.classList.add('operator');
    diviser.id = 'diviser';
    diviser.innerText="/";

const seven = document.createElement('button');
    seven.classList.add('number');
    seven.id = '7';
    seven.innerText="7";
const height = document.createElement('button');
    height.classList.add('number');
    height.id = '8';
    height.innerText="8";
const nine = document.createElement('button');
    nine.classList.add('number');
    nine.id = '9';
    nine.innerText="9";
const multiplication = document.createElement('button');
    multiplication.classList.add('operator');
    multiplication.id = '*';
    multiplication.innerText="*";

const four = document.createElement('button');
    four.classList.add('number');
    four.id = '4';
    four.innerText="4";
const five = document.createElement('button');
    five.classList.add('number');
    five.id = '5';
    five.innerText="5";
const four = document.createElement('button');
    four.classList.add('number');
    four.id = '4';
    four.innerText="4";
const multiplication = document.createElement('button');
    multiplication.classList.add('operator');
    multiplication.id = '*';
    multiplication.innerText="*";

// ici on ajoutes des enfants aux parents (on imbrique nos divs)
const container = document.querySelector(".container");
container.appendChild(new_calculator);

new_calculator.appendChild(new_result);
new_result.appendChild(new_history);
new_result.appendChild(new_output);
new_calculator.appendChild(new_keyboard);

new_keyboard.appendChild(clear);
new_keyboard.appendChild(backspace);
new_keyboard.appendChild(modulo);
new_keyboard.appendChild(diviser);

new_keyboard.appendChild(seven);
new_keyboard.appendChild(height);
new_keyboard.appendChild(nine);
new_keyboard.appendChild(multiplication);




