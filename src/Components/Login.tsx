import { useState } from 'react';
import './Css/Login.css'
function Login(){
  const [isChecked] = useState(false);
return <div  >
  <div className='main'>
  <h1>Login</h1>

  <form action="" method="post"> <div className='log'>
    <ul><li>
      <label htmlFor="username">Username:</label>
      <input type="text" maxLength={40} placeholder="Enter Username" id="username" name="username" required/></li>
      <li>
      <label htmlFor="password">Password:</label>
      <input type="password" maxLength={8} placeholder="Enter Password" id="password" name="password" required/></li>
      <li>
      <button type="submit">Login</button>
      <input type="checkbox" checked={isChecked}/> Remember me </li></ul>
      </div>
  </form>
  </div>
</div>
}
export default Login;