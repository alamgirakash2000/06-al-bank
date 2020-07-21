'use strict'

const loginBtn= document.querySelector('#login')
const loginArea= document.querySelector('#login-area')
const transactionArea= document.querySelector('#transaction-area')
const addDeposit= document.querySelector('#addDeposit')
const addWithdraw= document.querySelector('#addWithdraw')

// Event handler for Login Button
loginBtn.addEventListener('click', () => {
    loginArea.style.display='none'
    transactionArea.style.display='block'
})

// Event Handler for Deposit button
addDeposit.addEventListener('click', () => {
    const addDeposit=parseFloat(document.getElementById('depositAmount').value)
    const currentDeposit = getInnerText('currentDeposit')
    setInnerText('currentDeposit',currentDeposit+addDeposit)
    const currentBalance= getInnerText('currentBalance')
    setInnerText('currentBalance',currentBalance+addDeposit)
})

// Event Handler for Withdraw Button
addWithdraw.addEventListener('click', () => {
    const addWithdraw=parseFloat(document.getElementById('withdrawAmount').value)
    const currentWithdraw = getInnerText('currentWithdraw')
    setInnerText('currentWithdraw',currentWithdraw+addWithdraw)
    const currentBalance= getInnerText('currentBalance')
    setInnerText('currentBalance',currentBalance-addWithdraw)
})

// Function to get the current value
function getInnerText(id){
    return parseFloat(document.getElementById(id).innerText)
}

// Function to set innerText
function setInnerText(id,value){
    document.getElementById(id).innerText=value
}