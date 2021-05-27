/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (!s) {
        return false
    }
    const toRight = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(toRight[s[i]])
        } else {
            let c = stack.pop()
            if (c !== s[i]) {
                return false
            }
        }
    }
    return !stack.length
};