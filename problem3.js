function checkDigitsInName(name)
{

    if(typeof name != 'string')
    {
         return "Invalid Input"
    }

    else{
        let isdigit = /\d/.test(name);
        return isdigit
    }
   
}

let a = checkDigitsInName("Name2024")
console.log(a)
