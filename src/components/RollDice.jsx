import React, { useState } from 'react';
import styled from 'styled-components';

// Array of dice images
// const diceImages = [
//   './dice-six-faces-five.png',
//   './dice-six-faces-four.png',
//   './dice-six-faces-one.png',
//   './dice-six-faces-six.png',
//   './dice-six-faces-three.png',
//   './dice-six-faces-two.png',


// ];
const num={
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
}
function RollDice() {
  const [dice, setDice] = useState([1, 1]);

  const rollDice = () => {
    const newDice = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1
    ];
    setDice(newDice);
  };

  return (
    <MainContainer>
      <h1>Roll Two Dice</h1>
      <RollButton onClick={rollDice}>Roll Dice</RollButton>
      <DiceContainer>
     
      <DiceImage src={`./dice-six-faces-${num[dice[0]]}.png`} alt={`Die 1: ${dice[0]}`} />
      <DiceImage src={`./dice-six-faces-${num[dice[1]]}.png`} alt={`Die 2: ${dice[1]}`} />
        {
            console.log(`./dice-six-faces-${dice[0]}`)
           

        }


      </DiceContainer>
    </MainContainer>
  );
}

export default RollDice;

// Styled Components
const MainContainer = styled.div`
  text-align: center;
  margin: 20px;
`;

const RollButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const DiceImage = styled.img`
  width: 100px; /* Adjust size as needed */
  margin: 0 10px;
`;
