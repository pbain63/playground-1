const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text);
console.log(obj);
obj.birth = new Date(obj.birth);
console.log(obj.birth);
console.log(obj.name);