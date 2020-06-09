#!/usr/bin/env node
"use strict";

const clipboard = require("clipboardy");
const notebook = require("./src/notebook");

var last_clip = "";
try {
  last_clip = clipboard.readSync();
} catch (error) {
  return new Error("could not read the clipboard");
}

console.log("Service Started ... (Hit CTRL^C Twice To Force Quit)");
notebook.initiate();

var i = 1;
var inactive = 0;

while (i < 1000) {
  setTimeout(() => {
    var text = "";
    try {
      text = clipboard.readSync();
    } catch (error) {
      return new Error("could not read the clipboard");
    }

    if (text !== last_clip) {
      notebook.write(text);
      inactive = 0;
    } else {
      inactive++;
      // console.log(`inactive ${inactive}`);
      if (inactive >= 3000) {
        console.log(`Quitting On Inactivity`);
        process.exit(0);
      }
    }
    last_clip = text;
  }, 1000);
  // console.log(`i ${i}`);
  i++;
}
