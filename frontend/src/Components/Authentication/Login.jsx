import { useState } from 'react';
import { useLogin } from '../../Hooks/useLogin';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(name, password)
  };

  return (
    <>
      <div className="bg">
        <div className="form-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <h3>Log In</h3>

            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
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

            <button disabled={isLoading}>Log In</button>
            {error && <div className='error'>{error}</div>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
