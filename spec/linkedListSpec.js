describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a method named 'insert'", function() {
    expect(linkedList.insert).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'contains'", function() {
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });


  describe("insert and head", function(){

    beforeEach(function(){

      linkedList.insert(6);
      linkedList.insert(71);
      linkedList.insert(65);

    });

    it("should place a new object, head, with a value and a pointer", function(){
      // expect(linkedList.head).toEqual({ value: 6, pointer: linkedList.head.pointer });
      expect(linkedList.head.value).toEqual(6);
    });

    it("should place a pointer to the new node from the prior node in the chain", function(){

      expect(linkedList.head.pointer.value).toEqual(71);

    });

    it("should have a last node with an undefined pointer", function(){
      expect(linkedList.head.pointer.pointer.pointer).toEqual(null);
    });

  });

  describe("contains", function(){

    beforeEach(function(){

      linkedList.insert(6);
      linkedList.insert(71);
      linkedList.insert(65);
    });

    it("should return true if the value of any node equals 65", function(){
      expect(linkedList.contains(65)).toEqual(true);
    });

  });
  // add more tests here to test the functionality of linkedList
});