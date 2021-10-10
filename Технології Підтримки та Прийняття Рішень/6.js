console.log("\x1b[31m", "Завдання №6");
console.log("\x1b[0m", 'Розробити програму моделі роботи технологічної лінії, яка описується рівнянням');
console.log('\n F(k) = (25 + 3k^2) + X\n');
console.log(' де Х – випадкова величини з рівномірним законом розподілу, що приймає значення у межах 0 ÷ 1. Продемонструвати працездатність програми.');
 
var k = 2; // коефіцієнт роботи лінії, можна вибрати свій
var results = {
    'total' : [],
    'X' : []
}; // масив результатів
 
for(var i = 0; i < 20; i++){
    workLinePreview(k); // отримання результату роботи лінії при рандомному значені
}
 
console.table(results); // відображення результатів
 
function workLinePreview(k){
    var X = Math.round(Math.random()) // random() генерує значення від 0 до 1, а round заокруглює в ту чи іншу сторону
    var res = 25 + 3 * Math.pow(k, 2) + X;
    results.total.push(res);
    results.X.push(X);
}
