expect(someMockFunction.mock.calls).toHaveLength(1);

expect(someMockFunction.mock.calls[0][0]).toBe("first arg");

expect(someMockFunction.mock.calls[0][1]).toBe("second arg");

expect(someMockFunction.mock.results[0].value).toBe("return value");

expect(someMockFunction.mock.contexts[0]).toBe(element);

expect(someMockFunction.mock.instances.length).toBe(2);

expect(someMockFunction.mock.instances[0].name).toBe("test");

expect(someMockFunction.mock.lastCall[0]).toBe("test");
