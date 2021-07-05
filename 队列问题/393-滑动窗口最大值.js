/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const res = []
    let i = 0;
    let right = k - 1;
    while (right < nums.length) {
        res.push(Math.max(nums.slice(i, right)))
        i++;
        right++;
    }
    return res
};