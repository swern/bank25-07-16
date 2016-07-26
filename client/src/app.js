var Bank = require('./bank/bank.js');
var BankView = require('./bank/bankView.js')
var Account = require('./bank/account.js');
var sampleAccounts = require('./sample.json');

var createItemForAccount = function(account){
 var accountListItem = document.createElement('li');
 accountListItem.innerText = account.owner + ": £" + account.amount;
 return accountListItem;
}

var populateAccountList = function(listElement, accounts){
 for(account of accounts){
   listElement.appendChild(createItemForAccount(account));
 }
}

window.onload = function(){
 var bank = new Bank();
 var bankView = new BankView(bank);
 for(account of sampleAccounts){
   bank.addAccount(new Account(account));
 }
}
//  var button = document.getElementById('pay-interest');
//  button.onclick = function(){
//    bank.addInterest(10);
//    console.log(bank);
//    displayAccounts(bank);
//  }
//  displayAccounts(bank);
// };

// function displayAccounts(bank){
//  var totalDisplay = document.getElementById('total');
//  var businessTotalDisplay = document.getElementById('business-total');
//  var personalTotalDisplay = document.getElementById('personal-total');

//  businessTotalDisplay.innerHTML = " ";
//  personalTotalDisplay.innerHTML = " ";

//  totalDisplay.innerText = "Total: £" + bank.totalCash();
//  businessTotalDisplay.innerText = "Total Business: £" + bank.totalCash('business');
//  personalTotalDisplay.innerText = "Total Personal: £" + bank.totalCash('personal');

//  var businessAccountList = document.getElementById('business-accounts');
//  var personalAccountList = document.getElementById('personal-accounts');

//  businessAccountList.innerHTML = "";
//  personalAccountList.innerHTML = "";

//  populateAccountList(businessAccountList, bank.filteredAccounts('business'))
//  populateAccountList(personalAccountList, bank.filteredAccounts('personal'))

// }