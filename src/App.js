import React from 'react'
import image_1 from './images/1.png'
import image_2 from './images/2.png'
import image_3 from './images/3.png'
import image_4 from './images/4.png'
import image_5 from './images/5.png'
import image_6 from './images/6.png'
import image_7 from './images/7.png'
import image_8 from './images/8.png'
import image_9 from './images/9.png'
import image_10 from './images/10.png'
import image_11 from './images/11.png'
import image_12 from './images/12.png'

function App(){
  function parallax(e){
    console.log(1)
    this.querySelectorAll('.layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed')

      const x = (window.innerWidth - e.clientX * speed)/220
      const y = (window.innerHeight - e.clientY * speed)/220
      
      layer.style.transform = `translateX(${x}px) translateX(${y}px)`
    })
  }

  React.useEffect(()=>{
    document.addEventListener('mousemove', parallax)
  }, [])

  return (
    <section>
      <img src={image_1} alt="" data-speed="-5" className="layer"/>
      <img src={image_2} alt="" data-speed="5"  className="layer"/>
      <img src={image_3} alt="" data-speed="2"  className="layer"/>
      <img src={image_4} alt="" data-speed="6"  className="layer"/>
      <img src={image_5} alt="" data-speed="8"  className="layer"/>
      <img src={image_6} alt="" data-speed="-2" className="layer"/>
      <img src={image_7} alt="" data-speed="4"  className="layer"/>
      <img src={image_8} alt="" data-speed="-9" className="layer"/>
      <img src={image_9} alt="" data-speed="6"  className="layer"/>
      <img src={image_10} alt="" data-speed="-7" className="layer"/>
      <img src={image_11} alt="" data-speed="-5" className="layer"/>
      <img src={image_12} alt="" data-speed="5" className="layer"/>
      <h2 data-speed="2" className="layer">Lexa website</h2>
    </section>
  )
}

export default App
