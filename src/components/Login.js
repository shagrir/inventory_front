import {useState} from 'react';

import './Login.css';

function Login() {    
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [flag, setFlag] = useState(true);
    

    const clickHandler = (e) => {
        e.preventDefault();
        
        console.log('email', email);
        console.log('password', password);

    }

    const changeHandlerEmail = e => setEmail(e.target.value);
    const changeHandlerPassword = e => setPassword(e.target.value);

     return (
        <div>
            {flag && (
                <p>Hello</p>
            )}  
        <form>
            <h3>Login</h3>
            <label>
            Email address
            <input type="email" name="email" value={email} onChange={changeHandlerEmail}/>
            </label>
            <label>
            Password
            <input type="password" name="password" value={password} onChange={changeHandlerPassword}/>
            </label>
            <button type="submit" className="myborder" onClick={clickHandler}> 
            Submit
            </button>
        </form>
        </div>
    );



}
  
export default Login;