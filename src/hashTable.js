// Note: don't use an object to store the inserted elements.
var makeHashTable = function(){
  
  var maxConstant = 3;

  var storage = [];

  var hashTable = {
    
    viewStorage: function () {
      return storage;
    },

    insert: function(key, value) {

      if (storage[hashMonkey(key, maxConstant)] == undefined){
        storage[hashMonkey(key, maxConstant)] = [];
      }
      storage[hashMonkey(key, maxConstant)].push([key, value]);
    },

    retrieve: function(key) {

      for (var i=0; i<storage[hashMonkey(key, maxConstant)].length; i++){        
        if (storage[hashMonkey(key, maxConstant)][i][0] === key){
          return storage[hashMonkey(key, maxConstant)][i][1];

        }
      }
      return storage[hashMonkey(key, maxConstant)]; 

      //loop in retrieve
    } 

  };
  return hashTable;
};


// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key

var hashMonkey = function(str, max){
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    hash = (hash<<5) - hash;
    hash = hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash % max;
};
