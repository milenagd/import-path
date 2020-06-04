import path from "path";
import { readFilesByDir } from "./helpers/readFilesByDir";

export const transformImportFile = () => {
  const inputRoot = process.argv[2] || "";
  const directoryPath = path.join(__dirname, "../");
  const root = path.resolve(inputRoot);
  readFilesByDir(directoryPath, root);
};
