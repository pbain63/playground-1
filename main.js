class ParentClass {
    constructor() {
      return 1;
    }
  }
  
  console.log(new ParentClass()); // ParentClass {}
  // The return value is ignored because it's not an object
  // This is consistent with function constructors
  
  class ChildClass extends ParentClass {
    constructor() {
      super();
      return 1;
    }
  }
  
  console.log(new ChildClass()); // TypeError: Derived constructors may only return object or undefined
  