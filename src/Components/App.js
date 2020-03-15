import React from 'react';
import '../App.css';
import MainCounters from "./MainCounters";

function App() {
  return (
    <div className="container-md">
      <h2 className='text-center'>Counters</h2>
      <MainCounters/>
    </div>
  );
}

export default App;
