function missingNumber(nums) {

  let n = nums.length;

  let idExpected = n * ((n + 1) / 2);
  let currentId = 0;

  for (let i = 0; i < n; i++) {
    currentId += nums[i];
  }

  return idExpected - currentId;
}

console.log(missingNumber([3, 0, 1]));
