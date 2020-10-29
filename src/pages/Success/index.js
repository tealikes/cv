import React from 'react'
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

export const Success = () => {
  return (
    <Section>
      Success
    </Section>
  )
}