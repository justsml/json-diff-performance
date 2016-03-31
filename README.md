# Testing Diffing Libs against JSON Serialized Sample Data


## Libraries Tested

* [jsondiffpatch](https://www.npmjs.org/package/jsondiffpatch)
* [deep-diff](https://www.npmjs.org/package/deep-diff)
* [json-diff](https://www.npmjs.org/package/json-diff)
* [odiff](https://www.npmjs.org/package/odiff)

## What's Measured?

1. `npm start` -> compares the size of the output string data.
1. `npm test`  -> benchmarks raw ops/sec.


## Get Started

```sh
npm install
```

## Compares the size of the outputs

```sh
npm start
```

### (My) Results

> Test Environment: MacBook Pro 2.5Ghz 16GB (2015)

![image](https://cloud.githubusercontent.com/assets/397632/14176377/e1ce56d0-f70d-11e5-9edc-9eb91205fd10.png)

> Test Environment: Debian i7-4790K 4.0GHz 32GB

![image](https://cloud.githubusercontent.com/assets/397632/14099089/9399c0b4-f53f-11e5-9d48-d89447742205.png)



## Benchmarks Ops/sec

```sh
npm test
```

### (My) Results

> Test Environment: MacBook Pro 2.5Ghz 16GB (2015)

![image](https://cloud.githubusercontent.com/assets/397632/14156163/34860800-f682-11e5-9aad-df88484f7c49.png)

> Test Environment: Debian i7-4790K 4.0GHz 32GB

![image](https://cloud.githubusercontent.com/assets/397632/14098912/d7ebbcec-f53d-11e5-957a-d4a02c6f86c7.png)

