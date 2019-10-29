require('colors');

var Benchmark = require('benchmark')

var testLibs = {
	'jsondiffpatch': 	require('./tests/jsondiffpatch'),
	'deep-diff': 			require('./tests/deep-diff'),
	'json-diff': 			require('./tests/json-diff'),
	'odiff': 					require('./tests/odiff'),
	'fast-json-patch':				require('./tests/fast-json-patch')
}
var tests = Object.keys(testLibs)

function testDiffCreation(title, testMethodName, next) {
	var suite = new Benchmark.Suite()
	tests.forEach(function _checkResults(name) {
	  suite.add(name.magenta + '	' + title + ': '.green, testLibs[name][testMethodName])
	})
	return suite
	.on('cycle', function(event) {
	  console.log('Benchmarked:'.yellow, String(event.target).green)
	})
	.on('complete', function() {
	  console.log('Fastest is '.magenta + String(this.filter('fastest').map('name')).red.bold);
	  if (next) { next(); }
	})
	.run({ 'async': false })
}

console.log('=== TESTS OPS/SECOND ==='.magenta);
testDiffCreation('Simple Diffs Benchmark', 'getArrayOfSequentialDiffs', function _next() {
	testDiffCreation('Variable String Test', 'getVariableStringDiffs');
});

