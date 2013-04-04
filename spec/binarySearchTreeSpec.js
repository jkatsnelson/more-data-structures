describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });


  describe("the addChild method", function(){
    beforeEach (function(){
      binarySearchTree.addChild(4);
      binarySearchTree.addChild(3);
      binarySearchTree.addChild(5);
      binarySearchTree.addChild(10);
      binarySearchTree.addChild(1);
    });

    it("should increase length of valueArray", function(){

      expect(binarySearchTree.valueArray[0].length).toEqual(3);
    });

    it("should add children successfully", function(){
      expect(binarySearchTree.valueArray).toEqual([ [ [ [ [ [ [ ], 1, [ ] ] ], 3, [ ] ] ], 4, [ [ [ ], 5, [ [ [ ], 10, [ ] ] ] ] ] ] ]);
    })
  });



  describe("the children method", function(){
    beforeEach (function(){
      binarySearchTree.addChild(4);
      binarySearchTree.addChild(5);
      binarySearchTree.addChild(10);
      binarySearchTree.addChild(15);
      binarySearchTree.addChild(3);
      binarySearchTree.addChild(1);
  });

  it("should return left and right children of 5", function(){
    expect(binarySearchTree.children(5)).toEqual(' No left children ,10,,15, ');

  });

  it("should return left and right children of 4", function(){
    expect(binarySearchTree.children(4)).toEqual(" ,1,,3, ,5,,10,,15, ");

  });

  // it("should return null if there is no such value", function() {
  //   expect(binarySearchTree.children(7)).toEqual(null);
  // });

  });

  // add more tests here to test the functionality of binarySearchTree
});