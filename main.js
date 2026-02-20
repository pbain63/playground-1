function OldStyleClass() {
    this.someProperty = 1;
}
OldStyleClass.prototype.someMethod = function () { };

class ChildClass extends OldStyleClass { };
class ModernClass {
    someProperty = 1;
    someMethod() { }
}
class AnotherChildClass extends ModernClass { };