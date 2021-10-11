console.log("\x1b[31m", "Завдання №4");
console.log("\x1b[0m", 'Довести адекватність математичної моделі, задану формулами');
console.log('\n R = sqrt(-2*ln(a1))\n');
console.log('\n f = C*a2\n');
console.log('\n X = R*sin(f)*0.1\n');
console.log(' де Х – випадкова величини з нормальним законом розподілу, що приймає значення у межах 0 ÷ 1.');
 
var C = 2; // коефіцієнт 
var results = {
    'R' : [],
    'f' : [],
    'X' : []
}; // масив результатів
 
for(var i = 0; i < 10; i++){
    workLinePreview(C); // отримання результату при рандомному значені
}
 
console.table(results); // відображення результатів
 
function workLinePreview(k){
    var a1 = Math.round(Math.random()); // random() генерує значення від 0 до 1, а round заокруглює в ту чи іншу сторону
    var a2 = Math.round(Math.random());
    var R = Math.sqrt(-2*Math.log(a1));
    results.R.push(R);
    var f = C*a2;
    results.f.push(f);
    var X = R*Math.sin(f)*0.1;
    results.X.push(X);
}
