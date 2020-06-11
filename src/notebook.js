// @ts-check

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
		const dateObject = new Date();
		const month = dateObject.getUTCMonth() + 1; // Months from 1-12
		const day = dateObject.getUTCDate();
		const year = dateObject.getUTCFullYear();

		const date = day + '/' + month + '/' + year;
		const header = `# KOPYKAT ${date} \n## This Is An Auto-generated File`;

		fs.writeFileSync(path.join('.', 'kopykat.md'), header);
	}
};

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
	});
};

/**
 * Identify the String and write with timestamp
 * @module write
 * @author Dipankar Pal <dipankarpal5050@gmail.com>
 * @param {string}  data - Data to be written
 * @returns {void} - A Promise
 */
module.exports.write = data => {
	if (data.trim() == '') {
		return;
	}

	const time = this.timestamp();
	let text_to_write = '';
	const lang = detector(data);

	if (lang === 'Unknown') {
		// Possibly, simple texts
		data = data.trim();
		text_to_write = `\n\n>**${time}** \n\n${data}\n`;
	} else {
		// Possibly a programming snippet
		if (lang !== 'Python') {
			data = data.trim();
		}

		text_to_write = `\n\n>**${time}**\n\n\`\`\`${lang}\n${data}\n\`\`\``;
	}

	fs.appendFileSync(path.join('.', 'kopykat.md'), text_to_write);
};
