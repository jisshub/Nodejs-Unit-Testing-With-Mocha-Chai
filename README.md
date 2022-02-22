## Node Unit Testing with Mocha and Chai

### Installation of Mocha and Chai

**References**:
    
[Chai JS](https://www.chaijs.com/)

[Mocha Installation](https://mochajs.org/#installation)

```bash
npm install --save-dev mocha
npm install chai
```

### Open package.json and add test field inside script

**package.json**
```json
"scripts": {
    "test": "mocha */*.test.js", 
    "test-watch": "nodemon --exec \"npm test\"",
    "start": "NODE_ENV=production node server",
    "dev": "nodemon server"
}
```
## Creating test file


### Write Logic

**handlers/basicMathOpr.js**

```js
exports.sumOfTwoNums = (firstNum, secNum) => {
    return firstNum + secNum;
}

exports.diffOfTwoNums = (firstNum, secNum) => {
    return firstNum - secNum;
}
```

### Write test case for above logic

**handlers/basicMathOpr.test.js**

```js
const chai = require('chai');
const {sumOfTwoNums, diffOfTwoNums} = require('../handlers.js/basicMathOpr.js');
const expect = chai.expect;

const input = {
    sumOfTwoNums: {
        firstNum: 20,
        secNum: 10
    },
    diffOfTwoNums: {
        firstNum: 20,
        secNum: 10
    }
}

const ouput = {
    sumOfTwoNums: {
        value: 30
    },
    diffOfTwoNums: {
        value: 10
    }
}

describe('#basicMathOpr', () => {
    context('sumOfTwoNums', () => {
        it('should return 30', () => {
            let result= sumOfTwoNums(input.sumOfTwoNums.firstNum, input.sumOfTwoNums.secNum);
            expect(ouput.sumOfTwoNums.value).to.equal(result);
        });
    });
    context('#diffOfTwoNums', () => {
        it('should return 10', () => {
            let result = diffOfTwoNums(input.diffOfTwoNums.firstNum, input.diffOfTwoNums.secNum);
            expect(ouput.diffOfTwoNums.value).to.equal(result);
        })
    });
})
```


### Run test file

```bash
npm test
```
If test are passed you will see the following message:

```bash
> unit-testing-nodejs@1.0.0 test /home/fact12/Documents/factweavers/Training/unit-testing-nodejs
> mocha */*.test.js



  #basicMathOpr
    sumOfTwoNums
      ✔ should return 30
    #diffOfTwoNums
      ✔ should return 10


  2 passing (12ms)

```

### Mocha Test Hooks

```js
before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });
```