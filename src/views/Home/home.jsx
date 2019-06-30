import React, { Component } from 'react'
import Navbar from './NavBar/navbar.jsx'
import '../../Mock/mockHome.jsx'
import axios from 'axios'
import './home.less'
class Home extends Component {
  constructor() {
    super()
    this.state = {
      dataList: [],
      aaa: [],
        bb: [],
      ccc:[],
    }
    axios.get('/data', { dataType: 'json' }).then(res => {
      this.setState({ dataList: res.data.list })
    })
  }
  render() {
    return (
      <div className="homeBox">
        <Navbar />
        {this.state.dataList.map((item, index) => (
          <div key={index}>{item.id}</div>
        ))}
      </div>
    )
  }
}
export default Home
