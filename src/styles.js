// src/styles.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('https://www.google.com.mx/imgres?q=imagen%20digital%20de%20tecnologia&imgurl=https%3A%2F%2Fwww.seoenmexico.com.mx%2Fstorage%2F2023%2F11%2Fbeneficios-cultura.jpg&imgrefurl=https%3A%2F%2Fwww.seoenmexico.com.mx%2Fblog%2Fcultura-digital%2F&docid=sloBp7KG4pbi7M&tbnid=eD3ko9RKC3xCqM&vet=12ahUKEwiR4Lm7_taGAxW44ckDHZDuDskQM3oECF8QAA..i&w=1300&h=729&hcb=2&ved=2ahUKEwiR4Lm7_taGAxW44ckDHZDuDskQM3oECF8QAA'); /* Ruta a tu imagen de fondo */
  background-size: cover; /* Asegura que la imagen cubra todo el contenedor */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  padding: 20px;
`;

export const ProfileCard = styled.div`
  background: rgba(255, 255, 255, 0.8); /* Fondo semitransparente para que el texto sea legible */
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 600px;
  width: 100%;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 15px 30px;
  margin: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;
