import { parseFinalPath, removeQuotes } from "./";

export const transformPath = (root, relativePath, filePath) => {
  const splittedPath = relativePath.split("..");

  const finalPath =
    splittedPath.length > 3
      ? parseFinalPath(filePath, root, removeQuotes(relativePath))
      : removeQuotes(relativePath);
  return finalPath.replace(";", "");
};
