var compare = function(a,b){

  var results = [];
  var firstString = a.toLowerCase().split("");
  var secondString = b.toLowerCase().split("");
  for (var i=0; i<firstString.length; i++){
    for (var n=0; n<secondString.length; n++){
      if (secondString[n]===firstString[i]){
        results.push(secondString[n]);
        i++;
      };
    }
  }
  return results.join("");

}



var results = [];
var bStorage = [];
var compersion = function(a,b,n){
  if (n === undefined){
    n = 0;
    annoyingThing = b;
  }
  var firstString = a.toLowerCase().split("");
  var secondString = b.toLowerCase().split("");
  if (firstString[n] === secondString[n]){
    results.push(firstString[n]);
    bStorage.push(b.unshift());
    return compersion(a,b,n);
  }
  if (b.length === 0){
    return compersion(a,bStorage,n+1);
  }
  else {
    bStorage.push(b.unshift());
    return compersion(a,b,n);
  }
}