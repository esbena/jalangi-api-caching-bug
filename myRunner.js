var execSync = require('child_process').execSync;
var path = require('path');
var fs = require('fs');
var jalangi = require("jalangi2")

var BASE = __dirname;
var outputDir = path.resolve(BASE, 'out');
var renamedTargetDir = path.resolve(BASE, 'renamedTargetDir');
var analysis = path.resolve(BASE, 'myAnalysis.js');

if(!fs.existsSync(outputDir)){
  fs.mkdirSync(outputDir);
}
if(!fs.existsSync(renamedTargetDir)){
  fs.mkdirSync(renamedTargetDir);
}

var target = process.argv[2];


function logOptions(outputs){
  console.log("analysis outputs:");
  console.log("stdout:\n%s", outputs.stdout);
  console.log("stderr:\n%s", outputs.stderr);
  console.log("exitCode:\n%s", outputs.exitCode);
}

console.log("Calling jalangi.instrumentDir");
jalangi.instrumentDir({
  inputFiles: [target],
  outputDir: outputDir
}).then(
  function (options) {
    console.log("jalangi.instrumentDir done");
    console.log("Calling jalangi.analyze");
    var instrumentedTarget = options.outputDir + "/" + path.basename(target);
    console.log("   with %s", instrumentedTarget);
    return jalangi.analyze(instrumentedTarget, [analysis]);
  },
  function(){
    console.log("jalangi.instrumentDir failed");
  }
)
.then(
  function(outputs){
    console.log("jalangi.analyze done");
    logOptions(outputs);
  },
  function(outputs){
    console.log("jalangi.analyze failed");
    logOptions(outputs);
  });
