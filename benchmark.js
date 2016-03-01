require('colors');

var Benchmark = require('benchmark')
var suite = new Benchmark.Suite

var testLibs = {
	'jsondiffpatch': 	require('./tests/jsondiffpatch'),
	'deep-diff': 			require('./tests/deep-diff'),
	'json-diff': 			require('./tests/json-diff'),
}

var tests = Object.keys(testLibs)

function testDiffCreation() {
	tests.forEach(function _checkResults(name) {
	  suite.add('Generate Diffs: ' + name, testLibs[name].getArrayOfSequentialDiffs)
	})
	suite
		.on('cycle', function(event) {
		  console.log('Benchmarked:'.yellow, String(event.target).green)
		})
		.on('complete', function() {
		  console.log('Fastest is '.magenta + String(this.filter('fastest').map('name')).red.bold)
		})
		.run({ 'async': false })
}

testDiffCreation()