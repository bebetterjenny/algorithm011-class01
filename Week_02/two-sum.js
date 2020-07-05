/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    nums.forEach((num, i) => {
        map.set(num, i);
    })
    for (let i = 0; i < nums.length; i ++) {
        if (map.has(target - nums[i]) && i !== map.get(target - nums[i])) {
            return [i, map.get(target - nums[i])];
        }
    };
};