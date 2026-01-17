export default function App() {
  const jugar = () => {
    window.location.href = "https://www.haxball.com/play";
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#1a1a1a' 
    }}>
      <button 
        onClick={jugar}
        style={{
          padding: '20px 40px',
          fontSize: '24px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
      >
        ¡ENTRAR A HAXBALL!
      </button>
    </div>
  );
}
