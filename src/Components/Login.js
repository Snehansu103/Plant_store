import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../Data/users.json';
import './Login.css';
import { setLoggedUser } from '../ReduxStore/actions';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const data = useSelector( state => state )
  // const user = useSelector( state => state.loggedUser );

  const handleLogin = () => {
    const user = users.find(u => u.email === email && u.password === password);
    console.log(user);
    
    if (user) {
      dispatch(setLoggedUser(user));
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
