expect(mockFunc).toHaveBeenCalled();

expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);

expect(myMockFn).toHaveBeenLastCalledWith(arg1, arg2);

expect(mockFunc).toMatchSnapshot();
//

expect(mockFunc.mock.calls.length).toBeGreaterThan(0);

expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);

expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
  arg1,
  arg2,
]);

expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);

expect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);
expect(mockFunc.getMockName()).toBe("a mock name");
