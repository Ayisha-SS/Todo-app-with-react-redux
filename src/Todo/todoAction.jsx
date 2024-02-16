// export const addTodo = (text) => {
//     return {
//       type: 'ADD_TODO',
//       payload: {
//         id: new Date().getTime(), // Generate unique id for each todo
//         text
//       }
//     };
//   };
  
//   export const removeTodo = (id) => {
//     return {
//       type: 'REMOVE_TODO',
//       payload: id
//     };
//   };

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export const addTodo = (todo) => ({
  type:ADD_TODO,
  payload:todo
});

export const removeTodo = (id) => ({
  type:REMOVE_TODO,
  payload:id
});

export const editTodo = (id,newText) => ({
  type:EDIT_TODO,
  payload:{ id, newText }
});
  