
require('colors');

var testLibs = {
  'jsondiffpatch':  require('./tests/jsondiffpatch'),
  'deep-diff':      require('./tests/deep-diff'),
  'json-diff':      require('./tests/json-diff'),
  'odiff':          require('./tests/odiff'),
}
console.log('=== TESTS OUTPUT STRING SIZE ==='.magenta);

var tests = Object.keys(testLibs)

var summaries = tests.map(function _checkResults(name) {
  var testPkg = testLibs[name]
  var result  = summarizeSizes(testPkg.getArrayOfSequentialDiffs())
  result.name = name;
  return result
})

// this gets the summaries for variable string chunks, probably could organize this better, but i'm tired...
var summaryChunks = tests.map(function _checkResults(name) {
  var testPkg = testLibs[name]
  var result  = summarizeSizes(testPkg.getVariableStringDiffs())
  result.name = name;
  return result
})

console.log('  Simple/Basic Diffs'.green);
printEfficiency(summaries);

console.log('  Variable String Chunk Diffs'.green);
printEfficiency(summaryChunks);

function summarizeSizes(data) {
  var totalSize = 0
  var stepSizes = []
  var rawSteps = data.map(function _summarize(obj) {
    var raw = JSON.stringify(obj)
    stepSizes.push(raw.length)
    totalSize += raw.length
    return raw
  });
  return {encodedSteps: rawSteps, stepSizes: stepSizes, totalSize: totalSize}
}

function printEfficiency(summaries) {
  var totals = summaries
    .map(function(s) {return s.totalSize})
    .sort(function(a, b) {return a - b});
  var min = totals[0],
      max = totals[totals.length - 1];

  summaries.forEach(function(result) {
    console.log('    => Testing'.red, result.name)
    console.log('      Total Diff Size: '.magenta, result.totalSize, '\tSize-per-stage: ', result.stepSizes.join(' -> '))
    console.log(('      % delta(' + max + '): ').yellow, '+' + getPercentChange(max, result.totalSize) + '%', '\t%-change:       ', getChangesInArray(result.stepSizes).join(' -> +'), '')
  })

  console.log('Difference in size between biggest & smallest diff set:'.yellow.bold, '\t', (getPercentChange(max, min) + '%').red, '\n');
}
function getChangesInArray(arr) {
  return arr.reduce(function(prev, curr, idx, arr) {
    if ( idx === 0 ) { return prev; }
    var chg = getPercentChange(arr[idx], arr[idx - 1])
    prev.push(chg + '%')
    return prev
  }, [arr[0]])
}

function getPercentChange(n1, n2) {
  return (parseFloat((n1 - n2) / parseFloat(n1)) * 100.0).toFixed(0)
}




