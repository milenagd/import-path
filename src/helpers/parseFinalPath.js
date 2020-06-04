import path from "path";
import { calculatePathInfo, parseSiblingPath } from "./";

export const parseFinalPath = (from, to, importPath) => {
  const sourceFileToRoot = path.relative(from, to);

  const sourceFileInfo = calculatePathInfo(sourceFileToRoot);
  const importPathInfo = calculatePathInfo(importPath);

  const rootSplitted = from.split("/");
  const rootIndex = rootSplitted.indexOf(path.basename(to));

  const relativeDiffNumber =
    sourceFileInfo.prevDirsNumber - importPathInfo.prevDirsNumber;

  if (relativeDiffNumber === 0)
    return parseSiblingPath(importPathInfo, sourceFileInfo);
  if (rootIndex < 0 || relativeDiffNumber < 0) return importPath;

  const totalDirs = rootIndex + relativeDiffNumber;

  const mountPath = rootSplitted
    .filter((item, index) => index > rootIndex && index < totalDirs)
    .join("/");
  const finalPath = `${mountPath ? `/${mountPath}` : ""}/${importPath.replace(
    /..\//g,
    ""
  )}`;

  return finalPath;
};
