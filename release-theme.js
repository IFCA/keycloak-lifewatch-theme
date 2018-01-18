const fs = require("fs-extra");
const archiver = require("archiver");

// Cloning the repo has to be made here or have I to consider it already done?

const package = require("./package.json");
const outputFile = `wikitolearn-theme-dist-${package.version}.zip`;

const destDir = process.argv[2] || "dist";
const badDestDirRegexp = /^(wikitolearn|node_modules)\/?/;
if (badDestDirRegexp.test(destDir)) {
    console.log("Cannot use that dir, it is an unsafe dir");
    return 0;
}
const output = fs.createWriteStream(outputFile);
const archive = archiver("zip");

// Here you can add your build tools as you want

output.on('close', function () {
    console.log(`${outputFile} has been created: ${archive.pointer()} total bytes written`);
    // Now move the archive created to somewhere else
    fs.move(outputFile, `${destDir}/${outputFile}`, { overwrite: true }).then(() => {
        console.log(`Moved to ${destDir} directory`);
    }).catch((err) => {
        console.log(err);
    });
});

archive.on('error', function(err){
    throw err;
});

archive.pipe(output);
archive.directory("wikitolearn/META-INF/", "META-INF");
archive.directory("wikitolearn/", "theme");
archive.finalize();