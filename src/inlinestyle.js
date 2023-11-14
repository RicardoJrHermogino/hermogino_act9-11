import React from 'react';

const InlineStyle = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;0,700;0,900;1,200&display=swap" rel="stylesheet"/>

    <br/><br/><div style={{ width: "600px", marginLeft: "200px"}}>
      <span style={{fontSize:"15px"}}>Home</span>
      <span style={{marginLeft:"110px", fontSize:"15px"}}>About me</span>
      <span style={{marginLeft:"110px", fontSize:"15px"}}>Contact</span>
      <span style={{marginLeft:"110px", fontSize:"15px"}}>Skills</span>
    </div><br/><br/>
    <div style={{textAlign:"center", width: "600px", marginLeft: "135px"}}>
    <span style={{fontSize:"23px", fontWeight: "bold"}}>Sign in</span>

    </div>
  </>
);

export default InlineStyle;

