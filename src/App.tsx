export default function App() {
  const forzarHaxball = (e: React.MouseEvent) => {
    // Evitamos que Discord ignore el clic
    e.preventDefault();
    // Forzamos el cambio de dirección en la ventana principal
    window.top.location.href = "https://www.haxball.com/play";
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
      <h1 style={{ marginBottom: '20px', color: '#4CAF50' }}>HaxBall Launcher</h1>
      
      <button 
        onClick={forzarHaxball}
        style={{
          padding: '20px 40px',
          fontSize: '22px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0px 4px 15px rgba(76, 175, 80, 0.4)'
        }}
      >
        ¡JUGAR AHORA!
      </button>

      <p style={{ marginTop: '20px', color: '#888', fontSize: '14px' }}>
        Si no abre, presiona el botón derecho y dale a "Abrir enlace".
      </p>
    </div>
  );
}
