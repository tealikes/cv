import React from 'react'
import Images from '../../components/Images'
import Title from '../../components/Title'
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
export const Home = () => {
  return (
    <Section>
      <Images />
      <Title />
    </Section>
  )
}