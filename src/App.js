import React from 'react'
// import Md5 from 'md5'
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
  const robokassa = React.createRef()

  function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed')
      const x = (window.innerWidth - e.clientX * speed)/100
      const y = (window.innerHeight - e.clientY * speed)/100
      layer.style.transform = `translateX(${x}px) translateX(${y}px)`
    })
  }

  // const MerchantLogin='lexa.website'
  // const InvoiceID='0'
  // const Culture='ru'
  // const Encoding='utf-8'
  // const md5 = Md5('')

  React.useEffect(()=>{
    document.addEventListener('mousemove', parallax)

    robokassa.current.insertAdjacentHTML('beforeend', `
      <iframe width="450" height="70" 
        style="border:0;width:450px;height:70px;overflow:hidden;background-color:transparent;" 
        allowTransparency="true" 
        src="https://auth.robokassa.ru/Merchant/PaymentForm/FormFL.if?MerchantLogin=lexa.website&InvoiceID=0&Culture=ru&Encoding=utf-8&SignatureValue=5eae4b6d76a2ceb60fa6b3dd6ef3dc13"></iframe>
    `)

  }, [robokassa])

// <iframe width="450" height="70"  title="robokassa" 
//   style={{border:0, width:'450px',height:'70px', overflow:'hidden', backgroundColor:'transparent'}}
//   allowtransparency="true" 
//   src={`https://auth.robokassa.ru/Merchant/PaymentForm/FormFL.if?MerchantLogin=lexa.website&InvoiceID=0&Culture=ru&Encoding=utf-8&SignatureValue=5eae4b6d76a2ceb60fa6b3dd6ef3dc13`}>
// </iframe>

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

      <div className="info">
        Данная страница предназначена для оплаты работ по Web разработке.
        К оплате подлежит заранее оговорённая сумма. Если вы решили тайком
        перевести денежные средства, то такой перевод будет считаться как 
        доброе дело или пожертвование :)
      </div>

      <div className="contact">
        По вопросам пишите:&nbsp;&nbsp;<a href="mailto:lexa.website@yandex.ru">lexa.website@yandex.ru</a>
      </div>

      <div className="robokassa" ref={robokassa}>
      </div>

      <h2 data-speed="2" className="layer" translate="no">Lexa website</h2>
    </section>
  )
}

export default App
