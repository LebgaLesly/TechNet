import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username, password);
  };

  return (
    <>
      <nav className='auth-nav'>
        <Link className="logo1">TECH NET</Link>
      </nav>
      <div className="bg">
        <div className="form-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <h3>Log In</h3>

            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="form-field"
              placeholder="Username"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form-field"
            />

            <button>Log In</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
