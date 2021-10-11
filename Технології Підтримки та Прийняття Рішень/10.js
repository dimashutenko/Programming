console.log("\x1b[31m", "Завдання №10");
console.log("\x1b[0m", 'Параметрична надмірність, що визначає точність роботи нововведеного виробництва подана таблицею');
 
var inputs = {
    'T' : [3.1, 3.01, 3.0, 3.2, 3.02, 3.09, 3.15, 3.01, 3.3, 3.05], 
    'deviation' : []
}; // масив inputs

console.table(inputs);

console.log('За експериментальними даними сформуйте рішення про допустимі межі зміни точності виробництва,');
console.log('якщо ідеальне її значення складає Т = 3.');
 
function calculate_deviation(k){
    var deviation = inputs.T[k] - 3;
    inputs.deviation.push(deviation.toFixed(2));
}

for(var i = 0; i < inputs.T.length; i++){
    calculate_deviation(i); 
}
 
console.table(inputs);

console.log("Допустимі межі зміни точності виробництва: 0-"+Math.max(...inputs.deviation));