class ClassWithPrivateField {
    #privateField;
  
    constructor() {
      this.#privateField = 42;
    }
  }
  
  class Subclass extends ClassWithPrivateField {
    #subPrivateField;
  
    constructor() {
      super();
      this.#subPrivateField = 23;
    }
  }
  
  new Subclass(); // In some dev tools, it shows Subclass {#privateField: 42, #subPrivateField: 23}
  