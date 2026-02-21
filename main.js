class C extends Object {
    constructor(v){
        super(v);
    }
}
console.log(new C(1) instanceof Number);
console.log(C.keys({a:1, b:2}));

