// // components/TodoList.js
// import React from 'react';
// import { connect } from 'react-redux';
// import { removeTodo } from './todoAction';

// const TodoList = ({ todos, removeTodo }) => {

//   // if(!todos){
//   //   return <div>Loading...</div>
//   // }

//   return (
//     <div className='list-task'>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.text}
//             <button onClick={() => removeTodo(todo.id)} className="delete-btn">Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos.todos
//   };
// };

// export default connect(mapStateToProps, { removeTodo })(TodoList);


// components/TodoList.js
import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, editTodo } from './todoAction';

const TodoList = ({ todos, dispatch }) => {

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  }

  const handleEdit = (id, newText) => {
    const newInput = prompt('Enter new todo text:', newText);
    if (newInput !== null) {
      dispatch(editTodo (id,newInput));
    }
  };

  return (
    <div className='list-task'>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemove(todo.id)} className="delete-btn">Remove</button>
            <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps)(TodoList);
