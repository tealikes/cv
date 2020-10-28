import React from 'react'
import axios from 'axios'

// examle API: 
//  [{isLoading, response, error}, doFetch] = useFetch('/user/login')
//  doFetch({method:'POST', data:{}})

export default (url) => {
 const baseUrl = 'https://my_example.ru/api_v.1.1'
 const [isLoading, setIsLoading] = React.useState(false)
 const [response, setResponse] = React.useState(null)
 const [error, setError] = React.useState(null)
 const [options, setOptions] = React.useState({})
 
 const doFetch = (options = {}) => {
   setOptions(options)
   setIsLoading(true)
 }
 
 React.useFetch(() => {
   if(!isLoading) return
  
   axios(baseUrl + url, options)
     .then((res)=>{
       setIsLoading(false)
       setResponse(res.data)
     })
     .catch((err)=>{
       setIsLoading(false)
       setError(err.response.data)
     })
   
 }, [isLoading])
 
 return [{isLoading, response, error}, doFetch]
}