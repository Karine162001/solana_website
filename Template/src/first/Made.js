import './Made.css';

export default function Made() {
    const obj = [
        {id : 1, a : 'darkcyan',  b : 'Fast', c : 'Don t keep your users waiting Solana has block times of 400 milliseconds and as hardware gets faster, so will the network.', d : '*3,969', e : 'TRANSACTIONS PER SECON'},
        {id : 2, a : 'goldenrod', b : 'Decentralized', c : 'The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.', d : '1,675', e : 'VALIDATOR NODES'},
        {id : 3, a : 'purple',    b : 'Scalable', c : 'Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01', d : '*163,077,581,394', e : 'TOTAL TRANSACTIONS'},
        {id : 4, a : 'lime',      b : 'Energy Efficient', c : 'Solana s proof of stake network and other innovations minimize its impact on the environment Each Solana transaction uses about the same energy as a few Google searches.', d : '0%', e : 'NET CARBON IMPACT'},
    ];

  return (
    <div className='made'>
        <section>
            <div className="info">
                <h3>Made for <br /> mass adoption.</h3>
                <p>LIVE DATA</p>
            </div>
            <div className="allBlock">
                {
                    obj.map((elem, index) => {
                        return (
                            <div className="randomInfos" key={elem.id}>
                                <p style={{borderLeft : `2px solid ${elem.a}`, paddingLeft : '20px'}}>{elem.b}</p>
                                <span>{elem.c}</span>
                                <p>{elem.d}</p>
                                <span>{elem.e}</span>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </div>
  )
}


