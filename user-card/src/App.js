import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      user: {},
      followers: []
    };
  };
  componentDidMount() {
this.getGithubUser();
this.getGithubFollowers();
  }
  getGithubUser = async () => {
    let res = await axios.get('https://api.github.com/users/parkster246')
    this.setState({
      user: res.data
    });
  };
  getGithubFollowers = async () => {
    let res = await axios.get('https://api.github.com/users/parkster246/followers')
    this.setState({
      followers: res.data
    });
  };
  
  
  render() {
    const { user, followers } = this.state;
    return (
      <div className='App'>
        <h1>{user.login}'s Github!</h1>
        {followers.map(follower => (
          <h1>{follower.login} is a follower</h1>
        ))}
      </div>
    )
  }
};

export default App;
