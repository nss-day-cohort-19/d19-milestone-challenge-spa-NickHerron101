var CarLot = (function(lot){

  var inventory = [];

    lot.loadInventory = function (callBack){
      var loader = new XMLHttpRequest();
          loader.open("GET", "inventory.json");
          loader.send();
          loader.addEventListener("load", function (){
            inventory = JSON.parse(this.responseText);
            // console.log("inventory",inventory);
            callBack(inventory);
          });
          loader.addEventListener("error", function(event){
            // console.log("Data did not load");
          });
    },
    lot.getInventory = function() {
      return inventory;
    }


  return lot;

})(CarLot || {});





