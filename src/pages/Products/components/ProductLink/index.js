import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const LinkToProduct = styled(Link)`
  text-decoration: none;
  font-size: 1.16rem;
  color: green;
  display: block;
  line-height: 70px;
  background: #eee;
  margin-top: 12px;
  margin-bottom: 12px;
  padding: 0 15px;
  border-radius: 6px;
`
export const ProductLink = ({id, text, price, name}) =>{
  return(
    <LinkToProduct to={`product/${id}`}>
      {id}. <strong>{name}</strong>&nbsp;&nbsp; <i>{text}</i>
    </LinkToProduct> 
  )
}