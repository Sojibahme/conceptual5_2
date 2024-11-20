// Function
// get value by function  
// function getInputValueId(Id){
//     return parseFloat(document.getElementById(Id).value);
// }
// let income=getInputValueId("income");

// Show error function 
// function showError(Id){
//     document.getElementById(Id).classList.remove("hidden");
// }









let count=0;
 let calculate=document.getElementById("calculate");
 calculate.addEventListener("click",function(){
    count+=1;
    let income=parseFloat(document.getElementById("income").value);
    let softwarCost=parseFloat(document.getElementById("software").value);
    let corsesCost=parseFloat(document.getElementById("courses").value);
    let internetCost=parseFloat(document.getElementById("internet").value);

if(income<=0 || isNaN(income)){
    document.getElementById("income-error").classList.remove("hidden");
    return;
}
if(softwarCost<=0 || isNaN(softwarCost)){
    document.getElementById("software-error").classList.remove("hidden");
    return;
}
if(corsesCost<=0 || isNaN(corsesCost)){
    document.getElementById("courses-error").classList.remove("hidden");
    return;
}
if(internetCost<=0 || isNaN(internetCost)){
    document.getElementById("internet-error").classList.remove("hidden");
    return;
}
  let totalExpense=softwarCost+corsesCost+internetCost;
  let balance=income-totalExpense;
  if(totalExpense>income){
    document.getElementById("logic-error").classList.remove("hidden");
    return;
  }
  let totalExpenses=document.getElementById("total-expenses");
  totalExpenses.innerText=totalExpense.toFixed(2);
  let totalBalance=document.getElementById("balance");
  totalBalance.innerText=balance.toFixed(2);
  const result=document.getElementById("results");
  result.classList.remove("hidden")
  const historyItem=document.createElement("div");
  historyItem.className="bg-white p-3 rounded-md border-1-2 border-indigo-500";
  historyItem.innerHTML=`
  <p>Serial:${count}</p>
 <p class="text-xs text-gray-500">Date:${new Date().toLocaleDateString()}</p>
<p class="text-xs text-gray-500">Income:$${income.toFixed(2)}</p>
<p class="text-xs text-gray-500">Expense:$${totalExpense.toFixed(2)}</p>
<p class="text-xs text-gray-500">Balance:$${balance.toFixed(2)}</p>


  `;
  const historyList=document.getElementById("history-list");
  historyList.appendChild(historyItem);
 });

 const saveing=document.getElementById("calculate-savings");
 saveing.addEventListener("click",function(){
    const saveNumber=parseFloat(document.getElementById("savings").value);
    let income=parseFloat(document.getElementById("income").value);
    let softwarCost=parseFloat(document.getElementById("software").value);
    let corsesCost=parseFloat(document.getElementById("courses").value);
    let internetCost=parseFloat(document.getElementById("internet").value);
  let totalExpense=softwarCost+corsesCost+internetCost;
  let balance=income-totalExpense;
  let calculatevalue=(balance*saveNumber)/100;
  let savingElement=document.getElementById("savings-amount");
  savingElement.innerText=calculatevalue;
  let remainTaka=balance-calculatevalue;
  let remainingBalance=document.getElementById("remaining-balance");
      remainingBalance.innerText=remainTaka;
    
 });

 
 const history=document.getElementById("history-tab");
history.addEventListener("click",function(){
    history.classList.add("text-white","bg-gradient-to-r","from-blue-500","to-purple-600");
    let assitant=document.getElementById("assistant-tab");
    assitant.classList.remove("text-white","bg-gradient-to-r","from-blue-500","to-purple-600");
    let expenese=document.getElementById("expense-form");
    expenese.classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");
});


let assitant=document.getElementById("assistant-tab");
assitant.addEventListener("click",function(){
    assitant.classList.add("text-white","bg-gradient-to-r","from-blue-500","to-purple-600");
    history.classList.remove("text-white","bg-gradient-to-r","from-blue-500","to-purple-600");
    let expenese=document.getElementById("expense-form");
    expenese.classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");
})