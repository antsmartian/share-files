const interfaces = require('os').networkInterfaces();
var qrcode = require('qrcode-terminal');

const express = require('express')
const app = express()
const argv = require('minimist')(process.argv.slice(2));
const utils = require('./utils')

utils.checkMandatoryArgs(argv); //exit the program if there are errors!

//sets endpoint for download 
const handleEndpoint = (path) => {
	//just an info :)
	app.get('/', (req, res) => res.send('Hello World! To download, navigate to /download'))
	//download end point
	app.get('/download', function(req, res){
	  var file = __dirname + path;
	  res.download(file); // Set disposition and send it.
	});
}

// capitalize the string
function capitalize(str) {
		let firstLetter = str.charAt(0).toUpperCase();
		return firstLetter.concat(str.substring(1));
}

//process command line input 
//and start the server
const processCmdInput = () => {
	const stdin = process.openStdin();
	console.log("\n\nAvailable interfaces:")
	Object.keys(interfaces).forEach((interface,index) => {
		console.log(`${interface}`)
	})
	console.log("Type your interface down like en0 and press enter:")
	stdin.addListener("data",(val) => {
		const selectedOption = capitalize(val.toString().trim());
		console.log(`you entered: ${selectedOption}`);
		let selectedInterface = interfaces[selectedOption] && interfaces[selectedOption].find((interface) => {
			return interface.family === 'IPv4'
		});

		if(selectedInterface) {
			console.log("\n\nQR Code generated : Please scan and download the file")
			qrcode.generate(`http://${selectedInterface.address}:3000/download`, { small: true });
			app.listen(3000, selectedInterface.address)
			stdin.removeAllListeners('data') //no need to listen console prompt
		} else {
			console.error("Can't start server on the given interface, please try other interface")
		}
	});
}

let isMultipleFiles = argv.files.split(",").length > 1
if(isMultipleFiles) {
	const init = () => {
		handleEndpoint('/share-it.zip');
		processCmdInput();
	}
	utils.zip(argv.files,init); //now create zip
} else {
	handleEndpoint(`/${argv.files}`);
	processCmdInput();
}
/*
minimist qrcode-terminal express archiver
*/