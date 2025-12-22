export const  reducers = (state =0 ,action) => {
    if (action.type === 'deposit') {
        if (state === 5) {
            return
        }
        return state + action.payload
    }
    else if (action.type === 'withdraw') {
        if (state === 0) {
            return
        }
        return state - action.payload
    }
    else {
        return state
    }
}