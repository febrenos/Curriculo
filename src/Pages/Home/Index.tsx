import React from 'react';
import '../../assets/style/global.css';
import './style.css';
import cine from '../../assets/imagens/cinema.png';
import mascara from '../../assets/imagens/theater.png';
import Footer from '../../components/Footer/Index';
import Header from '../../components/Header/Index';
import perfil from '../../assets/imagens/felipesugisawa.jpg';

function Home() {
  return (
    <div>
      <Header/>
      <div className="centerhome">
          <img src={perfil} alt="Programador"/>
          <h1>Felipe Sugisawa</h1>
          <h2>s̩y̙s͔̥t͉͚e̘̯̗m̗̖̝̣ ̭̻̖̙d̖̝͎̮̠e̬̜̗̗͍̹v͙̞̜̦̭e̟̮̖͕l͚͙̹̝o͉̖̳p̦͈ẹ͕r͕</h2>
        </div>
      <Footer/>
    </div>
  );
}

export default Home;
