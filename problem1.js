


function calculateTax(income, expenses){
   

    if(income<=0 || expenses<=0 || income<expenses ){
        return "Invalid Input"

    }
    let difference= income-expenses
    let tax = difference*0.20
    return tax
}

tax_limit = calculateTax(6000,-15000)
console.log(tax_limit)