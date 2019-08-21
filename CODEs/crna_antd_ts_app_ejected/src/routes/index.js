import React, { Component, Suspense } from 'react'
// import CounterContainer from '../containers/CounterContainer'
// import Header from '../components/Header'
import { HashRouter, Link, BrowserRouter, Route, Switch } from 'react-router-dom'
// import { createBrowserHistory } from 'history'
import styled from '@emotion/styled'

// const Container = styled.div`
//   text-align: center;
// `
// export const history = createBrowserHistory()
const LazyIndex = React.lazy(() => import("../components/index"))
const LazyCount = React.lazy(() => import('../containers/CounterContainer'))
class Routes extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          {/* // <BrowserRouter> */}
          {/* <Container> */}
          <Switch>
            <Suspense fallback={<div>正在加载中</div>}>
              <Route path="/" exact component={LazyIndex} />
              <Route path="/count" component={LazyCount} />
            </Suspense>
          </Switch>
          {/* <Header />
        <Switch>
          <Route path="/" component={CounterContainer} />
        </Switch> */}
          {/* </Container> */}
          {/* // </BrowserRouter> */}
          <Link to="/count">切换</Link>
        </HashRouter>

      </div>)
  }
}

export default Routes
