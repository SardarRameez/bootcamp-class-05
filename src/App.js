import React, { useState } from 'react';
import './App.css';
import { Parent } from './Parent';
import { Child2 } from './Child2';
import ValueContext from './ValueContext';

function App() {
  let count=useState(5)
  return (
    <ValueContext.Provider value={count}>
      Hello world
      <Parent></Parent>
      <Child2></Child2>
    </ValueContext.Provider>
  );
}

export default App;
