import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const Button =({url})=> {

  const Btn = styled.button`
    position: absolute;
    top: 230px;
    left:50%;
    margin-left: -150px;
    width: 420px;
    border: none;
    font-size: 2.1rem;
    font-weight: bold;
    font-family: 'Nunito', sans-serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    border-radius: 6px;
    padding: 0.75rem 0;
    background: #fff;
    color: #1E90FF;
    z-index:10;
    :hover {
      color: #1E90FF;
      opacity: 0.9;
    }
  `
  return (
    <Link to={url}>
      <Btn>Купить скрипт</Btn>
    </Link>
  )
}