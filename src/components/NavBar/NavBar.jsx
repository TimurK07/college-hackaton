import './NavBar.css';
import ChevronDown from '../../img/ChevronDown.svg'
import Logo from '../../img/logo.svg'

function NavBar() {
  return (
    <div className='NavBar'>
      <div className='Navbar__logo'>
        <img src={Logo} alt="" />
      </div>
      <div className='language__checkbox color-text'>
        Ru
        <img className='arrow' src={ChevronDown} alt="" />
      </div>
    </div>
  )
}

export default NavBar