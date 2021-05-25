/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    let l = s.length;
    let res = [];
    let n = 0;
    while (n < l) {
        let c = s.charAt(n);
        let num = 0;
        while (n < l && c === s.charAt(n)) {
            n++;
            num++;
        }
        res.push(num);
    }
    let total = 0;
    for (let i = 0; i < res.length - 1; i++) {
        total += Math.min(res[i], res[i + 1])
    }
    return total
};