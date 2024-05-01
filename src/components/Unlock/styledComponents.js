// styledComponents.js
import styled from 'styled-components'

export const DivContainer = styled.div`
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  height: 100vh;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  font-weight: 500;
`

export const Image = styled.img`
  height: 100px;
`

export const Text = styled.p`
  font-size: 35px;
  font-family: 'Roboto';
`

export const Button = styled.button`
  border: none;
  background-color: #06b6d4;
  padding: 15px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`
