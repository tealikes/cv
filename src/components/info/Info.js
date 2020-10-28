import React from 'react'
import './style.scss'
import Robokassa from '../robokassa/Robokassa'

const Info = () =>{
  return(
    <div className="wrap-info">
      <div className="info">
        Данная страница предназначена для оплаты работ по Web разработке.
        К оплате подлежит заранее оговорённая сумма. Если вы решили тайком
        перевести денежные средства, то такой перевод будет считаться как 
        доброе дело или пожертвование :)
      </div>
      <Robokassa/>
    </div>
  )
}

export default Info