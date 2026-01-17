import { useEffect } from 'react';

export default function App() {
  
  const abrirHaxball = () => {
    // Esta es la forma oficial. Si el SDK no carga, usa el respaldo.
    window.open("https://www.haxball.com/play", "_blank");
  };

  return (
    <div style={{ 
      display: 'flex', flexDirection: 'column', justifyContent: 'center', 
      alignItems: 'center', height: '100vh', backgroundColor: '#1a1a1a', color: 'white' 
    }}>
      <h1 style={{ color: '#4CAF50' }}>HaxBall 2 Oficial</h1>
      <p>Si el botón no abre, dale clic derecho y "Abrir enlace"</p>
      
      <button 
        onClick={abrirHaxball}
        style={{
          padding: '20px 40px', fontSize: '22px', backgroundColor: '#4CAF50',
          color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold'
        }}
      >
        ¡JUGAR AHORA!
      </button>
    </div>
  );
}
