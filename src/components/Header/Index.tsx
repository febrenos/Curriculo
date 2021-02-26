import React from 'react';
import './style.css';
import '../../assets/style/global.css';
import logo from '../../assets/imagens/logowhite3.png';

function Header() {

  return (
    <div className="header">
        <header>
          <div className="logoheader">
              <div>
                  <img src={logo}/>
              </div>
          </div>
        </header>
    </div>
);
}

export default Header;
