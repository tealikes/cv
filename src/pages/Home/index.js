import React, { useEffect } from 'react'
import Images from '../../components/Images'
import Title from './components/Title'
import {Button} from './components/Button'
import styled from 'styled-components'

const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 680px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito', sans-serif;
  `
export const Home = () => {

  const [name, setName] = React.useState(1)
  const [name2, setName2] = React.useState(2)
  const [name3, setName3] = React.useState(3)
  const [name4, setName4] = React.useState(4)




  React.useEffect(()=>{
 
    console.log('вызван')
    console.log(name)
    console.log(name2)
    console.log(name3)
    console.log(name4)

    setName('vasilisa')
    setName2('goblin')
    setName3('grabej')
    setName4('labej')

  }, [name, name2, name3, name4])


  return (
    <Section>
      <div style={{color:'#fff', fontSize:'3rem'}}>  </div>
      <Images isAnimation={true} />
      <Title />
    </Section>
  )
}