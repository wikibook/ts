let nums = ["one","two","three","four","five"];
let [nums1, nums2] = nums; // 위치에 따라 순서대로 디스트럭처링 수행
console.log(nums1, nums2);

let [,,nums3,nums4,] = nums; // ,를 이용해 부분 생략 가능
console.log(nums3, nums4);

[nums4, nums3] = [nums3, nums4]; // 디스트럭처링을 이용해 변수 값을 교체 함
console.log(nums3, nums4);

let [color1, color2="blue"] = ["black"]; // 디폴트 값 지정 가능
console.log(color1, color2);