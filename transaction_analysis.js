
const transactions =[
    {id : 1, description: 'grocery Shopping', amount:-50},
    {id : 2, description: 'salary deposit', amount:4450},
    {id : 3, description: 'grocery Shopping', amount:-540},
    {id : 4, description: 'Food of cats', amount:-190},
    {id : 5, description: 'Food', amount:-1500}

]

//1. calculate total balance
const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
console.log('total balance: ',totalBalance)

// 2. Find the largest transaction (income or expense)
const largestTransactions = transactions.reduce((maxTransaction, transaction) =>{
    return Math.abs(transaction.amount)> Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0])

console.log('Largest Transaction: ', largestTransactions)

//3. Filter purchase transactions
const purchaseTransactions = transactions.filter(transaction => transaction.amount<0)
console.log('Purchase transactions: ',purchaseTransactions)

//4.Find a transactions by description
const specificTransaction = transactions.find(transaction=> transaction.description === 'Food' )
console.log('Specific Transaction: ',specificTransaction)

//5. Find the index of a transaction by amount
const indexTransactionWithAmount = transactions.findIndex(transaction=> transaction.amount === -190)
console.log('Index Transaction With Amount -190: ', indexTransactionWithAmount)

//6.Update transaction descriptions

transactions.forEach(transaction => {
    if(transaction.amount < 0){
        transaction.description = `Expense: ${transaction.description}`
    }else{
        transaction.description= `Income: ${transaction.description}`
    }
})
console.log('updated transactions: ', transactions)

