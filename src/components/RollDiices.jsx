import React, { useState } from 'react';
import styled from 'styled-components';

function RollDiices() {
  const [dice, setDice] = useState([1, 1]);

  const num = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
  };

  const rollDice = () => {
    const newDice = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    setDice(newDice);
  };

  return (
    <MainContainer>
      <h1>Roll Dice</h1>
      <ButtonContainer onClick={rollDice}>Roll Dice</ButtonContainer>
      <ImageContainer>
        <img src={`./dice-six-faces-${num[dice[0]]}.png`} alt={`Die 1: ${dice[0]}`} />
        <img src={`./dice-six-faces-${num[dice[1]]}.png`} alt={`Die 2: ${dice[1]}`} />
      </ImageContainer>
    </MainContainer>
  );
}

export default RollDiices;

const MainContainer = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const ButtonContainer = styled.button`
  padding: 16px 20px;
  margin-top: 60px;
  background-color: #00000f;
  color: white;
  font-size: 16px; /* Increased font size for better readability */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transition for hover effects */

  &:hover {
    background-color: blue; /* Change background on hover */
    transform: scale(1.05); /* Slightly enlarge the button on hover */
  }

  &:focus {
    outline: none; /* Remove default focus outline */
    box-shadow: 0 0 5px blue; /* Add a custom focus shadow */
  }

  &:active {
    transform: scale(0.95); /* Slightly shrink the button when clicked */
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
