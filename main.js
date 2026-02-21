class MyArray extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}
const a = new MyArray(1,2,3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray);
console.log(mapped instanceof Array);
