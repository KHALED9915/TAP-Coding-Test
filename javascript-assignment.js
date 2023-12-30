function missingNumber(nums) {
    // Calculate the sum of numbers from 0 to n
    const expectedSum = (nums.length * (nums.length + 1)) / 2;

    // Calculate the sum of the given array
    const actualSum = nums.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}

numsArray = [0,1];
console.log(missingNumber(numsArray));
