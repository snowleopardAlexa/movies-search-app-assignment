import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <div className="header">
          <div className="header__logo">
           <Link to="/"><img src="/logos/logo.svg" width="120px" height="80px" alt="logo" /></Link>
          </div>
      </div>
    );
};

export default Header