import React from 'react';

const WelcomePage = () => {
  const handleClick = () => {
    alert('¡Gracias por visitarnos!');
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.title}>Bienvenidos a La Tienda Event Planner</h1>
        <p style={styles.subtitle}>Tu aliado perfecto para planificar eventos inolvidables.</p>
        <button style={styles.button} onClick={handleClick}>Comenzar</button>
      </div>
    </div>
  );
};

const styles = {
  body: {
    margin: 0,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: 'linear-gradient(135deg, #f9d423, #ff4e50)',
    color: '#fff',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: '40px 60px',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    maxWidth: '400px',
    width: '90%',
  },
  title: {
    fontSize: '2.8rem',
    marginBottom: '10px',
    letterSpacing: '2px',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#ff4e50',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '30px',
    fontSize: '1rem',
    color: 'white',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(255,78,80,0.6)',
    transition: 'background-color 0.3s ease',
  },
};

export default WelcomePage;

