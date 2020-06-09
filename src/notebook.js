//@ts-check

const detector = require('lang-detector');
const fs = require('fs');
const path = require('path');



/**
 * Initiate the File. If the file doesn't exist write header
 * @module initiate
 * @author Dipankar Pal <dipankarpal5050@gmail.com>
 * @returns {void}
 */
module.exports.initiate = () => {

    if (!fs.existsSync(path.join('.', 'kopykat.md'))) {
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        var date = day + "/" + month + "/" + year;
        var header = `# KOPYKAT ${date} \n## This Is An Auto-generated File`;

        fs.writeFileSync(path.join('.', 'kopykat.md'), header);
        console.log(`wrote at ${path.join('.','kopykat.md')}`);
    }

}

/**
 * Get the current time in HH:MM:SS AM/PM format
 * @module timestamp
 * @author Dipankar Pal <dipankarpal5050@gmail.com>
 * @returns {string} - 12 Hour format current time HH:MM:SS AM/PM
 */
module.exports.timestamp = () => {
    return new Date(Date.now()).toLocaleTimeString('en-US', {
        hour: 'numeric',
        hour12: true,
        minute: 'numeric',
        second: 'numeric'
    })
}



/**
 * Identify the String and write with timestamp
 * @module write
 * @author Dipankar Pal <dipankarpal5050@gmail.com>
 * @param {string}  data - Data to be written
 * @returns {void} - A Promise
 */
module.exports.write = (data) => {
    if (data.trim() == "") {
        return;
    }
    var time = this.timestamp();
    var text_to_write = "";
    var lang = detector(data);

    if (lang === 'Unknown') {
        //possibly, simple texts
        data = data.trim();
        text_to_write = `\n\n>**${time}** \n\n${data}\n`;

        console.log(text_to_write);
    } else {
        // Possibly a programming snippet
        if (lang !== 'Python') {
            data = data.trim();
        }
        text_to_write = `\n\n>**${time}**\n\n\`\`\`${lang}\n${data}\n\`\`\``;

        console.log(text_to_write);
    }

    fs.appendFileSync(path.join('.', 'kopykat.md'), text_to_write);
}