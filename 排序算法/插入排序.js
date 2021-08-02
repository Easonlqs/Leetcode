
// 最好 O(n) 最坏完全逆序 O(n^2) 平均时间复杂度：O(n^2)
function insertSort(arr) {
    let len = arr.length
    for (let i = 1; i < len; i++) {
        let j = i;
        let temp = arr[i]
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = temp
    }
    return arr
}