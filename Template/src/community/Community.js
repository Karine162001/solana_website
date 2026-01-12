import './Community.css';
import { GoArrowUpRight } from "react-icons/go";
import Zoom from 'react-medium-image-zoom';
import network from "../pagesImages/networkpic/network.jpg";

let txt1  =  "Go to the source.";
let txt2  =  "Read the documentation for Solana and popular tools.";
let txt3  =  "Solana DocS";
let txt4  =  "Metaplex Docs";
let txt5  =  "Learn how Solana works and get a high-level understanding of Solana's architecture.";
let txt6  =  "Learn what you build with Metaplex, make the process of creating and launching NFTs easier.";
let txt7  =  "Solana Changelog";
let txt8  =  "Some more Solana changes from Jacob & Joe. Subscribe to the newsletter: https://solana.us17.list-manage.com/s... Proposal - Priced Compute Units:...";
let txt9  =  "Solana Developer Update";
let txt10 =  "Sign up to the newsletter and learn about new resources, new commits, new proposals, and more.";
let txt11 =  "Even more resources";
let txt12 =  "More videos, more episodes, Discussions between industry leaders in both blockchain and technology, our team, and community developers.";

export default function Community() {
  return (
    <div className='community'>
        <section>
            <div className="leftInfo">
                <div className="i1">
                    <h3>{txt1}</h3>
                    <p>{txt2}</p>
                </div>
                <div className="i2">
                    <main>
                        <h3>{txt3}</h3>
                        <button>VIEW ALL <GoArrowUpRight /></button>
                    </main>
                    <p>{txt5}</p>
                </div>
                <div className="i3">
                    <h3>{txt7}</h3>
                    <p>{txt8}</p>
                    <button>LATEST EPISODE</button>
                </div>
                
            </div>
            <div className="rightInfo">
                <div className="i2">
                    <main>
                        <h3>{txt4}</h3>
                        <button>VIEW ALL <GoArrowUpRight /></button>
                    </main>
                    <p>{txt6}</p>
                </div>
                <div className="i3">
                    <Zoom><img src={network} alt="" /></Zoom>
                </div>
            </div>
        </section>
    </div>
  )
}
