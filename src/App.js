import React from 'react';
import Box from './Box';
import './App.css';

function App() {
  return (
    <div className="App">
      <Box height={10} width={20} color="purple" />
      <Box height={20} width={15} color="teal" />
    </div>
  );
}

export default App;
