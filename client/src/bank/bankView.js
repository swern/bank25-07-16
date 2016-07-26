


var BankView = function(){
 this.displayTotal = function(bank){
   var totalDisplay = document.getElementById('total');
   totalDisplay.innerText = "Total: £" + bank.totalCash();
 },

 this.createItemForAccount = function(account){
   var accountListItem = document.createElement('li');
   accountListItem.innerText = account.owner + ": £" + account.amount;
   return accountListItem;
 },

 this.populateAccountList = function(listElement, accounts){
   for(account of accounts){
     listElement.appendChild(this.createItemForAccount(account));
 }
},

 this.displayAccounts = function(bank){
   var businessTotalDisplay = document.getElementById('business-total');
   var personalTotalDisplay = document.getElementById('personal-total');

   businessTotalDisplay.innerHTML = "";
   personalTotalDisplay.innerHTML = "";

   businessTotalDisplay.innerText = "Total Business: £" + bank.totalCash('business');
   personalTotalDisplay.innerText = "Total Personal: £" + bank.totalCash('personal');

   var businessAccountList = document.getElementById('business-accounts');
   var personalAccountList = document.getElementById('personal-accounts');

   businessAccountList.innerHTML = "";
   personalAccountList.innerHTML = "";

   this.populateAccountList(businessAccountList, bank.filteredAccounts('business'))
   this.populateAccountList(personalAccountList, bank.filteredAccounts('personal'))
 },

 this.addInterest = function(bank){
   var button = document.getElementById('pay-interest');
   button.onclick = function(){
     bank.addInterest(10);
     this.displayAccounts(bank);
     this.displayTotal(bank);
   }.bind(this)
 }

}




module.exports = BankView;