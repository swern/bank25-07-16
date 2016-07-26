


var BankView = function(bank){
  this.bank = bank
}

BankView.prototype = {
  setListeners: function(){
     var button = document.getElementById('pay-interest');
     button.onclick = function(){
       bank.addInterest(10);
       console.log(bank);
       displayAccounts(bank);
     }
     displayAccounts(bank);
    };
  },

  updateDisplay: function(){
     var totalDisplay = document.getElementById('total');
     var businessTotalDisplay = document.getElementById('business-total');
     var personalTotalDisplay = document.getElementById('personal-total');

     businessTotalDisplay.innerHTML = " ";
     personalTotalDisplay.innerHTML = " ";

     totalDisplay.innerText = "Total: £" + bank.totalCash();
     businessTotalDisplay.innerText = "Total Business: £" + bank.totalCash('business');
     personalTotalDisplay.innerText = "Total Personal: £" + bank.totalCash('personal');

     var businessAccountList = document.getElementById('business-accounts');
     var personalAccountList = document.getElementById('personal-accounts');

     businessAccountList.innerHTML = "";
     personalAccountList.innerHTML = "";

     populateAccountList(businessAccountList, bank.filteredAccounts('business'))
     populateAccountList(personalAccountList, bank.filteredAccounts('personal'))

    }
  }
module.exports = BankView;