function App() {
  const jugarHaxball = () => {
    window.open("https://www.haxball.com/play", "_self");
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#1a1a1a', 
      color: 'white' 
    }}>
      <h1 style={{ marginBottom: '20px' }}>HaxBall Launcher</h1>
      <button 
        onClick={jugarHaxball}
        style={{
          padding: '15px 30px',
          fontSize: '20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        ¡ENTRAR A JUGAR!
      </button>
    </div>
  );
}

export default App;
