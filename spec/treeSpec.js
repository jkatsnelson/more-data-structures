describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have an array of children", function() {
    expect(tree.children).toEqual(jasmine.any(Array));
  });

  it("should have a method named 'addChild'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'traverse'", function() {
    expect(tree.traverse).toEqual(jasmine.any(Function));
  });


  describe("addChild method", function(){

    beforeEach(function() {
      tree.addChild("Test Man", tree.children);
      tree.addChild("Test boy", tree.children[1])
      tree.addChild("test baby", tree.children[1][1])
    });

    it("should add children to children", function(){
      expect(tree.children).toEqual(["children", ["Test Man", ["Test boy", ["test baby"]]]]);
    });
  });

  describe("traverse method", function(){

    beforeEach(function() {
      tree.addChild("Test Man", tree.children);
      tree.addChild("Test boy", tree.children[1]);
      tree.addChild("Test baby", tree.children[1][1]);
    });

    it("should return true", function(){
      expect(tree.traverse(tree.children, "Test baby")).toEqual(true);
    });
  });


  // Add more tests here to test the functionality of tree.
  // If you're feeling frisky, have your tree nodes track their
  // parent and add a function called removeFromParent.
});