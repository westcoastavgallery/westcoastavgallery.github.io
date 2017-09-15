import React, { Component } from 'react'
import {Container, connect} from '@cerebral/react'
import {state, signal} from 'cerebral/tags'
import SkyLight from 'react-skylight'

export default connect({
  foo: state`foo`,
  click: signal`clicked`
},
  function App ({foo, click}) {
    return <button onClick={() => click()} className="uk-button uk-button-primary buy-button">Buy now!! {foo}</button>
  }
)


// class Example extends React.Component {
//   constructor(props){
//     super(props);
//   }

//   render() {

//     return (
//       <div>
//         <section>
//           <h1>React SkyLight</h1>
//           <button onClick={() => this.refs.simpleDialog.show()}>Open Modal</button>
//         </section>
//         <SkyLight hideOnOverlayClicked ref="simpleDialog" title="Hi, I'm a simple modal">
//           Hello, I dont have any callback.
//         </SkyLight>
//       </div>
//     )
//   }
// }

// Example.displayName = 'Example';

// export default Example;