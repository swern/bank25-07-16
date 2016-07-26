/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	var Bank = __webpack_require__(1);
	var Account = __webpack_require__(2);
	var sampleAccounts = __webpack_require__(3);
	var BankView = __webpack_require__(4);
	
	window.onload = function(){
	 var bank = new Bank();
	 var bankView = new BankView();
	 
	 for(account of sampleAccounts){
	   bank.addAccount(new Account(account));
	 }
	 bankView.displayTotal(bank);
	 bankView.displayAccounts(bank);
	 bankView.addInterest(bank);
	};
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	var Bank = function(){
	  this.accounts = [];
	}
	
	Bank.prototype = {
	  addAccount: function(account){
	    this.accounts.push(account);
	  },
	  findAccountByOwnerName:function(ownerName){
	    var foundAccount = null;
	    for (account of this.accounts) {
	      if(account.owner === ownerName){
	        foundAccount = account;
	      }
	    }
	    return foundAccount;
	  },
	  filteredAccounts: function(type){
	    if(!type) return this.accounts
	    var filteredAccounts = [];
	    for (account of this.accounts) {
	      if(type === account.type)
	        filteredAccounts.push(account);
	    }
	    return filteredAccounts;
	  },
	  totalCash:function(type){
	    var total = 0;
	    for (account of this.filteredAccounts(type)) {
	      total += account.amount;
	    }
	    return total;
	  },
	  accountAverage:function(){
	    return this.totalCash()/this.accounts.length;
	  },
	  addInterest: function(percentage, type){
	    for(account of this.filteredAccounts(type)){
	      account.amount += account.amount * (percentage/100)
	      console.log(account.amount)
	    }
	  }
	  }
	
	
	
	module.exports = Bank;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var Account = function(params){
	  this.owner = params.owner;
	  this.amount = params.amount;
	  this.type = params.type;
	};
	
	module.exports = Account;


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = [
	  { "owner": "jay",
	    "amount": 125.50,
	    "type": "personal"
	  },
	  { "owner": "val",
	    "amount": 55125.10,
	    "type": "personal"
	  },
	  { "owner": "marc",
	    "amount": 400.00,
	    "type": "personal"
	  },
	  { "owner": "keith",
	    "amount": 220.25,
	    "type": "business"
	  },
	  { "owner": "rick",
	    "amount": 1.00,
	    "type": "business"
	  },
	]

/***/ },
/* 4 */
/***/ function(module, exports) {

	
	
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map