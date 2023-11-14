import React from 'react';
import Inlinestyle from './inlinestyle';
import bg from './bg.svg';
import ObjectVariable from './ObjectVariable';
import StyleComponent from './StyleComponent';

function App() {
  const divStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "100%",
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    fontFamily: 'Poppins, sans-serif',
  };

  return (
    <div style={divStyle}>
      <Inlinestyle />
      <ObjectVariable />
      <StyleComponent/>
    </div>
    
  );
}

export default App;
