import React from 'react'
import styled from 'styled-components'
import Images from '../../components/Images'

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
  width: 720px;
  height: 720px;
  background: #fff;
  font-family: 'Nunito', sans-serif;
  padding: 30px;
  border-radius: 8px;
  line-height: 1.8;
  z-index: 10;
`
const Info = styled.div`
  
`

export const NoPage = () => {
  return (
    <Section>
      <Images isAnimation={false}/>
      <WrapBlock>
        Страница ненайдена 404

      </WrapBlock>
    </Section>
  )
}