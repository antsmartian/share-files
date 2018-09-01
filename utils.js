const fs = require('fs');
const archiver = require('archiver');

const zip = (paths,cb) => {
	let output = fs.createWriteStream('share-it.zip'); //creates the zip in the same directory
	let archive = archiver('zip');

	//just for information
	output.on('close',() => {
	    console.info(archive.pointer() + ' total bytes');
	    console.info('archiver has been finalized and the output file descriptor has closed.');
	    cb()
	});

	archive.on('error',(err) => { throw err });
	archive.pipe(output);
	paths.split(",").forEach((path) => {
		archive.glob(path); //add files here
	});
	console.info("Generating zip file, please wait. . . ")
	archive.finalize(); //generate the zip
}

const checkMandatoryArgs = (args) => {
	if(!args.files) {
		console.error("--files <pathname> is required");
		process.exit(1);
	} else { //check if all given files are present
		let files = args.files.split(",");
		files.forEach((file) => {
			if (!fs.existsSync(file)) {
			    console.error(`Given ${file} file doesnt exist. Exiting . . .`)
				process.exit(1);
			}
		})
	}
}

module.exports = {
	zip : zip,
	checkMandatoryArgs : checkMandatoryArgs
}