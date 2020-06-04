import { transformPath } from "../";
describe("transformPath", () => {
  test("should not transform path when the directory tree has less than 3 levels", () => {
    const root = "/home/root/a/b";
    const relativePath = "../../c";
    const filePath = "/home/root/a/b/c/d/e";

    const value = transformPath(root, relativePath, filePath);
    expect(value).toBe(relativePath);
  });
  test("should transform path", () => {
    const root = "/home/root/";
    const relativePath = "../../../y";
    const filePath = "/home/root/a/b/c/d/e";

    const value = transformPath(root, relativePath, filePath);
    expect(value).toBe("/a/y");
  });
});
