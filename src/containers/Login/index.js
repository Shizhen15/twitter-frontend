import { useState } from 'react';
import './index.css';

const Login = () => {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const clickHandler = () => {
    alert('Login successful' + name + ', ' + pwd);
  }
  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  }
  const onChangePasswordHandler = (e) => {
    setPwd(e.target.value);
  }
  return (
    <div className="login">
        {name}
        {pwd}
        <div>Username: <input onChange={onChangeNameHandler}/></div>
        <div>Password: <input type="password" onChange={onChangePasswordHandler}/></div>
        <div><button onClick={clickHandler}>Login</button></div>
    </div>
  );
}

export default Login;
