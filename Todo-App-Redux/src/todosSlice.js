import { createSlice } from "@reduxjs/toolkit";
import { loadingCompleted } from './loadingSlice';

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [
            { text: 'Go to the store', isCompleted: false }  ,
            { text: 'New Todo', isCompleted: false } 
        ]
    },  
    reducers : {
        todosUpdated: (state, action) => {
            const updatedTodos = action.payload;
            state.value = updatedTodos;
          },
        markAsCompleted: (state, action) => {
            const text = action.payload;
            const todo = state.value.find(todo => todo.text === text);
            if (todo) {
                todo.isCompleted = true;
            }
        },
        deleteTodo: (state, action) => {
            const text = action.payload
            state.value = state.value.filter(todo => todo.text !== text);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadingCompleted, (state, action) => {
          state.value = action.payload;
        })
      }
});

export const { todosUpdated, markAsCompleted, deleteTodo } = todosSlice.actions;