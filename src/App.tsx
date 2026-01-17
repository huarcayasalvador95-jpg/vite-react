import React from 'react';

function App() {
  const jugar = () => {
    // Intentamos abrir en pestaña nueva
    window.open("https://www.haxball.com/play", "_blank");
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#1a1a1a', 
      color: 'white',
      fontFamily: 'sans-serif'
    }}>
      <h1>HaxBall Ready</h1>
      <button 
        onClick={jugar}
        style={{
          padding: '20px 40px',
          fontSize: '20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
      >
        ¡CLIC PARA JUGAR!
      </button>
    </div>
  );
}

export default App;
