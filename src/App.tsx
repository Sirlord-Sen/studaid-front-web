import React, { Component, MouseEvent } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { login } from './redux/actions/auth.actions';

type Props = {
  login: Function,
};

type State = {
}

class App extends Component<Props, State>{
  constructor(props: any){
    super(props);
    this.signup = this.signup.bind(this);
  }
  
  async signup(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>){
    event.preventDefault()
    const user = {
      email: "lodwaf12@gmail.com",
      password: "I love God."
    }

    this.props.login(user)

    // const auth = new AuthApiService()
    // await auth.login(user).then(data => {
    //   console.log(data)
    // })
  }

  render() {
    return (
      <div>
        <button type='submit' onClick={this.signup}>Click me</button>
      </div>
    )
  }
}

function mapState(state: any) {
  const { loggingIn } = state.auth;
  return { loggingIn };
}

const actionCreators = {
  login: login,
  // logout: 
};

const connectedApp = connect(mapState, actionCreators)(App);

export { connectedApp as App } ;
