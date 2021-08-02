
// 时间复杂度 O(n^2)
function bubbleSort(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

function betterbubbleSort(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

function bestbubbleSort(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        let flag = false
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = true
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        // 若一次交换也没发生，则说明数组有序，直接放过
        if (!falg) return arr
    }
    return arr
}