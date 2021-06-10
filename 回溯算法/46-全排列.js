/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const stack = [];
    const len = nums.length
    const used = {}
    const subset = []
    const dfs = (nth) => {
        if (nth === len) {
            subset.push(stack.slice())
        }
        for (let i = 0; i < len; i++) {
            if (!used[nums[i]]) {
                used[nums[i]] = true
                stack.push(nums[i])
                dfs(nth + 1)
                stack.pop()
                used[nums[i]] = false
            }
        }
    }
    dfs(0);
    return subset
};