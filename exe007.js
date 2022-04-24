let id = parseInt(lines.shift())
let hr = parseInt(lines.shift())
let valor = parseFloat(lines.shift())



const salario = hr * valor

console.log(`NUMBER = ${id}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)