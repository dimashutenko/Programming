console.log("\x1b[31m", "Завдання №4");
console.log("\x1b[0m", 'Довести адекватність математичної моделі, задану формулами');
console.log('\n R = sqrt(-2*ln(a1))\n');
console.log('\n f = C*a2\n');
console.log('\n X = R*sin(f)*0.1\n');
console.log(' де Х – випадкова величини з нормальним законом розподілу, що приймає значення у межах 0 ÷ 1.');
 
var C = 2; // коефіцієнт  ----- k->C
var results = {
    'total' : [],
    'X' : []
}; // масив результатів
 
for(var i = 0; i < 20; i++){
    workLinePreview(C); // отримання результату при рандомному значені
}
 
console.table(results); // відображення результатів
 
function workLinePreview(k){
    var X = Math.round(Math.random()) // random() генерує значення від 0 до 1, а round заокруглює в ту чи іншу сторону
    var res = 25 + 3 * Math.pow(k, 2) + X;
    results.total.push(res);
    results.X.push(X);
}
