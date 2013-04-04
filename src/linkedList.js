// Note: don't use an array to do this.
var makeLinkedList = function(){
  var linkedList = {
    head : null,

    contains: function(data){
      var curNode = this.head;
      while (curNode !== null) {
        if (curNode.value === data){
          return true;
        }
        curNode = curNode.pointer;
      }
      return false;
    },

    insert: function(data){
      if ( this.head == null ){
        return this.head = { value: data, pointer: null};
      }
      var newNode = { value: data, pointer: null};

      // Put this new guy at the END of the list
      var lastNode = this.head;
      while (lastNode.pointer !== null) {
        lastNode = lastNode.pointer;
      }

      // When we've found the last node
      return lastNode.pointer = newNode;
    },
  };
  return linkedList;
};