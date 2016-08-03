import React, { Component, PropTypes } from 'react'
import Fetch from 'react-fetch'

export default class App extends React.Component{

  render(){
    return (
      <Fetch url="http://api.itboost.org/app_dev.php/api/community.getAll">
        <TestComponent/>
      </Fetch>
    )
  }

}

// class TestComponent extends React.Component{
//   render(){
//     console.log(this.props)
//     return <div/>
//   }
// }
// React.render(<App />, document.getElementById('app'));

// export default class App extends Component {
//   render() {
//     return <div>Привет из App</div>
//   }
// }
