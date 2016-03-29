
//See docs https://www.npmjs.com/package/jsondiffpatch
var diff = require('json-diff').diff;

var fixtures = require('../fixtures/sample');
var data1 = fixtures.data1;
var data2 = fixtures.data2;
var data3 = fixtures.data3;
var data4 = fixtures.data4;

var stringChunks = require('../fixtures/sample-string-blocks');
var chunk1 = stringChunks.data1;
var chunk2 = stringChunks.data2;
var chunk3 = stringChunks.data3;
var chunk4 = stringChunks.data4;
var chunk5 = stringChunks.data5;

exports.getVariableStringDiffs = function () {
  var diffStack = []
  diffStack.push(diff(chunk1, chunk2))
  diffStack.push(diff(chunk2, chunk3))
  diffStack.push(diff(chunk3, chunk4))
  diffStack.push(diff(chunk4, chunk5))
  return diffStack
}

exports.getArrayOfSequentialDiffs = function () {
	var diffStack = []
  diffStack.push(diff(data1, data2))
  diffStack.push(diff(data2, data3))
  diffStack.push(diff(data3, data4))
  return diffStack;
}
