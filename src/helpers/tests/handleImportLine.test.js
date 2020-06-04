import { handleImportLine } from "../";
describe("handleImportLine", () => {
  test("should return an object info", () => {
    const sample = "import { getName } from ../../a/b";
    const sampleInfo = handleImportLine(sample);

    expect(Object.keys(sampleInfo)).toContain("import");
    expect(Object.keys(sampleInfo)).toContain("from");
    expect(Object.keys(sampleInfo)).toContain("path");
  });
  test("should return null", () => {
    const sample = ["function a() {}", "", null, true, 1];

    sample.forEach((item) => {
      const sampleInfo = handleImportLine(item);
      expect(sampleInfo).toBe(null);
    });
  });
});
