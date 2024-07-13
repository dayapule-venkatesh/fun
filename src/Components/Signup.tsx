
import './Css/Login.css'


function Signup(){
  
return <div  >
  <div className='main'>
  <h1>Register</h1>

  <form action="" method="post"> <div className='log'>
    <ul><li>
      <label htmlFor="username">Username:</label>
      <input type="text" maxLength={40} placeholder="Enter Username" id="username" name="username" required/></li>
      
      <li>
      <label htmlFor="username">Email:</label>
      <input type="text" maxLength={40} placeholder="Enter Email" id="email" name="email" required/></li>
      <li>
      <label htmlFor="password">Password:</label>
      <input type="password" maxLength={8} placeholder="Enter Password" id="password" name="password" required/></li>
      
      <li>
      <label htmlFor="username">Conform Password:</label>
      <input type="password" maxLength={8} placeholder="Conform password" id="conform Password" name="conform" required/></li>
      <li>
      <button type="submit">Signup</button>
       </li></ul>
      </div>
  </form>
  </div>
  </div>
}
export default Signup;
