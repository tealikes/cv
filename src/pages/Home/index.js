import React from 'react'
import Images from '../../components/images/Images'
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
  `
const Title = styled.h2`
    color: #fff;
    font-size: 8rem;
  `
export const Home = () => {
  const [count, setCount] = React.useState(true)

  React.useEffect(()=>{
    const timeout = setTimeout(()=>{
      setCount(!count)
    }, 5000)

    return ()=> clearTimeout(timeout)
  }, [count])

  return (
    <Section>
      <Images />
       { 
         count ? 
        <Title data-speed="2" className="layer">lexa website</Title> : 
        <Title data-speed="2" className="layer">React JS</Title>
       }
    </Section>
  )
}