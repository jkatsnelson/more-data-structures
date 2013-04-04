var makeTree = function(){
  var tree = {

    children: ["children"],

    addChild: function(childValue, parent){
      
      parent.push([childValue]);
    },

    traverse: function(array, value){
      var nodeValue = array[0];
      var children = array.slice(1);

      if (nodeValue === value){ return true; }
      if (children.length === 0){ return false; }
      var storage = false;
      for (var i=0; i<children.length; i++){
        storage = storage || tree.traverse(children[i], value);
      }
      return storage;
    }   
  } 
  return tree;
};