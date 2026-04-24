class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticProperty);
    console.log(this.constructor.staticProperty);
    console.log(StaticMethodCall.staticMethod());
    console.log(this.constructor.staticMethod());
    
  }

  static staticProperty = "static property";
  static staticMethod() {
    return "static method has been called.";
  }
}

new StaticMethodCall();