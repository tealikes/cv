import React from 'react'
import styled from 'styled-components'
import Images from '../../components/Images'
import {ProductLink} from './components/ProductLink'
import {productsState} from '../../state'

const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 680px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  `
const WrapBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 720px;
    height: 720px;
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    z-index: 10;
  `

const Body = styled.div`
  margin-top:1rem;
  margin-bottom: 1rem;
  flex-grow: 1;
  flex-shrink:0; font-family: 'Nunito', sans-serif;
  /* flex: 1 0 80% */
`

const Head = styled.div`
  font-size: 1.4rem;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  p{
    margin-top: 1rem;
    font-size: 1.1rem;
    font-weight: normal;
  }
`

const Footer = styled.div`
  display:block;
  background-color:  rgba(75, 0, 130, .5);
  font-size: 1.1rem;
  font-family: 'Nunito', sans-serif;
  margin: 0px -30px -30px -30px;
  padding: 15px 30px 15px 30px;
  color: #fff;
  a {
    color: #ffff00;
    font-weight: bold;
    text-decoration: none;
  }
`

const List = productsState.map((prod, key)=>
  <ProductLink
    key={key + 'prod'}
    id={prod.id} 
    text={prod.text}
    name={prod.name}
  />
) 

export const Products = () => {
  return (
    <Section>
      <Images isAnimation={true}/>
      <WrapBlock>
        <Head>
          Скрипты для React JS по низкой цене.
          <p>После оплаты вам будет доступен код скрипта.
          </p>
        </Head>
        <Body>
          {List}
        </Body>
        <Footer>
          <p>Служба поддержки:&nbsp;
          <a href="mailto:mail@lexa.website">mail@lexa.website</a></p>
        </Footer>
      </WrapBlock>
    </Section>
  )
}