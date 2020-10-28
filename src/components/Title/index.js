import React from 'react'
import styled from 'styled-components'

const H2 = styled.h2`
    color: #fff;
    font-size: 8rem;
  `
const Title = () => {
  const [count, setCount] = React.useState(true)

  function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  React.useEffect(()=>{
    const timeout = setTimeout(()=>{
      setCount(!count)
      const x = getRandomFloat( -20, 20)   
      const y = getRandomFloat( -20, 20) 
      const h2 = document.querySelector('.title')
      count ? h2.style.color = '#fff' : h2.style.color = '#00e600'
      h2.style.transition = `3s`
      h2.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${x}deg)`
    }, 3000)

    return ()=> clearTimeout(timeout)
  }, [count])

  return (
    <>
      { 
        count ? 
        <H2 data-speed="2" className="title">lexa website</H2> : 
        <H2 data-speed="2" className="title">React JS</H2>
       }
    </>
  )

}

export default Title