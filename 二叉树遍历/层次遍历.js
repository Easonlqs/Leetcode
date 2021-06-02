const root = {
    val: "A",
    left: {
        val: "B",
        left: {
            val: "D"
        },
        right: {
            val: "E"
        }
    },
    right: {
        val: "C",
        right: {
            val: "F"
        }
    }
};
// 一层一层遍历
function bfs(root) {
    let queue = []
    queue.push(root)
    while (queue.length) {
        let top = queue.shift()
        if (top.left) {
            queue.push(top.left)
        }
        if (top.right) {
            queue.push(top.right)
        }
        console.log(top.val);
    }
}