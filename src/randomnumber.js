var oneToFive = function() { return Math.floor(Math.random() * 5) + 1 };

var keepGoing = function (n){
  var sum=0;
  for (var i=0; i<n; i++){
    sum += oneToFive()*7;
  }
    return sum / 5;
};

