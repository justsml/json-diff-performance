var diff = require('deep-diff').diff;

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
