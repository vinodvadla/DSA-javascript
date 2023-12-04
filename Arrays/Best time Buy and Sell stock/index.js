var maxProfit = function (prices) {
    let buy = prices[0]
    let profit=0;
    for (let i = 1; i <= prices.length - 1; i++) {
        if(buy>prices[i]){
            buy=prices[i]
        }
        else{
            let temp=prices[i]-buy;
            if(temp>profit){
                profit=temp
            }
        }
    }
    return profit;
}
console.log(maxProfit([1,2]))