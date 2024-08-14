const calculateSum = require('./calculateSum');

const testArray = [1, 2, 3, 4];
const expectedSum = 10;

const result = calculateSum(testArray);

if (result === expectedSum) {
    console.log('Test passed!');
    process.exit(0); // Exit with a status code of 0 (success)
} else {
    console.error('Test failed!');
    process.exit(1); // Exit with a status code of 1 (failure)
}
