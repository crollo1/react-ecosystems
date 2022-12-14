import React from 'react';
import './App.css';
import TodoList from './todos/TodoList';
import { hot } from 'react-hot-loader';

// export default function App () {
//     <div className="App">
//         <h1>Hello, World!</h1>
//     </div>
// };

const App = () => (
    <div className="App">
      <TodoList />
    </div>
);

export default hot(module)(App);


