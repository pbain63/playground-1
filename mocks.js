const myMock = jest.fn();

console.log(myMock());

myMock
  .mockReturnValueOnce(10)
  .mockReturnValueOnce("x")
  .mockReturnValueOnce(true);

console.log(myMock(), myMock(), myMock(), myMock());
