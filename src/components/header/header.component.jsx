import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/queenlogo.svg';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {
  return (
    <div className='header'>
      <Link className='logo-container' to="/">
        <Logo className='logo '></Logo>
      </Link>
      <div className='options'>
        <Link className='option' to="/Shop">SHOP</Link>
        <Link className='option' to="/Shop">CONTACT</Link>
        {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      </div>
    </div>
  );
};

export default Header;