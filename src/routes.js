import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Home}    from './pages/Home'
import {Result}  from './pages/Result'
import {Success} from './pages/Success'
import {Fail}    from './pages/Fail'
import {NoPage}  from './pages/NoPage'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/payment/result" component={Result} exact />
      <Route path="/payment/success" component={Success} exact />
      <Route path="/payment/fail" component={Fail} exact />
      <Route path="/" component={NoPage} />
    </Switch>
  )
}
export default Routes