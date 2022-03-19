import React from 'react';
import './App.css';
import { SignUpRequest } from './types/auth-service/auth.type';
import { AuthService } from './services/api/auth.service';

function App() {
  const clickSignin = async (event: any) => {
    const user: SignUpRequest = {
      username: "DemManga",
      email: "lordsly@gmail.com",
      password: "dahsufhasufd",
      firstname: "Lordfef",
      surname: "alsdiad"
    }
    const auth = new AuthService()
    console.log(await auth.signup(user))
  }
  return (
    <div>
      <button type='submit' onClick={clickSignin}>Click me</button>
    </div>
  );
}

export default App;
