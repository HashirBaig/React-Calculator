import React from 'react';
import './App.css';

//importing components
import Calculator from './components/Calculator';
import IntroHeader from './components/IntroHeader';


function App() {
  return (
    <React.Fragment>
      <IntroHeader />
      <Calculator />
    </React.Fragment>
  );
}

export default App;
