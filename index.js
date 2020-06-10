#!/usr/bin/env node
'use strict'

const ClipboardListener = require('clipboard-listener');
const notebook = require('./src/notebook');
const copy = require('copy-paste');

var last_copy = "";
try {
    last_copy = copy.paste();
} catch (error) {
    return new Error('could not read the clipboard');
}

notebook.initiate();
console.log(`last copy : ${last_copy}`);

const listener = new ClipboardListener({
    timeInterval: 100, // Default to 250
    immediate: true, // Default to false
});

listener.on('change', value => {
    if (value !== last_copy) {
        last_copy = value;
        notebook.write(value);
        console.log(value);
    }
});