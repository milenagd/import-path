export const parseSiblingPath = (importPathInfo, sourceFileInfo) => {
  const diff = importPathInfo.size - sourceFileInfo.size;

  if (diff === 1) return importPathInfo.value;

  const siblingPath = importPathInfo.splitted
    .slice(importPathInfo.prevDirsNumber + 1)
    .join("/");
  return `/${siblingPath}`;
};
