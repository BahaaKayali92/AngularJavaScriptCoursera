(function(){
'user strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService)
{
	var ToBuy=this;
	
	ToBuy.items=ShoppingListCheckOffService.getBuyItems();
	console.log(ToBuy.items);
ToBuy.removeItem=function($index)  
{
	ShoppingListCheckOffService.addItemAndRemove($index);

}
};
AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService)
{
	var alreadyBuy=this;
	alreadyBuy.items=ShoppingListCheckOffService.getBoughtItems();
	};

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsAlreadyBought = [];
var itemsToBuy=[{
		 name: "cookies",
		  quantity: 10
		},
		{
		 name: "pommes",
		  quantity: 5
	},
	{
		 name: "chocolate",
		  quantity: 5
	}
	,
	{
		 name: "chicken",
		  quantity: 2
	}
	,
	{
		 name: "salt",
		  quantity: 2
	}];
  service.addItemAndRemove = function ($index) {

    var item = {
      name: itemsToBuy[$index].name,
      quantity: itemsToBuy[$index].quantity
    };
    itemsAlreadyBought.push(item);
   itemsToBuy.splice($index,1);
  };

  service.getBoughtItems = function () {
    return itemsAlreadyBought;
  };
  service.getBuyItems = function () {
    return itemsToBuy;
  };
}


})();