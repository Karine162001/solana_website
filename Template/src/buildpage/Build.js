import React, { Component } from 'react';
import './Build.css';
import { SlArrowRightCircle } from "react-icons/sl";
import i1 from '../pagesImages/buldpic/bulidback.jpg';
import i2 from '../pagesImages/buldpic/bulid1.png';
import i3 from '../pagesImages/buldpic/bulid2.png';
import i4 from '../pagesImages/buldpic/bulid3.png';
import i5 from '../pagesImages/buldpic/bulid4.png';
import i6 from '../pagesImages/buldpic/bulid5.png';
import i7 from '../pagesImages/buldpic/bulid6.png';

export default class Build extends Component {
    constructor() {
        super();
        this.state = {
            obj : [
                { id : 1, img : i1, btn : '17 Chapters',  text : 'Quickstart your Solana development starting from nothing ', p : 'Solana Development Course' },
                { id : 2, img : i2, btn : '14 Chapters',  text : 'Buildspace' },
                { id : 3, img : i3, btn : '12 Chapters',  text : 'Solana Bytes' },
                { id : 4, img : i4, btn : '1 Chapters',   text : 'Scaffold Series' },
                { id : 5, img : i5, btn : '3',            text : 'Freecodecamp Solana' },
                { id : 6, img : i6, btn : '167 Chapters', text : 'Solana Development' },
                { id : 7, img : i7, btn : '8',            text : 'Solana Bootcamp' }
            ]
        }
    }
    
    render() {
        return (
            <div className='build'>
                <section>
                    {
                        this.state.obj.map((elem, index) => {
                            return (
                                <div className="element" key={elem.id} style={{backgroundImage : `url(${elem.img})`}}>
                                    <button className='chapter'>{elem.btn}</button>
                                    <p>{elem.p}</p>
                                    <span>{elem.text}</span>
                                    <button className='icon'>
                                        <SlArrowRightCircle />
                                    </button>
                                </div>
                            )
                        })
                    }
                </section>
            </div>
        )
    }
}
