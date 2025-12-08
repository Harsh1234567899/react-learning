import { createSlice, nanoid } from '@reduxjs/toolkit' // nano id generate uniqe id

const initialState = {
    todos: [{ id: 1, text: "hello world" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => { // state and action is syntax // state give current state value // action give value of action like id and todo task
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo) // this will add toto in initialState todo's object
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((t) => t.id === id);
            if (todo) {
                todo.text = text; // update only text (mutates safely)
            }
        }
    }
})

export const {addTodo ,updateTodo ,removeTodo} = todoSlice.actions

export default todoSlice.reducer