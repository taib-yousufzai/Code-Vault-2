import './Homepage/styles.css';
import './Studentpage/Student';

function Navbar() {
  return (
    <nav className='navbar'>
        <h1>CS Institution</h1>
      <ul>
        <li><a href="">Student Portal</a></li>
        <li><a href="#">Admin</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;