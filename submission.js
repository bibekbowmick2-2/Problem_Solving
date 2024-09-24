function calculateTax(income, expenses){
   

    if(income<=0 || expenses<=0 || income<expenses ){
        return "Invalid Input"

    }
    let difference= income-expenses
    let tax = difference*0.20
    return tax
}




function sendNotification(email)
{

  const [username, domain] = email.split("@");
   
   if(email.includes("@")== false)
   {
       return "Invalid Email"
   }
   

   else{
   
    let final = username+" sent you an email from "+domain
    return final
   }
   
}




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



function calculateFinalScore(obj)
{
    const extra_marks = 20
    let total_mark=0
    if(typeof obj != 'object')
    {
        return "Invalid Input"
    }


    if(obj.isFFamily == true)
    {
        total_mark= obj.testScore+obj.schoolGrade+extra_marks
        if(total_mark>=80)
        {
            return "true"
        }

        else{
            return "false"
        }
    }


    if(obj.isFFamily == false)
    {
        total_mark= obj.testScore+obj.schoolGrade
        if(total_mark>=80)
        {
            return "true"
        }

        else{
            return "false"
        }
    }
}




function  waitingTime(waitingTimes  , serialNumber) {

    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
      return "Invalid Input";
    }
  
  
      let sum = 0;
      
  for (let i = 0; i < waitingTimes.length; i++) {
  
    sum += waitingTimes[i];
  
  }
  
  let averae =  Math.round(sum/waitingTimes.length)
  let result = averae* ((serialNumber-1)-waitingTimes.length)
  return result
  
  
  }