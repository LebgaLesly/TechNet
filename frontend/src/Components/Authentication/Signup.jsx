import { useState } from 'react';
import '../../Styles/Authentication.css';

import { useSignup } from '../../Hooks/useSignup';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(name, email, password)
  };

  return (
    <>   
      <div className="bg">
        <div className="form-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <input
              type="text"
              placeholder="UserName"
              onChange={(e) => setName(e.target.value)}
              value={name}
              class="form-field"
              name="name"
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              class="form-field"
              name='email'
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              class="form-field"
              name='password'
            />
           
            <button disabled={isLoading}>Register</button>
            {error && <div className='error'>{error}</div>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
