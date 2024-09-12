import './NavBar.css';

function NavBar() {
  return (
    <div className='NavBar'>
      <div className='Navbar__logo'>
        <img src="./img/logo.svg" alt="" />
      </div>
      <div className='language__checkbox color-text'>
        Ru
        <img className='arrow' src="./img/chevron-down.svg" alt="" />
      </div>
    </div>
  )
}

export default NavBar