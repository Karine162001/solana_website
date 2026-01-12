import './Up.css';
import i1 from '../objectPic/upicons/icon1.png';
import i2 from '../objectPic/upicons/icon2.png';
import i3 from '../objectPic/upicons/icon3.png';
import i4 from '../objectPic/upicons/icon4.png';
import i5 from '../objectPic/upicons/icon5.png';
import i6 from '../objectPic/upicons/icon6.png';
import i7 from '../objectPic/upicons/icon7.png';
import Zoom from 'react-medium-image-zoom';

export default function Up() {
  const txt = 'Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.';

  const icons = [i1, i2, i3, i4, i5, i6, i7];

  return (
    <div className='up'>
      <section>
        <div className="info">
          <h1>Powerful for developers. Fast for everyone.</h1>
          <p>{txt}</p>
          <div className="btns">
            <button>START BUILDING</button>
            <button>READ DOCS</button>
          </div>
          <span>POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD</span>
        </div>
      </section>
      <div className="forIcons">
        <section>
          {
            icons.map((elem, index) => {
              return (
                <Zoom key={index}>
                  <img src={elem} alt="" />
                </Zoom>
              )
            })
          }
        </section>
      </div>
    </div>
  )
}



