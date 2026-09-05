//
jest.mock("../foo");
const foo = require("../foo");
//
foo.mockImplementation(() => 42);
foo();
//
const myMockFn = jest
  .fn()
  .mockImplementation((cb) => cb(null, true))
  .mockImplementation((cb) => cb(null, false));

myMockFn((err, val) => console.log(val));

myMockFn((err, val) => console.log(val));
//
const myMockFn = jest
  .fn(() => "default")
  .mockImplementation(() => "first call")
  .mockImplementation(() => "second call");

console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
//
const myObj = {
  myMethod: jest.fn().mockReturnThis(),
};
// is the same as
const otherObj = {
  myMethod: jest.fn(function () {
    return this;
  }),
};
