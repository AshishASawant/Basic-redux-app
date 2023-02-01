export const withdrawMoney=(amount)=>{
    return {
        type:'withdraw',
        payload:amount
    }
}

export const depositeMoney=(amount)=>{
    return {
        type:"deposite",
        payload:amount
    }
}