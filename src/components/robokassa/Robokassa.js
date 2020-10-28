import React from 'react'
import './style.scss'

const Robokassa = () =>{
  const robokassa = React.createRef()

  // const MerchantLogin='lexa.website'
  // const InvoiceID='0'
  // const Culture='ru'
  // const Encoding='utf-8'
  // const md5 = Md5('')

  React.useEffect(()=>{
    robokassa.current.insertAdjacentHTML('beforeend', `
      <iframe width="450" height="70" 
        style="border:0;width:450px;height:70px;overflow:hidden;background-color:transparent;" 
        allowTransparency="true" 
        src="https://auth.robokassa.ru/Merchant/PaymentForm/FormFLS.if?MerchantLogin=lexa.website&InvoiceID=0&Culture=ru&Encoding=utf-8&DefaultSum=1000&SignatureValue=4d208c7ff3a1fa31f7b0bb8c1f1b36dd"></iframe>
    `)

  }, [robokassa])

// <iframe width="450" height="70"  title="robokassa" 
//   style={{border:0, width:'450px',height:'70px', overflow:'hidden', backgroundColor:'transparent'}}
//   allowtransparency="true" 
//   src={`https://auth.robokassa.ru/Merchant/PaymentForm/FormFL.if?MerchantLogin=lexa.website&InvoiceID=0&Culture=ru&Encoding=utf-8&SignatureValue=5eae4b6d76a2ceb60fa6b3dd6ef3dc13`}>
// </iframe>

  return(
    <>   
      <div className="robokassa" ref={robokassa}>
        <div className="contact">По вопросам пишите:&nbsp;&nbsp;
          <a href="mailto:lexa.website@yandex.ru">lexa.website@yandex.ru</a>
        </div>
      </div>
    </>
  )
}

export default Robokassa