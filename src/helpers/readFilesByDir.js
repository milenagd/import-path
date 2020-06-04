import fs from "fs";
import path from "path";
import { editFile } from "./";
import { config } from "../config";

export const readFilesByDir = (directoryPath, root) => {
  const allFiles = fs.readdirSync(directoryPath);
  const filesToRead = allFiles.filter(
    (file) =>
      !config.ignoreList.includes(file) && !config.ignoreHiddenFiles.test(file)
  );

  filesToRead.map((file) => {
    try {
      const fullPath = path.resolve(directoryPath, file);
      const stats = fs.statSync(fullPath);
      if (!stats.isDirectory()) {
        if (file === "x.js") {
          editFile(fullPath, root);
        }
      } else {
        readFilesByDir(fullPath, root);
      }
    } catch (err) {
      console.log("it does not exist", err);
    }
  });
};
