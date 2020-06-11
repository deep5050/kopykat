#!/usr/bin/env node
'use strict';

const ClipboardListener = require('clipboard-listener');
const notebook = require('./src/notebook');
const copy = require('copy-paste');

let last_copy = '';
try {
	last_copy = copy.paste();
} catch {
	console.log('Sorry, Could not read the clipboard :(');
	process.exit(1);
}

console.log('Service Started ... (Hit CTRL^C Twice To Force Quit)');

notebook.initiate();

const listener = new ClipboardListener({
	timeInterval: 100, // Default to 250
	immediate: true // Default to false
});

listener.on('change', value => {
	if (value !== last_copy) {
		last_copy = value;
		notebook.write(value);
	}
});
