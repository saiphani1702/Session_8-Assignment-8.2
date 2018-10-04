var prepareFood=function(Tablenumber,items,callback){
    console.log("preparing food for items -"+items);
    callback(Tablenumber,items);
}
var serveFood=function(Tablenumber,items){
    console.log("serving food for items -"+items);

}
console.log(prepareFood(1,["Burger","pasta","coke"],serveFood));