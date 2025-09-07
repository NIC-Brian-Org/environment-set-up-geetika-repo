console.log('main.js');
(() => {
    console.log('Here we are!')
    window.addEventListener("load", (event) => {
        const operand1 = document.getElementById('operand1');
    const operand2 = document.getElementById('operand2');
    const operation = document.getElementById('operation');
    const result = document.getElementById('result');

    const calculate = () => {
      const num1 = parseFloat(operand1.value);
      const num2 = parseFloat(operand2.value);
      const op = operation.value;
      let output;

      if (isNaN(num1) || isNaN(num2)) {
        output = 'Invalid input';
      } else {
        switch (op) {
          case '+':
            output = num1 + num2;
            break;
          case '-':
            output = num1 - num2;
            break;
          case '*':
            output = num1 * num2;
            break;
          case '/':
            output = num2 !== 0 ? num1 / num2 : '∞';
            break;
          default:
            output = 'Unknown op';
        }
      }

      result.textContent = output;
    };

    operand1.addEventListener("input", calculate);
    operand2.addEventListener("input", calculate);
    operation.addEventListener("change", calculate);

    calculate();
    });      
})();
