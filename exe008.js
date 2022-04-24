let name = lines.shift()
let salario = parseFloat(lines.shift())
let valorVendas = parseFloat(lines.shift())



const comicao = valorVendas * 0.15
const salarioAtual = salario + comicao



console.log(`TOTAL = R$ ${salarioAtual.toFixed(2)}`)