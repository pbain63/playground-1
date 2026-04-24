class ClassWithStaticField {
  static baseStaticField = "Base static field";
  static anotherBaseStaticField = this.baseStaticField;

  static baseStaticMethod() {
    return "Base static method output";
  }
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = super.baseStaticMethod();
}

console.log(ClassWithStaticField.anotherBaseStaticField);
console.log(SubClassWithStaticField.subStaticField);
