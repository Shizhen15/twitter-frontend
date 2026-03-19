import { useState } from 'react';
import './index.css';

const Login = () => {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');

  const clickHandler = () => {
    alert('Login successful' + name + ', ' + pwd);
  };

  const onChangeNameHandler = (event) => {
    setName(event.target.value);
  };

  const onChangePasswordHandler = (event) => {
    setPwd(event.target.value);
  };

  return (
    <div className="login">
      {name}
      {pwd}
      <div>
        Username: <input onChange={onChangeNameHandler} />
      </div>
      <div>
        Password: <input type="password" onChange={onChangePasswordHandler} />
      </div>
      <div>
        <button onClick={clickHandler}>Login</button>
      </div>
    </div>
  );
};

export default Login;
