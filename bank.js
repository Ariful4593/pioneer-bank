//Login area
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById("transaction-area").style.display = "block"
})

//Transaction Area..
//------------------
// Add Deposit Area..
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    document.getElementById("currentDeposit").innerHTML = totalDeposit;
    
    
    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = currentBalanceNumber + depositNumber;
    // document.getElementById("currentBalance").innerHTML = totalBalance;
    document.getElementById("depositAmount").value = "";
})

//Withdraw Area...
