// App.js
// import React from 'react';
// import AddTodo from './Todo/AddTodo';
// import './App.css'
// import TodoList from './Todo/TodoList';

// const App = () => {
//   return (
//     <div className="todo-container">
//       <div className='header'>TO-DO LIST</div>
//       <div className="add-task">
//         <AddTodo />
//       </div>
//       <div className="tasks">
//         <TodoList />
//       </div>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import './App.css'
import { Provider } from 'react-redux';
import AddTodo from './Todo/AddTodo';
import TodoList from './Todo/TodoList';
import store from './Todo/todoStore';

const App = () => {
  return (
    <div className="todo-container">
      <div className='header'>TO-DO LIST</div>
      <div className="add-task">
        <AddTodo />
      </div>
      <div className="tasks">
        <TodoList />
      </div>
    </div>
  );
};

export default App;

