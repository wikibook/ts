let nums = ["one", "two", "three", "four", "five"];
let [nums1, nums2] = nums;
console.log(nums1, nums2);
let [, , nums3, nums4,] = nums;
console.log(nums3, nums4);
[nums4, nums3] = [nums3, nums4];
console.log(nums3, nums4);
