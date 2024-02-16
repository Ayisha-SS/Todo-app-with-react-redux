// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { addTodo } from './todoAction';

// const AddTodo = ({ addTodo }) => {
//   const [text, setText] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text.trim() !== '') {
//       addTodo({ text });
//       setText('');
//     }
//   };

//   const handleInputChange = (e) => {
//     setText(e.target.value);
//   };

//   return (
//     <form  className="input-container" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={text}
//         onChange={handleInputChange}
//         className="input"
//       />
//       <button type="submit" className="add-btn">Add Todo</button>
//     </form>
//   );
// };

// export default connect(null, { addTodo })(AddTodo);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './todoAction';

const AddTodo = ({ dispatch }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = () => {
    // e.preventDefault();
    if (todoText.trim() !== '') {
      dispatch(addTodo({ id: Date.now(), text: todoText }));
      setTodoText('');
    }
  };

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={todoText} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};

export default connect()(AddTodo);

