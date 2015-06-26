# jalangi-api-caching-bug
Proof-of-concept Jalangi-bug.
See https://github.com/Samsung/jalangi2/issues/58

## Setup:
```
npm i
```

## test1, works fine: the two runs are identical
```
$ node myRunner test1.js
Calling jalangi.instrumentDir
jalangi.instrumentDir done
Calling jalangi.analyze
   with /home/esbena/tmp/test-jalangi/out/test1.js
jalangi.analyze done
analysis outputs:
stdout:
Loaded myAnalysis.js
>>>>>>>>>> scriptEnter:  /home/esbena/tmp/test-jalangi/out/test1.js
Loaded test1.js
>>>>>>>>>> scriptExit:  undefined

stderr:

exitCode:
0
$ node myRunner.js test1.js
Calling jalangi.instrumentDir
jalangi.instrumentDir done
Calling jalangi.analyze
   with /home/esbena/tmp/test-jalangi/out/test1.js
jalangi.analyze done
analysis outputs:
stdout:
Loaded myAnalysis.js
>>>>>>>>>> scriptEnter:  /home/esbena/tmp/test-jalangi/out/test1.js
Loaded test1.js
>>>>>>>>>> scriptExit:  undefined

stderr:

exitCode:
0

```

## test2, does not work: : the two runs are different
```
$ node myRunner.js test2.js
Calling jalangi.instrumentDir
jalangi.instrumentDir done
Calling jalangi.analyze
   with /home/esbena/tmp/test-jalangi/out/test2.js
jalangi.analyze done
analysis outputs:
stdout:
Loaded myAnalysis.js
>>>>>>>>>> scriptEnter:  /home/esbena/tmp/test-jalangi/out/test2.js
Loaded test2.js
>>>>>>>>>> scriptExit:  undefined

stderr:

exitCode:
0
$ node myRunner.js test2.js
Calling jalangi.instrumentDir
jalangi.instrumentDir done
Calling jalangi.analyze
   with /home/esbena/tmp/test-jalangi/out/test2.js
jalangi.analyze done
analysis outputs:
stdout:
Loaded myAnalysis.js

stderr:

exitCode:
0
```
