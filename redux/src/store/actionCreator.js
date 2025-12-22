export const depositemoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount 
        })
    }
}
export const withdrawemoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}