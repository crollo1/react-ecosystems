import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader';

// export default function App () {
//     <div className="App">
//         <h1>Hello, World!</h1>
//     </div>
// };

const App = () => (
    <div className="App">
      <h1>Hello, World!</h1>
    </div>
);

export default hot(module)(App);


