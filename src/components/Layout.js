import { Link, Outlet } from "react-router-dom"; 

function Layout () {

  function fakeLogoutUser() {
    localStorage.removeItem("loggedin")
  }
  
  return (
    <div className='main-link'>
      <Link to='/' >App</Link>
      <Link to='/login'>Login</Link>
      <Link to="/protected">Protected</Link>
      <Link to='/protected/nestedprotected'>Nested Protected</Link>
      <Link to='/about'>About</Link>
      <button onClick={fakeLogoutUser}>X</button>
      <Outlet />
  </div>
  )
}

export default Layout