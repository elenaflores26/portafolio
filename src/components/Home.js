import React from 'react';
import { Container, ProfileCard, Button, ButtonContainer } from '../styles';
import { Link } from 'react-router-dom';
import '../styles.css'; // Importa tu archivo de estilos CSS donde definirás las animaciones

const Home = () => {
  return (
    <Container>
      <ProfileCard className="profile-card"> 
        <img 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKhtYw6xjmF0LcWz9X0eXzV70xDykoZaeWng&s'
          alt="" 
          style={{ borderRadius: '10%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '0px' }}
        />
        <h1>MARIA ELENA FLORES ARCE</h1>
        <h2>Edad:</h2><p> 23 años</p>
        <h2>Profesión:</h2>
        <p>Desarrollador de Software</p>
      </ProfileCard>
      <ButtonContainer>
        <Link to="/tema1"><Button className="button">Android</Button></Link>
        <Link to="/tema2"><Button className="button">React</Button></Link>
        <Link to="/tema3"><Button className="button">Arduino</Button></Link>
        <Link to="/tema4"><Button className="button">Java</Button></Link>
        <Link to="/tema5"><Button className="button">Angular</Button></Link>
        <Link to="/tema6"><Button className="button">Python</Button></Link>
      </ButtonContainer>
    </Container>
  );
}

export default Home;
