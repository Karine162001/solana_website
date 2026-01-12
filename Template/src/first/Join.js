import './Join.css';

export default function Join() {

  const obj = [
    { number: '11.5M+',   text: 'Active Accounts', id: 1, col1 : "#841DF2", col2 : "#2FCDAB" },
    { number: '21.9M',    text: 'NFTs Minted', id: 2,     col1 : "#03B0DC", col2 : "#005EFA" }, 
    { number: '$0.00025', text: 'Average Cost Per Transaction', id: 3, col1 : "#007FA2", col2 : "#00DFB4" }
  ];
  
  return (
    <div className='box'>
      <section>
        <h2>Join a community of milions</h2>
        <div className="all">
          {
            obj.map((elem, index) => (
              <div key={index} className='boxik'>
                <h3 style={{background : `linear-gradient(to right, ${elem.col1}, ${elem.col2})`}} className="number">{elem.number}</h3>
                <p className="text">{elem.text}</p>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}
