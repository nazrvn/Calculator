// création d'une div avec une class 'container'.
const new_container = document.createElement("div");
new_container.classList.add('container');

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
    p_history.id('history-value');
        new_history.appendChild(p_history);

// création d'une div avec une class 'output'.
const new_output = document.createElement("div");
new_output.classList.add('output');

