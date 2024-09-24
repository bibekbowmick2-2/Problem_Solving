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

let output = sendNotification("farhan34@yahoo.com")
console.log(output)