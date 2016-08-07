import 'babel-polyfill'
import React from 'react'
import Fetch from 'react-fetch'
import { render } from 'react-dom'
import App from './containers/App'

export default class App extends React.Component{
  render(){
    return (
      <Fetch url="http://api.itboost.org/app_dev.php/api/community.getAll">
        <TestComponent/>
      </Fetch>
    )
  }

}
class TestComponent extends React.Component{
  render(){
    console.log(this.props)
    return <div/>
  }
}
React.render(<App />, document.getElementById('app'));
