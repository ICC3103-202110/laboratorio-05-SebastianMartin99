function calculateTip(billAmount, percentage){
    return parseInt(billAmount)*parseInt(percentage)/100
}

function sum(billAmount){
    const newTip = calculateTip(billAmount, percentage)
    return parseInt(billAmount)+newTip
}

function update(input, model){
    const {billAmount} = model
    const {percentage} = model
    const newBillAmount = billAmount
    const newPercentage = percentage
    const newTip = calculateTip(billAmount, percentage)
    const newTotal = sum(billAmount, percentage)
    return {
        ...model,
        billAmount: newBillAmount,
        percentage: newPercentage,
        tip: newTip,
        total: newTotal,
        input: input
    }

}

module.exports = {
    update
}