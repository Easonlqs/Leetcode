/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = []
    this.stack1 = []
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val)
    if (this.stack1.length === 0 || val <= this.stack1[this.stack1.length - 1]) {
        this.stack1.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack.pop() === this.stack1[this.stack1.length - 1]) {
        this.stack1.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack1[this.stack1.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */