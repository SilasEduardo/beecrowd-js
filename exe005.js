let nota1 = parseFloat(lines.shift())
let nota2 = parseFloat(lines.shift())



const media = (nota1 * 3.5) + (nota2 * 7.5) / 11


console.log(`MEDIA = ${media.toFixed(1)}`)