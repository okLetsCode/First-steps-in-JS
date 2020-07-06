function solve() {

    const keys = Array.from(document.getElementsByClassName('keys'));
    const expressionOuput = document.getElementById('expressionOutput');
    const result = document.getElementById('resultOutput');
    const clearButton = document.querySelector("#calculator > div.top > button");

    let operand;
    let firstNumber = '';
    let secondNumber = '';

    const calculator = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }

    keys.map(key => key.addEventListener('click', function (evt){
        const currentSelection = evt.target.value;

        clearButton.addEventListener('click', ()=>{
            expressionOuput.textContent = '';
            firstNumber = '';
            secondNumber = '';
            result.textContent = '';
            operand = '';
        })

        if(Number(currentSelection) || currentSelection == "." || currentSelection == '0'){
           
            if(!operand){
               firstNumber += currentSelection;
               expressionOuput.textContent += currentSelection; 
            }else{
                secondNumber += currentSelection;
                expressionOuput.textContent += currentSelection;
            }

        }else if(calculator.hasOwnProperty(currentSelection)){
            operand = currentSelection;
            expressionOuput.textContent += `${operand}`;
        }else if (currentSelection == '='){

            if(+firstNumber && +secondNumber){
                result.textContent = calculator[operand](+firstNumber, +secondNumber)
            }else{
                result.textContent = 'NaN';
            }
        }

    }))

}