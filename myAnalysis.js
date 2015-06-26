console.log("Loaded myAnalysis.js");

var savedSandbox = undefined;
var registeredAnalysis = undefined;
(function (sandbox) {
    registeredAnalysis = new MyAnalysis();
    savedSandbox = sandbox;
    sandbox.analysis = registeredAnalysis;
})(J$);

function MyAnalysis(){
    this.scriptEnter = function (iid, instrumentedFileName, originalFileName) {
      console.log(">>>>>>>>>> scriptEnter: ", instrumentedFileName);
    };

    this.scriptExit = function (iid, exceptionVal) {
      console.log(">>>>>>>>>> scriptExit: ", exceptionVal);
    }
}
