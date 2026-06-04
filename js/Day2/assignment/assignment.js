// Task 1
// Create an arrow function that accepts a student's first name and last name and returns the full name.

const fullName=(firstName,lastName)=>{
        return firstName+" "+lastName
}

const result1=fullName("Godson","Arockia Raj")
console.log(result1)




// Task 2
// Create an arrow function that accepts a product price and quantity and returns the total amount.


const totalAmount=(price,quantity)=>{
        return price*quantity
}

const result2=totalAmount(50,3)
console.log(result2);



// Task 3
// Create an arrow function that accepts a person's age and returns whether they are eligible for voting.


const checkEligibiity=(age)=>{
    return age<18 ? "Not eligible" : "eligible"
}

const result3=checkEligibiity(21)
console.log(result3)



// Task 4
// Create an arrow function that accepts three numbers and returns the largest number.

const largestAmong3=(a,b,c)=>{
    if(a>=b&&a>=c)
    {
        return a
    }
    else if(b>=a&&b>=c)
    {
        return b
    }
    else
    {
        return c
    }
}

const result4=largestAmong3(10,30,20)
console.log(result4)

// Task 5
// Create an arrow function that accepts a username. If no username is provided, return "Guest" using a default parameter.

const defaultName=(username="Guest")=>{
    return username
}
const result5=defaultName()
console.log(result5);




// Task 6
// Create an arrow function that accepts two numbers and returns:

// Sum
const sum=(a,b)=>{
    return a+b
}
const result6a=sum(10,5)
console.log(result6a);

// Difference
const difference=(a,b)=>{
    return a-b
}
const result6b=difference(10,5)
console.log(result6b);


// Multiplication
const multiplication=(a,b)=>{
    return a*b
}
const result6c=multiplication(10,5)
console.log(result6c);


// Division
const division=(a,b)=>{
    return a/b
}
const result6d=division(10,5)
console.log(result6d);







// Task 7
// Create an arrow function that accepts marks of 5 subjects and returns the total and average.

const averageMark=(...marks)=>{
    let total=0;
    for(mark of marks)
    {
        total+=mark
    }
    const avg=total/marks.length
    return avg
}
const result7=averageMark(1,2,3,4,5)
console.log(result7)


// Task 8
// Create an arrow function that accepts a salary amount and returns:

// HRA = 20%

const calculateHRA=(salary)=>{
    return salary*20/100
}
const result8a=calculateHRA(100)
console.log(result8a);


// DA = 10%

const calculateDA=(salary)=>{
    return salary*10/100
}
const result8b=calculateDA(100)
console.log(result8b);

// Total Salary

const totalSalary=(salary)=>{
    const HRA=calculateHRA(salary)
    const DA=calculateDA(salary)
    return HRA+DA+salary
}
const result8c=totalSalary(100)
console.log(result8c)

// Task 9
// Create an arrow function that accepts a temperature in Celsius and converts it to Fahrenheit.

const celsiusToFahrenheit=(temp)=>{
    return (temp*9/5)+32
}
const result9=celsiusToFahrenheit(26)
console.log(result9);


// Task 10
// Create an arrow function that checks whether a given number is even or odd.

const oddOrEven=(num)=>{
    return num%2==0 ? "Even" : "Odd"
}
const result10=oddOrEven(10)
console.log(result10);



// Task 11
// Create an arrow function that accepts a string and returns the length of the string.

const stringLength=(str)=>{
    return str.length
}
const result11=stringLength("Godson")
console.log(result11);


// Task 12
// Create an arrow function that accepts a name and prints the name multiple times based on a count parameter.

const printNTimes=(name,n)=>{
    for(let i=0;i<n;i++)
    {
        console.log(name)
    }
}
printNTimes("Godson",5)

// Task 13
// Create an arrow function that accepts multiple marks using Rest Parameters and returns the total marks.

const totalMark=(...marks)=>{
    let total=0;
    for(mark of marks)
    {
        total+=mark
    }
    return total
}

const result13=totalMark(100,100,90,80,95,95)
console.log(result13);


// Task 14
// Create an arrow function that accepts multiple numbers using Rest Parameters and returns the largest number.


const largestNumber=(...nums)=>{
    let max=nums[0]
    for( i of nums)
    {
        if(i>max)
        {
            max=i
        }
    }
    return max
}

const result14=largestNumber(1,2,3,4,6,5)
console.log(result14);

// Task 15
// Create an arrow function that accepts multiple numbers using Rest Parameters and returns the smallest number.

const smallestNumber=(...nums)=>{
    let min=nums[0]
    for(num of nums)
    {
        if(num<min)
        {
            min=num
        }
    }
    return min
}
const result15=smallestNumber(5,4,3,2,1,6)
console.log(result15);

// Task 16
// Create an arrow function that accepts multiple product prices using Rest Parameters and returns the total bill amount.

const totalBillAmount=(...prices)=>{
    let totalBill=0
    for(price of prices)
    {
        totalBill+=price
    }
    return totalBill
}
const result16=totalBillAmount(25,25,20,30)
console.log(result16)