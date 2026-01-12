import './Network.css'
import { MdArrowOutward } from "react-icons/md";

export default function Network() {
    const infrom = [
        { id: 1, h1: 'Core Documentation', text: 'The official Solana documentation on developing, validators, SPL tokens, wallets and more.' },
        { id: 2, h1: 'Solana Cookbook', text: 'The Solana Cookbook is a developer resource that provides the essential concepts and references for building applications on Solana.' },
        { id: 3, h1: 'Solana Stack Exchange', text: 'Solana Stack Exchange is a question and answer site for Solana software users and developers.' },
        { id: 4, h1: 'Solana Playground', text: 'Easily build, deploy and test Solana programs and smart contracts from a browser IDE.' },
        { id: 5, h1: 'create-solana-dapp', text: 'Get up and running fast with Solana dApps, generate a project template in seconds.' },
        { id: 6, h1: 'Anchor Docs', text: 'Anchor is a framework for Solanas Sealevel runtime providing several convenient developer tools for writing smart contracts.' },
        { id: 7, h1: 'Solana Program', text: 'The Solana Program Library (SPL) is a collection of on-chain programs targeting the Sealevel parallel runtime.' },
        { id: 8, h1: 'Program  Examples', text: 'A list of curated examples for a wide range of use cases implemented. using on-chain programs.' }
    ]

    return (
        <div className="network">
            <div className="text">
                <h1>Dig deeper.</h1>
                <p>Learn from resources across the greater Solana ecosystem.</p>
            </div>

            <section>
                {infrom.map(elem => (
                    <div className="elements" key={elem.id}>
                        <a href="#">TOOL / LIBRARY</a>
                        <h2>{elem.h1}</h2>
                        <p>{elem.text}</p>
                        <button>LEARN MORE <MdArrowOutward /></button>
                    </div>
                ))}
            </section>
        </div>

    )
}


