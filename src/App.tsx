import React, { Component, MouseEvent } from 'react';
import './App.css';
import { AuthApiService } from './services/api/auth.service';

type Props = {};

type State = {
}

class App extends Component<Props, State>{
  
  async signup(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>){
    event.preventDefault()
    const user = {
      email: "lodwaf12@gmail.com",
      password: "I love God."
    }

    const auth = new AuthApiService()
    await auth.login(user).then(data => {
      console.log(data)
    })
  }

  render() {
    return (
      <div className='container row'>
        <div className="col-sm"></div>
        <div className="col-sm">
          <form action="" className='m-5'>
            <div className='form-row'>
              <div className='form-group col-md-6 mb-3'>
                <label htmlFor="" className='form-label'>FIRSTNAME</label>
                <input type="button" className='form-control' placeholder="eg. John"/>
              </div>
              <div className='form-group col mb-3'>
                <label htmlFor="" className='form-label'>SURNAME</label>
                <input type="button" className='form-control' placeholder='eg. Doe'/>
              </div>
            </div>
            <div className='form-group col mb-3'>
              <label htmlFor="" className='form-label'>EMAIL ADDRESS</label>
              <input type="button" className='form-control' placeholder='johndoe@gmail.com'/>
            </div>
            <div className='form-group col mb-3'>
              <label htmlFor="" className='form-label'>USERNAME</label>
              <input type="button" className='form-control' placeholder='johndoe@gmail.com'/>
            </div>

            <div className='form-row'>
              <div className='form-group col-md-6 mb-3'>
                <label htmlFor="" className='form-label'>PASSWORD</label>
                <input type="button" className='form-control' placeholder="eg. John"/>
              </div>
              <div className='form-group col mb-3'>
                <label htmlFor="" className='form-label'>CONFIRM PASSWORD</label>
                <input type="button" className='form-control' placeholder='eg. Doe'/>
              </div>
            </div>
          </form>
        </div>
        <div className="col-sm"></div>
      </div>
    )
  }
}

export default App;
