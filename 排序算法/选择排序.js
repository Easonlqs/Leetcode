
// 时间复杂度 O(n^2)
function selectSort(arr) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let index = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[index]) {
                index = j
            }
        }
        [arr[i], arr[index]] = [arr[index], arr[i]]
    }
    return arr
}