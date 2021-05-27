// 15. 力扣 三数之后（对撞指针）
const threeSum = function (nums) {
    const res = [];
    const nums = nums.sort((a, b) => {
        return a - b;
    });
    for (let i = 0; i < nums.length - 2; i++) {
        let k = i + 1;
        let j = nums.length - 1;
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        while (k < j) {
            if (nums[i] + nums[k] + nums[j] < 0) {
                k++;
                while (k < j && nums[k] === nums[k - 1]) {
                    k++;
                }
            } else if (nums[i] + nums[k] + nums[j] > 0) {
                j--;
                while (k < j && nums[j] === nums[j + 1]) {
                    j--;
                }
            } else {
                res.push([nums[i], nums[k], nums[j]]);
                k++;
                j--;
                while (k < j && nums[k] === nums[k - 1]) {
                    k++;
                }
                while (k < j && nums[j] === nums[j + 1]) {
                    j--;
                }
            }
        }
    }
    return res;
};