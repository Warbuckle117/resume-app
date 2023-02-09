import React, {useState} from 'react';
import './App.css';

function App() {
  const [currentPage, SetCurrentPage] = useState("HomePage");
  return (
    <div className="App">
      <div>This is a work in progress</div>
      <ol>
        <li>Add title bar</li>
        <li>Add Home page</li>
        <li>Add about me page</li>
        <li>Add my projects page</li>
      </ol>
    </div>
  );
}

export default App;
