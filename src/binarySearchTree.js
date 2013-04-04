var makeBinarySearchTree = function(){
  var binarySearchTree = {

    valueArray : [],

    node: { left: null, right: null, nodeValue: null, parent: null},

    evaluateChildren: function (parent) {

      if (parent === undefined){
        parent = binarySearchTree.valueArray;
        binarySearchTree.node.parent = parent;
        binarySearchTree.evaluateChildren(parent);

      } else {
      binarySearchTree.node.left = parent[0][0];
      binarySearchTree.node.right = parent[0][2];
      binarySearchTree.node.nodeValue = parent[0][1];
      if (parent[0] != undefined){
      binarySearchTree.node.parent = parent[0];
      };
      // debugger;
      }

    },

    reportChildren: function (value, parent){

      binarySearchTree.evaluateChildren(parent);
      if (binarySearchTree.node.left.length == 0 && binarySearchTree.node.right.length == 0){
        return "No children";
      }

      if (binarySearchTree.node.left.length == 0){
        binarySearchTree.node.left = "No left children";
      }

      if (binarySearchTree.node.right.length == 0){
        binarySearchTree.node.right = "No right children";
      }

      left = binarySearchTree.node.left.toString();
      right = binarySearchTree.node.right.toString();
      message = " " + left + " " + right + " "
      return message;

    },

    addChild: function(value, parent){
      
      binarySearchTree.evaluateChildren(parent);

      if (binarySearchTree.node.nodeValue === undefined){
        return binarySearchTree.node.parent.push([[],value,[]])
      }

      if (value > binarySearchTree.node.nodeValue) {
        return binarySearchTree.addChild(value, binarySearchTree.node.right)
      }
      
      if (value < binarySearchTree.node.nodeValue) {
        return binarySearchTree.addChild(value, binarySearchTree.node.left)
      }
    },

    children: function(value, parent){

      binarySearchTree.evaluateChildren(parent);

      if(binarySearchTree.node.nodeValue === value) {

        return binarySearchTree.reportChildren(value, parent);

      }

      if(value < binarySearchTree.node.nodeValue && binarySearchTree.node.left.length !== 0) {
        return binarySearchTree.children(value, binarySearchTree.node.left);
      }

      if (value > binarySearchTree.node.nodeValue && binarySearchTree.node.right.length !== 0) {
        return binarySearchTree.children(value, binarySearchTree.node.right);
      }

      else {
        return null;
      }

    },

    contains: function(value, parent){

      binarySearchTree.evaluateChildren(parent);

      if(binarySearchTree.node.nodeValue == value) {

        return true;

      }

      if(binarySearchTree.node.nodeValue > value && binarySearchTree.node.left.toString() !== "") {

        return binarySearchTree.contains(value, binarySearchTree.node.left);

      }

      if (binarySearchTree.node.nodeValue < value && binarySearchTree.node.right.toString() !== "") {

        return binarySearchTree.contains(value, binarySearchTree.node.right);

      }

      else {
        return false;
      }

    }

  };
  return binarySearchTree;
}