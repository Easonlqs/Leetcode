var maximumWealth = function (accounts) {
    let max = 0;
    for (let i = 0; i < accounts.length; i++) {
        let total = accounts[i].reduce((t, p) => {
            return t + p
        }, 0)
        max = max < total ? total : max;
    }
    return max
};