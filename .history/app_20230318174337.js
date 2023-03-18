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
const six = document.createElement('button');
    six.classList.add('number');
    six.id = '6';
    six.innerText="6";
const minus = document.createElement('button');
    minus.classList.add('operator');
    minus.id = '-';
    minus.innerText="-";

const one = document.createElement('button');
    one.classList.add('number');
    one.id = '1';
    one.innerText="1";
const two = document.createElement('button');
    two.classList.add('number');
    two.id = '2';
    two.innerText="2";
const three = document.createElement('button');
    three.classList.add('number');
    three.id = '3';
    three.innerText="3";
const plus = document.createElement('button');
    plus.classList.add('operator');
    plus.id = '+';
    plus.innerText="+";
const empty1 = document.createElement('button');
    empty1.classList.add('empty');
    empty1.id = 'empty1';
    empty1.innerText=" ";
const zero = document.createElement('button');
    zero.classList.add('number');
    zero.id = '0';
    zero.innerText="0";
const empty2 = document.createElement('button');
    empty2.classList.add('empty');
    empty2.id = 'empty2';
    empty2.innerText=" ";
const egal = document.createElement('button');
    egal.classList.add('operator');
    egal.id = '-';
    egal.innerText="-";


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

new_keyboard.appendChild(four);
new_keyboard.appendChild(five);
new_keyboard.appendChild(six);
new_keyboard.appendChild(minus);

new_keyboard.appendChild(one);
new_keyboard.appendChild(two);
new_keyboard.appendChild(three);
new_keyboard.appendChild(plus);

new_keyboard.appendChild(empty1);
new_keyboard.appendChild(zero);
new_keyboard.appendChild(empty2);
new_keyboard.appendChild(egal);




