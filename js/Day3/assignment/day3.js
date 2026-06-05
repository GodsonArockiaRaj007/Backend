// Task 1 - Bank Account Using Closure

const bankAccount=()=>{
    let initialBalance=5000
    return{
        withdraw:(amount)=>{
            initialBalance-=amount
            console.log("After withdraw: ",initialBalance)
        },
        deposit:(amount)=>{
            initialBalance+=amount
            console.log("After deposit: ",initialBalance)
        },
        balance:()=>{
            console.log("Balance: ",initialBalance)
        }
    }
}
const account=bankAccount()
account.withdraw(1000)
account.deposit(2000)
account.balance()



// Task 2 - Student Attendance Counter


const attendance=()=>{
        let count=0;
        return present=()=>{
            count++
            console.log("Attendance count: ",count);
                
            }

        }
const student=attendance()
student()
student()
student()
student()
student()




// Task 3 - Website Visitor Counter
const visitorCount=()=>{
    let visitor=0
    return count=()=>{
        visitor++
        console.log("Visitors count",visitor)
    }
}
const newVisitor=visitorCount()
newVisitor()
newVisitor()
newVisitor()





// Task 4 - Shopping Cart Counter
const shoppingCart=()=>{
    let item=0
    return{
        addItem:()=>{
            item++
            console.log("After adding item: ",item)
        },
        removeItem:()=>{
            if(item<=0)
            {
                console.log("Cart is empty")
            }
            else{
                item--
                console.log("After removing item: ",item);
                
            }
        },
        displayTotalItem:()=>{
            console.log("items count: ",item)
        }
    }
}

const cart=shoppingCart()
cart.addItem()
cart.displayTotalItem()
cart.removeItem()
cart.removeItem()






// Task 5 - ATM Machine System

 const bank=(amount)=>{
            let balance=amount
            
            
            return { 

            withdraw:(value)=>{
                if(balance<value)
                {
                    console.log("Insufficient balance")
                }
                else{
                    return balance-=value
                }
            },
            saving:(value)=>{
               return balance+=value
            },
            checkBalance:()=>{
                return balance
            }
             };
        }

const user1=bank(5000)
const deposit=user1.withdraw(500)
console.log("After deposit: ",deposit)
const credit=user1.saving(1000)
console.log("After credit: ",credit);
const balance=user1.checkBalance()
console.log("Balance: ",balance);





// Task 6 - Login Attempt Tracker

const loginAttemptTracker=()=>{
    let count=0
    return login=()=>{
        count++
        console.log("Login attempt count: ",count)
    }
}
const user=loginAttemptTracker()
user()
user()
user()







// Task 7 - Callback Injection - Payment Gateway


const processPayment=(callback)=>{
    callback()
}

const gPay=()=>{
    console.log("payment done using gPay")
}

const phonePe=()=>{
    console.log("payment done using phonePe")
}

const Paytm=()=>{
    console.log("payment done using Paytm")
}

processPayment(gPay)
processPayment(phonePe)
processPayment(Paytm)





// Task 8 - Callback Injection - User Actions


const executeAction=(callback)=>{
    callback()
}

const loginUser=()=>{
    console.log("login executed")
}

const logout=()=>{
    console.log("logout executed");
}

const register=()=>{
    console.log("registered successfully");
    
}

executeAction(loginUser)
executeAction(logout)
executeAction(register)




// Task 9 - setTimeout Notification System
const notificationSystem=()=>{
    console.log("Sending Notification...")

    setTimeout(()=>{
        console.log("Notification Sent")
    },3000)
}

notificationSystem()




// Task 10 - Closure + Callback + setTimeout (Combined)


const orderProcessingSystem=()=>{
    let orderCount=0
    return (callback)=>{
        orderCount++
        console.log("Order count: ",orderCount)
        console.log("Processing...")
        setTimeout(()=>{
            callback()
        },3000)
    }
}

const mobileOrder=()=>{
    console.log("Mobile order completed")
}
const laptopOrder=()=>{
    console.log("Laptop order completed");
    
}
const tvOrder=()=>{
    console.log("TV order completed");
    
}

const orderSystem=orderProcessingSystem()
orderSystem(mobileOrder)
orderSystem(laptopOrder)
orderSystem(tvOrder)