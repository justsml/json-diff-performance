# Testing Diffing Libs against JSON Serialized Sample Data


## Libs to Test

* jsondiffpatch
* deep-diff
* json-diff 


## Get Started

```sh
npm install
npm start

#### ^^ SAMPLE RESULTS ^^ ####
===> Testing jsondiffpatch
  Total Diff Size:  1284   Size-per-stage:  45 -> 78 -> 1161
  % delta(2199):    +42%   %-change:        45 -> +42% -> +93% 

===> Testing deep-diff
  Total Diff Size:  2199   Size-per-stage:  64 -> 199 -> 1936
  % delta(2199):    +0%    %-change:        64 -> +68% -> +90% 

===> Testing json-diff
  Total Diff Size:  1215   Size-per-stage:  84 -> 165 -> 966
  % delta(2199):    +45%   %-change:        84 -> +49% -> +83% 

Difference in efficiency between biggest & smallest diff set:    45% 

```


## Benchmark Libs

```sh
npm test

#### ^^ SAMPLE RESULTS ^^ ####
Benchmarked: Generate Diffs: jsondiffpatch x 8,076 ops/sec ±1.05% (85 runs sampled)
Benchmarked: Generate Diffs: deep-diff x 2,352 ops/sec ±1.16% (85 runs sampled)
Benchmarked: Generate Diffs: json-diff x 492 ops/sec ±1.44% (83 runs sampled)
Fastest is Generate Diffs: jsondiffpatch
```

