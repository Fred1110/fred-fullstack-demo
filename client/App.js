import axios from 'axios';
import React, { Component } from 'react';
import Users from './component/Users'


class App extends Component{
  constructor(){
    super();
    this.state = {
      user: [],
      loading: true
    };
  }
  async componentDidMount(){
    this.setState({
      users: (await axios.get('/api/users')).data,
      loading: false
    });
  }
  render(){
    const { users, loading } = this.state;
    if(loading){
      return '....loading';
    }
    return (
      <div>
        <Users users = { users }/>
      </div>
    );
  }
}

export default App;
