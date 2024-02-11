'use strict';
// Задача 1
let task1 = document.getElementById(`elem1`);
function buttonClick1() {
   task1.innerHTML = `Ку-ку! А я <b>жирный<b/>!`;
};

// Задача 2
let task2 = document.getElementById(`elem2`);
function buttonClick2() {
   task2.outerHTML = `<h3>Абзац превратился в h3!</h3>`;
};

// Задача 3
let task3 = document.getElementById(`elem3`);
function buttonClick3() {
   task3.outerHTML = `<h3>${task3.innerHTML}</h3>`;
};

// Задача 4

function buttonClick4() {
   let sum1 = Number(document.querySelector(`input.sum1`).value);
   let sum2 = Number(document.querySelector(`input.sum2`).value);
   let answer = document.querySelector(`span.answer`);
   answer.innerHTML = sum1+sum2; 
}
// Задача 5

function buttonClick5(){
   let task5 = document.querySelectorAll(`p.a`)
         for (let i=0; i<task5.length; i++){
            task5[i].innerHTML =i-1+1;
            }
   }