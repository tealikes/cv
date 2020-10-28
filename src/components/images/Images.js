import React from 'react'
import './style.scss'

import image_1  from '../../images/1.png'
import image_2  from '../../images/2.png'
import image_3  from '../../images/3.png'
import image_4  from '../../images/4.png'
import image_5  from '../../images/5.png'
import image_6  from '../../images/6.png'
import image_7  from '../../images/7.png'
import image_8  from '../../images/8.png'
import image_9  from '../../images/9.png'
import image_10 from '../../images/10.png'
import image_11 from '../../images/11.png'
import image_12 from '../../images/12.png'

const Images = () =>{
  const alt ="lexa.website"

  function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  React.useEffect(()=>{
    document.querySelectorAll('.layer').forEach(layer => {
      const x = getRandomFloat( -50, 50)   
      const y = getRandomFloat( -50, 50) 
      layer.style.transition = `5s`
      layer.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${x}deg)`
    })
  })

  return(
    <>
      <img src={image_1}  alt={alt} className="layer"/>
      <img src={image_2}  alt={alt} className="layer"/>
      <img src={image_3}  alt={alt} className="layer"/>
      <img src={image_4}  alt={alt} className="layer"/>
      <img src={image_5}  alt={alt} className="layer"/>
      <img src={image_6}  alt={alt} className="layer"/>
      <img src={image_7}  alt={alt} className="layer"/>
      <img src={image_8}  alt={alt} className="layer"/>
      <img src={image_9}  alt={alt} className="layer"/>
      <img src={image_10} alt={alt} className="layer"/>
      <img src={image_11} alt={alt} className="layer"/>
      <img src={image_12} alt={alt} className="layer"/>
    </>
  )
}

export default Images