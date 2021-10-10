const calculatorScreen = document.querySelector('.calculator-screen') //mendeklarasikan bahwa pengerjaan program ini untuk layar yang tertampil pada kalkulator

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")//merekan jejak inputan angka yang dilakukan
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen (currentNumber)
    })
})

let prevNumber =''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber ==='0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => { 
        inputOperator (event.target.value)   
    })
})

const inputOperator = (operator) => {//mengkaitkan antara angka sebelum dan sesudah yang dimana dua 
    if (calculationOperator ==='') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign') //mendeklarasikan kalkulasi yang menyatakan sama dengan atau inputan yang akan menampilkan hasil

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => { //merupakan fungsi kalkulasi atau perhitungan  berdasarkan yang di input oleh user
    let  result = ''
    switch(calculationOperator) {
        case "+" :
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-" :
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*" :
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/" :
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

const clearAll = () => {
    prevNumber =''
    calculationOperator = ''
    currentNumber = '0'
} //pada bagian ini memberi program bahwa menampilkan angka 0 saat belum menginput apa pun pada kalkulatornya

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => { //fungsi pemrograman untuk bisa menginput bilangan desimal
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
