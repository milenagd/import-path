import { calculatePathInfo } from "../";
describe("calculatePathInfo", () => {
  test("should return an object info", () => {
    const sample = "../../a/b";
    const sampleInfo = calculatePathInfo(sample);

    expect(Object.keys(sampleInfo)).toContain("value");
    expect(Object.keys(sampleInfo)).toContain("prevDirsNumber");
    expect(Object.keys(sampleInfo)).toContain("size");
    expect(Object.keys(sampleInfo)).toContain("splitted");
  });
  test("should return null", () => {
    const sample = [1, true, "", {}, undefined, null];

    sample.forEach((item) => {
      const sampleInfo = calculatePathInfo(item);
      expect(sampleInfo).toBe(null);
    });
  });
});
