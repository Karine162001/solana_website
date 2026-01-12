import './Solana.css';
import time1 from '../objectPic/itstime/time2.png';
import time2 from '../objectPic/itstime/time3.png';
import time3 from '../objectPic/itstime/time4.png';
import time4 from '../objectPic/itstime/time1.png';
import time5 from '../objectPic/itstime/time5.png';

export default function Solana() {

  const stats = [
    { id: 1, number: "11,000", label: "SOLANA HACKER HOUSE PARTICIPANTS", color : "#E481F1"  },
    { id: 2, picture: time1, },
    { id: 3, picture: time2, },
    { id: 4, picture: time3, },
    { id: 5, number: "3,800",  label: "SOLANA BREAKPOINT 2022", color : "#EDDF3B" },
    { id: 6, picture: time4, },
    { id: 7, number: "48,000", label: "DEVELOPERS BUILDING DURING", label2: "SOLANA HACKATHONS", color : "#19ED90"},
    { id: 8, picture: time5, },
  ];

  return (
    <div className='solana'>
        <div className="forAll">
            {
              stats.map((elem) => {
                return (
                  <div className="pic" key={elem.id} style={{background : "#19171C", backgroundImage : `url(${elem.picture})`}}>
                      <p style={{color : elem.color}}>{elem.number}</p>
                      <span>{elem.label} <br /> {elem.label2}</span>
                  </div>
                )
              })
            }
        </div>
    </div>
  );
}
