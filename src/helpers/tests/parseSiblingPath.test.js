import { parseSiblingPath } from "../";
describe("parseSiblingPath", () => {
  test("should return the same path if diff === 1", () => {
    const a = {
      prevDirsNumber: 4,
      size: 5,
      value: "../../../../y",
    };

    const b = {
      prevDirsNumber: 4,
      size: 4,
      value: "../../../../",
    };

    const value = parseSiblingPath(a, b);
    expect(value).toBe(a.value);
  });
  test("should return the root children path", () => {
    const a = {
      prevDirsNumber: 3,
      size: 6,
      value: "../../../root/y/z",
      splitted: "../../../root/y/z".split("/"),
    };

    const b = {
      prevDirsNumber: 3,
      size: 3,
      value: "../../../",
    };

    const value = parseSiblingPath(a, b);
    expect(value).toBe("/y/z");
  });
});
