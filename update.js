function calculateTip(percentage){
    return
}

function sum(billAmount, percentage){
    return
}

function update(input, model){
    const {billAmount} = model
    const {percentage} = model
    const {tip} = model
    const {total} = model
    const newBillAmount = billAmount
    const newPercentage = percentage
    const newTip = calculateTip(percentage)
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