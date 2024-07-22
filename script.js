let inputEl = document.getElementById("amount")
let convertBtn = document.getElementById("convert-btn")
const resultEl = document.getElementById("result");

convertBtn.addEventListener("click",function(){
    const inputElvalue = parseFloat(inputEl.value)
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

   if(!isNaN(inputElvalue)){

    const rates = {
        USD: { 
            EUR: 0.85, 
            GBP: 0.75 
        },
        EUR: { 
            USD: 1.18, 
            GBP: 0.88 
        },
        GBP: { 
            USD: 1.34, 
            EUR: 1.14 
        }
    };
    let convertedAmount;
    if (fromCurrency === toCurrency) {
        convertedAmount = inputElvalue;
    } else {
        convertedAmount = inputElvalue * rates[fromCurrency][toCurrency];
    }

    resultEl.innerText = `${inputElvalue} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
     
   }else{
    resultEl.innerText = "Please enter a valid number"
   }

})