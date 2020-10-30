export const productsState = [
  {
    id:'1', 
    name:'Hook useFetch',
    text:'Для получения данных с сервера.',
    description:`
      Хук useFetdh работает с помощью библиотеки axios, 
      предназначен для удобного получения данных с сервера.
      Доступны свойства и методы: isLoading, response, error, doFetch(params).
    `, 
    price:'1000',
    linkDownload:'Download_React_Hook_useFetch.js',
    language: 'JavaScript'
  },
  {
    id:'2', 
    name:'Hook useReducer', 
    text:'Для работы со State',
    description:`
      Отвечает за формирование нового state приложения из 
      исходного и объекта события. Помогает в изменении стейта, 
      удобно инкапсулировать в одном месте.
    `, 
    price:'1000',
    linkDownload:'',
    language: 'JavaScript'
  },
  {
    id:'3', 
    name:'Hook useRouter', 
    text:'Для переключения страниц',
    description: `
      Cинхронизирует пользовательский интерфейс с URL-адресом.
      Помогает получить пользовательские данные из запроса. 
      Удобен в использовании.
    `, 
    price:'1000',
    linkDownload:'',
    language: 'JavaScript'
  },
  {
    id:'4', 
    name:'Hook useContext', 
    text:'Передача данных в компоненты',
    description:`
      Контекст предоставляет способ разделять подобные значения между 
      компонентами без необходимости явно передавать опору через каждый 
      уровень дерева.
    `, 
    price:'1000',
    linkDownload:'',
    language: 'JavaScript'
  }
]
