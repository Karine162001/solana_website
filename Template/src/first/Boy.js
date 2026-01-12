import './Boy.css';
import boyPicture from '../objectPic/build/boy.png';
import anybodyes from '../objectPic/build/anybodies.png';
import mult1 from '../objectPic/build/mult1.png';
import mult2 from '../objectPic/build/mult2.png';
import mult3 from '../objectPic/build/mult3.png';
import mult4 from '../objectPic/build/mult4.png';
import Zoom from "react-medium-image-zoom";

export default function Boy() {
  const li = ["NFTs", "DeFi", "Paymants", "Gamming", "DAOs"];
  const icons = [mult1, mult2, mult3, mult4];
  const any = [
    { img: anybodyes, textt: 'Its time to bridge the digital and physical.Anybodies helps established brands like Toys Us connect real-life places and products with NFTs.', span: 'Learn more about NFTson Solana', id: 1 }
  ]
  return (
    <div className='boy'>
      <section>
        <nav>
          <h3>Build for growth.</h3>
          <ul>
            {li.map((elem, index) => <li key={index}>{elem}</li>)}
          </ul>
        </nav>
        <div className="boyBlock">
          <Zoom> <img src={boyPicture} alt="" /></Zoom>
          <div className="info">
            {
              any.map((elem, index) => {
                return (
                  <div className="info_1">
                    <img src={elem.img} alt="" />
                    <p>{elem.textt}</p>
                    <span>{elem.span}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="images">
          {
            icons.map((elem, index) => {
              return (
                <Zoom key={index}>
                  <img src={elem} alt="" />
                </Zoom>
              )
            })
          }
        </div>
        <h3>Join a thriving community.</h3>
      </section>
    </div>
  )
}
