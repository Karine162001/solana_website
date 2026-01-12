import './Learn.css';
import image1 from '../image/image1.jpg';
import { TfiAlignJustify } from "react-icons/tfi";
import Zoom from 'react-medium-image-zoom';

export default function Learn() {
  return (
    <div className='box'>
      <section>
        <div className="box_left">
          <h1>Developer Resources</h1>
          <p>A manual for joining the <br /> Solana ecosystem. By builders for builders</p>
          <div className="but_item">
            <button>BUILD NOW</button>
            <button>STACK EXCHANGE <TfiAlignJustify /></button>
          </div>
        </div>
        <div className="box_right">
          <Zoom>
            <img src={image1} alt="" />
          </Zoom>
        </div>
        <div className="itemBlock">
          <h2>Get started </h2>
          <p>Use this Solana foundation and community courses to begin your journey into Solana development</p>
        </div>
      </section>
    </div>
  )
}
