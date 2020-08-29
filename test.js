// function validateForm(){
//     var x = document.forms["myForm"]["email"].value;
//     if(x == "")
//     {
//         alert("hey");
//         return false
//     }
// }
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function(){
    var x = document.forms["myForm"]["email"].value;
    if(x == "")
    {
        alert("hey");
        
    }else{
       loginArea = document.getElementById("login-area").style.display = "none";
    transactionArea = document.getElementById("transaction-area").style.display = "block" 
    }
    
})

const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click", function(){
    const depositAmount = getInputNumber("depositAmount")

    updateSpanText("currentDeposit", depositAmount)

    updateSpanText("currentBalance", depositAmount)

    document.getElementById("depositAmount").value = "";

})
// function danger(id, depositAmount){
//     const currentWithdraw = updateSpanText(id, depositAmount);
// }
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function(){
    const withdrawAmountNumber = getInputNumber("withdrawAmount");
    
    updateSpanText("currentWithdraw", withdrawAmountNumber);
    updateSpanText("currentBalance", -1 * withdrawAmountNumber);

    
    document.getElementById("withdrawAmount").value = "";
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const currentAmount = parseFloat(amount);
    return currentAmount;
}

function updateSpanText(id, depositAmount){
    const currentDeposit = document.getElementById(id).innerText;
    const currentDepositNumber = parseFloat(currentDeposit);

    const totalDeposit = currentDepositNumber + depositAmount;
    document.getElementById(id).innerHTML = totalDeposit;
}
