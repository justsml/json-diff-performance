//See docs https://www.npmjs.com/package/jsondiffpatch
var jsondiffpatch = require('jsondiffpatch')
// .create({
//   arrays: {
//     // default true, detect items moved inside the array (otherwise they will be registered as remove+add) 
//     detectMove: true,
//     // default false, the value of items moved is not included in deltas 
//     includeValueOnMove: false
//   }
// });
var diff  = jsondiffpatch.diff;

var fixtures = require('../fixtures/sample');
var data1 = fixtures.data1;
var data2 = fixtures.data2;
var data3 = fixtures.data3;
var data4 = fixtures.data4;

exports.getArrayOfSequentialDiffs = function () {
	var diffStack = []
  diffStack.push(diff(data1, data2))
  diffStack.push(diff(data2, data3))
  diffStack.push(diff(data3, data4))
  return diffStack
}
