var currentNumberInicio = document.getElementById('currentNumber')
var currentNumber = 0

function increment() {
  currentNumber = currentNumber + 1
  currentNumberInicio.innerHTML = currentNumber
  document.getElementById('currentNumber').style.color = 'green'
}

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberInicio.innerHTML = currentNumber
  document.getElementById('currentNumber').style.color = 'red'
}
