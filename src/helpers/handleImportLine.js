import get from "lodash/get";
import isString from "lodash/isString";

export const handleImportLine = (line) => {
  if (!line || !isString(line)) return null;

  const importLineRegex = /(?<import>import.*)?(?<from>}?\s*from[\s*|\n*])(?<path>.*)/;
  const matchLine = line.match(importLineRegex);

  if (!matchLine) return null;
  return {
    import: get(matchLine, "groups.import", ""),
    from: get(matchLine, "groups.from", ""),
    path: get(matchLine, "groups.path", ""),
  };
};
