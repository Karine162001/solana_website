import './Time.css';
import timeBack from '../objectPic/itstime/timeback.png';

export default function Time() {
  return (
    <div className='time'>
        <section style={{backgroundImage : `url(${timeBack})`}}>
            <h3>
                its time to join the thousands of creators,
                <br />
                artists, and developers using Solana.
            </h3>
            <button>START BUILDING</button>
        </section>
    </div>
  )
}