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