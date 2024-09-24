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

let value = calculateFinalScore(
    { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }
)

console.log(value)
