import React from 'react'
import styled from 'styled-components'
import {useParams, useHistory} from 'react-router-dom'
import Images from '../../components/Images'
import {productsState} from '../../state'
import {Robokassa} from './components/Robokassa'

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

const Closed = styled.div`
  text-align: right;
  a {
    color:  rgba(75, 0, 130, .9);
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
    &:hover{
      opacity: 0.6;
      cursor: pointer;
    }
  }
`

const Head = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  line-height:50px;
  margin-bottom: 15px;
  font-family: 'Nunito', sans-serif;
  p{
    padding-left: 1rem;
  }
` 
const Body = styled.div`
  flex-grow: 1;
  flex-shrink:0;
  font-family: 'Nunito', sans-serif;
  font-size: 1.0rem;
  p{
    line-height: 2rem;
    background: #111;
    font-size: 1.1rem;
    color: #fff;
    margin-top: 0.6rem;
    padding: 1rem;
    border-radius: 8px;
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
export const Product =()=> {
  const {name} = useParams()
  const history = useHistory()

  const handleBackClick =()=>{
    history.goBack()
  }

  return (
    <Section>
      <Images isAnimation={true}/>
      <WrapBlock>
        <Closed>
          <a onClick={handleBackClick}>Закрыть</a>
        </Closed>
        <Head>
         <i>Название товара: </i> {productsState[name-1]?.name }
         <p>cтоимость скриптa {productsState[name-1]?.price } руб.</p>
        </Head>
       
        <Body> 
          Описание товара:
          <p>{productsState[name-1]?.description }</p>
        </Body>

        {productsState[name-1]?.name && <Robokassa />}

        <Footer>
          <p>
            Служба поддержки:&nbsp;
            <a href="mailto:mail@lexa.website">mail@lexa.website</a>
          </p>
        </Footer>

      </WrapBlock>
    </Section>
  )
}