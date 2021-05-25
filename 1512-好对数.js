var numIdenticalPairs = function (nums) {
    let tag = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        let j = i + 1;
        while (j < nums.length) {
            if (nums[i] === nums[j]) {
                tag++;
            }
            j++;
        }
    }
    return tag
};

[1,2,3,1,1,3]


var numIdenticalPairs = function (nums) {
    let tag = 0;
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let key = String(nums[i])
        if(!map[key]){
            map[key] = 0
        } else {
            map[key] ++
        }
        tag += map[key]
    }
    return tag
};