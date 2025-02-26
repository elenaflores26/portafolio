// src/pages/Tema1.js
import React from 'react';
import '../styles.css'; // Asegúrate de importar tu archivo de estilos

const Tema1 = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <br></br> <br></br> <br></br>
      <h1>Proyecto en Android</h1>

      <h2>
        Entorno de desarrollo integrado IDE, esta basado en la herramienta de
        Intelli J IDEA y cuenta con un potente editor de códigos y multitud de
        funciones que permiten una mayor productividad durante el desarrollo de
        aplicaciones
      </h2>
      <img
        src='data:image/png;base64,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'
        className="animated-image"
        alt="Proyecto en Android"
      />
      <br></br>
      <a
        href="https://github.com/elenaflores26/firebase.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver en GitHub
      </a>
    </div>
  );
};

export default Tema1;
