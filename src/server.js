require("@babel/register");

const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

const { transformImportFile } = require("./");
transformImportFile();
