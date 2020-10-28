import React from 'react'
import styled from 'styled-components'

export const Button =()=> {

  const Btn = styled.a`
    border-radius: 6px;
    padding: 8px 12px;
    background: #fff;
    color: #000;
    position: absolute;
    top:0;
    left:500px;
    :hover {
      color: red;
      opacity: 0.5;
    }
  `
  return (
    <Btn>купить</Btn>
  )
}