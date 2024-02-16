// reducers/todoReducer.js
import { ADD_TODO,REMOVE_TODO,EDIT_TODO } from "./todoAction";

const initialState = {
    todos: []
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, action.payload]
        };
      case REMOVE_TODO:
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
      case EDIT_TODO:
        return {
          ...state,
          todos:state.todos.map(todo => {
            if (todo.id === action.payload.id) {
              return {...todo,text:action.payload.newText };
            }
            return todo;
          })
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  

// import { produce } from 'immer'
// const initialState = {
//     todos: []
// };

// const todoReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return produce(state, draftState => {
//                 draftState.todos.push(action.payload)
//             })
//         case 'REMOVE_TODO':
//             return produce(state, draftState => {
//                 const todoIndex = draftState.todos.findIndex(todo => todo.id === action.payload)
//                 if (todoIndex > -1) {
//                     draftState.todos.splice(todoIndex, 1)
//                 }
//             })
//         default:
//             return state;
//     }
// };

// export default todoReducer;