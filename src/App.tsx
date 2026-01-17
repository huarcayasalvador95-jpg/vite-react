export default function App() {
  const jugarHaxball = () => {
    // Al usar "_blank", el juego se abre en el navegador real fuera de Discord
    // Esto evita que el sistema de seguridad de HaxBall bloquee la pantalla
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
      <h1 style={{ marginBottom: '20px', color: '#4CAF50' }}>HaxBall Launcher</h1>
      
      <button 
        onClick={jugarHaxball}
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
        El juego se abrirá en una pestaña nueva para evitar bloqueos.
      </p>
    </div>
  );
}
