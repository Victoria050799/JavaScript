/*Вопрос 1. 
Дан массив. 
Запишите первый элемент этого массива в переменную elem1, 
второй - в переменную elem2, 
третий - в переменную elem3, а все остальные элементы массива - в переменную arr. 


Вопрос 2.
 Дан массив. 
Запишите последний элемент этого массива в переменную elem1, 
а предпоследний - в переменную elem2.

Вопрос 3.
 Дан массив. 
Запишите второй элемент этого массива в переменную elem2. 
Первый элемент никуда записывать не надо.*/

//Ответ к вопросу 1

let fruits = ["Яблоко", "Апельсин", "Груша", "Виноград", "Банан", "Манго"];
const [elem1, elem2, elem3,...arr]= fruits
console.log(elem1, elem2, elem3,...arr)

// Овет к вопросу 2

let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
const [,,,elem2,elem1]=shopping
console.log(elem1, elem2)

// Ответ к вопросу 3

let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
const [, elem2]= myArray
console.log(elem2)


 