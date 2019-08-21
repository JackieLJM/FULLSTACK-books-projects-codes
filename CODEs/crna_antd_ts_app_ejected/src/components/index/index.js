import React, { Component, Suspense } from "react";
// import QueueAnim from "rc-queue-anim";
// import Loadable from "react-loadable";
import HeaderComponent from "./layout/HeaderComponent";
import ContentComponent from "./layout/ContentComponent";
import FooterComponent from "./layout/FooterComponent";
import ContentSecComponent from "./layout/ContentSecComponent";
// function Loading(props) {
//   if (props.error) {
//     return <div>Error! <button onClick={props.retry}>Retry</button></div>;
//   } else if (props.timedOut) {
//     return <div>Taking a long time... <button onClick={props.retry}>Retry</button></div>;
//   } else if (props.pastDelay) {
//     return <div>Loading...</div>;
//   } else {
//     return null;
//   }
// }
// memo给无状态组件增加是否渲染特性
// const MemoLoading = React.memo(Loading);
// const AsyncHeaderComponent = React.lazy(() => import('./layout/HeaderComponent'))
// const AsyncContentComponent = React.lazy(() => import('./layout/ContentComponent'))
// const AsyncFooterComponent = React.lazy(() => import('./layout/FooterComponent'))
// const AsyncContentSecComponent = React.lazy(() => import('./layout/ContentSecComponent'))

class Index extends Component {
  render() {
    return (
      <div>
        {/* <Suspense fallback={<MemoLoading />}>
          <AsyncHeaderComponent />
          <AsyncContentComponent />
          <AsyncContentSecComponent />
          <AsyncFooterComponent />
        </Suspense> */}
        <HeaderComponent key="a" />
        <ContentComponent key="b" />
        <ContentSecComponent key="c" />
        <FooterComponent key="d" />
      </div>
    );
  }
}

export default Index;
