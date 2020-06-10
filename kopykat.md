# KOPYKAT 10/6/2020 
## This Is An Auto-generated File

>**11:06:16 AM**

```JavaScript
const listener = new ClipboardListener({
    timeInterval: 100, // Default to 250
    immediate: true, // Default to false
});

listener.on('change', value => {
```

>**11:06:25 AM**

```JavaScript
listener.on('change', value => {
    if (value !== last_copy) {
        last_copy = value;
        notebook.write(value);
        console.log(value);
    }
```

>**11:06:33 AM**

```JavaScript
#!/usr/bin/env node
'use strict'

const clipboard = require('clipboardy');
const notebook = require('./src/notebook');


var last_clip = "";
try {
    last_clip = clipboard.readSync();

} catch (error) {
    return new Error('could not read the clipboard');
}


console.log("Service Started ... (Hit CTRL^C Twice To Force Quit)");
notebook.initiate();

var i = 1;
var inactive = 0;


while (i < 1000000) {
    setTimeout(() => {
        
        var text = "";
        try {
            text = clipboard.readSync();

        } catch (error) {
            return new Error('could not read the clipboard');
        }

        if (text !== last_clip) {
            notebook.write(text);
            inactive = 0;
        } else {
            inactive++;
            //console.log(`inactive ${inactive}`);
            if (inactive >= 300000) {
                console.log(`Quitting On Inactivity`);
                process.exit(0);
            }
        }
        last_clip = text;
    }, 1000);
    //console.log(`i ${i}`);
    i++;
}
```

>**11:06:42 AM**

```JavaScript
listener.on('change', value => {
    if (value !== last_copy) {
        last_copy = value;
        notebook.write(value);
        console.log(value);
    }
```

>**11:07:00 AM**

```JavaScript
```JavaScript
listener.on('change', value => {
    if (value !== last_copy) {
        last_copy = value;
        notebook.write(value);
        console.log(value);
    }
```
```