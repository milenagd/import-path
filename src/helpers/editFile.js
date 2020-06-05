import fs from "fs";
import { handleImportLine, transformPath } from "./";

export const editFile = (fileName, root) => {
  try {
    const data = fs.readFileSync(fileName, "UTF-8");

    const lines = data.split(/\r?\n/);

    const result = lines
      .map((line) => {
        const lineObj = handleImportLine(line);

        if (!lineObj) return line;

        return `${lineObj.import}${lineObj.from}'${transformPath(
          root,
          lineObj.path,
          fileName
        )}';`;
      })
      .join("\n");

    fs.writeFileSync(fileName, result);
  } catch (err) {
    console.error(err);
  }
};
