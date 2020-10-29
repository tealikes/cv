import React from 'react'
import styled from 'styled-components'

export const Button =()=> {

  const Btn = styled.button`
    position: absolute;
    top: 230px;
    left:50%;
    margin-left: -150px;
    width: 300px;
    border: none;
    font-size: 2.2rem;
    font-weight: bold;
    font-family: 'Nunito', sans-serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    border-radius: 6px;
    padding: 0.75rem 0;
    background: #fff;
    color: #000;
   
    z-index:10;
    :hover {
      color: #1E90FF;
      opacity: 0.9;
    }
  `
  return (
    <Btn>Купить</Btn>
  )
}