import * as React from 'react';

export const SomePage: React.FC = ({ piral }) => (
  <div>
    <h1>Extensions:</h1>
    <ul style={{display: "flex", flexDirection: "column"}}>
        <piral.Extension name="topbar-left" />
    </ul> 
  </div> 
);