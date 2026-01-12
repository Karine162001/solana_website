import './Footer.css';
import logo from '../objectPic/down/minilogo.png';
import v1 from '../objectPic/down/v1.png';
import v2 from '../objectPic/down/v2.png';
import v3 from '../objectPic/down/v3.png';
import v4 from '../objectPic/down/v4.png';
import v5 from '../objectPic/down/v5.png';
import v6 from '../objectPic/down/v6.png';
import { GrLanguage } from "react-icons/gr";
export default function Footer() {
  const icons = [v1, v2, v3, v4, v5, v6];

  const ul = [
    'SOLANA',
    'Grants',
    'Break Solana',
    'Media Kit',
    'Careers',
    'Disclaimer'
  ];

  const ul1 = ['GET CONNECTED', 'Ecosystem', 'Blog', 'Newsletter'];

  return (
    <footer>
      <section>
        <div className="manged">
          <img src={logo} alt="Solana Logo" />
          <p>Managed by Solana Foundation</p>
          <div className="icons_6">
            {
            icons.map((elem, index) => (
              <img key={index} src={elem}/>
            ))

            }
          </div>
          <p>© 2023 Solana Foundation. All rights reserved.</p>
        </div>

        <div className="carcas">
          <div className="carcas_1">
            <ul>
              {
              ul.map((elem, index) => (
                <li key={index}>
                  <a href="#">{elem}</a>
                </li>
              ))
              }
            </ul>
          </div>

          <div className="carcas_2">
            <ul>
              {
              ul1.map((elem, index) => (
                <li key={index}>
                  <a href="#">{elem}</a>
                </li>
              ))
              }
            </ul>
          </div>
              <p><GrLanguage /> EN</p>
        </div>
      </section>
    </footer>
  );
}
