function searchInsert(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const middle = math.floor((start + end) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return start;
}

console.log(searchInsert([1, 3, 5, 6], 5));