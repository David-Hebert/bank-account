class Account {
    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }

    balance() {
        const currentBalance = (x, y) => x + y;
        return this.transactions.reduce(currentBalance)
    }

    deposit(amt) {
        if (amt <= 0) {
            console.log("A negative amount cannot be deposited")
        } else {
            return this.transactions.push(amt)
        }
    }

    charge(payee, amt) {
        console.log(this.balance())
        if ((this.balance() - amt) > 0) {
            new Transaction(amt, payee)
            return this.transactions.push(amt *= -1)
        } else {
            console.log("Bank account cannot have a negative balance")
        }
    }
};

class Transaction {
    constructor(amt, payee) {
        this.date = Date();
        this.amt = amt;
        this.payee = payee;
    }
}



let newAccount = new Account(7821 , "David Hebert")
newAccount.deposit(150) // successful deposit

newAccount.charge("Starbucks", 8) 
console.log(newAccount.balance()) // successful charge

newAccount.deposit(-5) // cannot deposit a negative

console.log(newAccount.transactions) // shows transactions

newAccount.charge("Best Buy", 999)


