const formatMoney = (val) => {
    let [mainVal, decimalVal] = val.split(".")
    if(decimalVal !== undefined) {
        if(decimalVal.length === 2) return val
        if(decimalVal.length === 1) decimalVal = decimalVal.padEnd(2, "0")
        return mainVal + "." + decimalVal;
    }
    decimalVal = "00"
    return mainVal + "." + decimalVal;
}

export {
    formatMoney
}