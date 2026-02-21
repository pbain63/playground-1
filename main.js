
function MyObject(v) {
    return new Object(v);
}
class D extends MyObject{
    constructor(v) {
        super(v);
    }
}
console.log(new D(1) instanceof Number);
