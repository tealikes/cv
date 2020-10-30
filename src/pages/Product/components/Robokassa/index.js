import React from 'react'
import styled from 'styled-components'

const InfoRules = styled.div`
  font-size: 1.0rem;
  font-family: 'Nunito', sans-serif;
  p{
    margin-bottom: 1rem;
    text-align:left;
  }
`

export const Robokassa = () =>{
  const robokassa = React.createRef()

  React.useEffect(()=>{
    robokassa.current.insertAdjacentHTML('beforeend', `
      <iframe width="450" height="70" 
        style="border:0;width:450px;height:70px;overflow:hidden;background-color:transparent;" 
        allowTransparency="true" 
        src="https://auth.robokassa.ru/Merchant/PaymentForm/FormFLS.if?MerchantLogin=lexa.website&InvoiceID=0&Culture=ru&Encoding=utf-8&DefaultSum=1000&SignatureValue=4d208c7ff3a1fa31f7b0bb8c1f1b36dd"></iframe>
    `)

  }, [robokassa])

  return(
    <>   
      <div className="robokassa" style={{textAlign:'center'}} ref={robokassa}>
        <InfoRules>
         <p>1. Вы покупаете файл со скриптом на языке JavaScript.</p>
         <p>2. <strong>Файл не подлежит обмену и денежные средства не возвращаются.</strong></p> 
         <p>3. Если после оплаты ссылка на скачивание будет не доступна, напишите нам.</p>
         <p>4. При возникновении трудностей с подключеним скрипта, напишите нам.</p>
        </InfoRules><br/>
      </div>
      <br/>
    </>
  )
}
