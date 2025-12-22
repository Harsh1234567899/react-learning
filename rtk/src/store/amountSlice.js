import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    amount: 0
}
export const amountSlice = createSlice({
    name: "amount",
    initialState,
    reducers: {
        increase: (state,action) => {
            if (state.amount == 5) {
                return
            }
             state.amount += 1
        },
        decrease: (state,action)=> {
            if (state.amount == 0) {
                return
            }
             state.amount -= 1
        }
    }
})

export const {increase ,decrease} = amountSlice.actions
export default amountSlice.reducer