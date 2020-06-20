// IMPORTACIONES
import { Sum, Resta, Multplica, Divide } from './models';
import { parseInputs, clearArea, renderSumView, getInputNumA, getInputNumB } from './views';

document.querySelector("#sumar").addEventListener(("click"), () => {
    event.preventDefault()
    clearArea()
    const numA = parseInputs(getInputNumA)
    const numB = parseInputs(getInputNumA)

    const resultado = Sum(numA, numB)

    return renderSumView(resultado)
})

document.querySelector("#restar").addEventListener(("click"), () => {
    event.preventDefault()
    clearArea()
    const numA = parseInputs(getInputNumA)
    const numB = parseInputs(getInputNumB)
    const resultado = Resta(numA, numB)
    return renderSumView(resultado)

})

document.querySelector("#multiplicar").addEventListener(("click"), () => {
    event.preventDefault();
    const numA = parseInputs(getInputNumA)
    const numB = parseInputs(getInputNumB)
    const resultado = Multplica(numA, numB)
    return renderSumView(resultado)
})

document.querySelector("#dividir").addEventListener(("click"), () => {

    event.preventDefault();
    const numA = parseInputs(getInputNumA)
    const numB = parseInputs(getInputNumB)
    const resultado = Divide(numA, numB)
    return renderSumView(resultado)
})