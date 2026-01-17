export default function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#1a1a1a',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      textAlign: 'center',
      margin: 0
    }}>
      <h1 style={{ marginBottom: '10px', color: '#4CAF50', fontSize: '28px' }}>
        HaxBall Launcher
      </h1>
      
      <p style={{ marginBottom: '30px', color: '#ccc' }}>
        Presiona el botón para abrir el juego en tu navegador.
      </p>

      {/* Este enlace tiene estilo de botón para evitar bloqueos de pop-ups de Discord */}
      <a 
        href="https://www.haxball.com/play" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          padding: '18px 36px',
          fontSize: '20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '50px',
          fontWeight: 'bold',
          transition: 'transform 0.2s',
          boxShadow: '0px 8px 20px rgba(76, 175, 80, 0.3)',
          display: 'inline-block'
        }}
      >
        ¡ABRIR JUEGO!
      </a>

      <div style={{ marginTop: '40px', padding: '0 20px' }}>
        <p style={{ color: '#666', fontSize: '12px', lineHeight: '1.5' }}>
          Nota: Si al hacer clic no sucede nada, <br/>
          revisa si tu navegador bloqueó una ventana emergente.
        </p>
      </div>
    </div>
  );
}
