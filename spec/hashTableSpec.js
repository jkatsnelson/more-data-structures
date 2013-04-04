describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = makeHashTable();
  });

  it("should have a method named 'insert'", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'retrieve'", function() {
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });


  describe("retrieve", function() {

    beforeEach(function() {
      hashTable.insert("1", "dog");
      hashTable.insert(3, "people");
      hashTable.insert("12", "cat");
      hashTable.insert("meow", "dogsuck");
      hashTable.insert("2", "dog");
      hashTable.insert(4, "people");
      hashTable.insert("17", "cat");
      hashTable.insert("25", "dogsuck");

    });

    it("earth, this is dog", function() {
      expect(hashTable.retrieve('1')).toEqual("dog");

    });

    it("find us", function() {
      expect(hashTable.retrieve(3)).toEqual("people");
    });

  });  

});