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
    const depositNumber = getInputNumber("depositAmount")

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
})
function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerHTML = total;
}

//Withdraw Area...
const withdrawBtn = document.getElementById("withdrawBtn").addEventListener("click", function(){
    
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber );
    document.getElementById("withdrawAmount").value = "";
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const withdrawNumber = parseFloat(amount);
    return withdrawNumber
}