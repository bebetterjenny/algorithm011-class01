/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    n = nums.length;
    if (n == 0) {
        return;
    }
    k %= n;
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
    function reverse (start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start ++;
        end --;
    }
}
};