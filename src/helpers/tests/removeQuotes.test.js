import { removeQuotes } from "../";
describe("removeQuotes", () => {
  test("should remove quotes in a string", () => {
    const sample = ["'../../a/b'", "`../../a/b`", `"../../a/b"`];

    sample.forEach((item) => {
      const sampleInfo = removeQuotes(item);
      expect(sampleInfo).toBe("../../a/b");
    });
  });
  test("should return empty string", () => {
    const sample = [1, true, "", {}, undefined, null];

    sample.forEach((item) => {
      const sampleInfo = removeQuotes(item);
      expect(sampleInfo).toBe("");
    });
  });
});
