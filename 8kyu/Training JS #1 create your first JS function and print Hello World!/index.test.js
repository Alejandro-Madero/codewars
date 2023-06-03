const helloWorld = require(".");

describe("helloWorld", () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('should print "Hello World!" to the console', () => {
    helloWorld();
    expect(consoleLogSpy).toHaveBeenCalledWith("Hello World!");
  });
});
