import React from 'react';
import Block1 from './Components/Block1';
import Block2 from './Components/Block2';
import Simage from './Components/SImage';
import BImage2 from './Components/BImage2';
import BImage1 from './Components/BImage1';

export function Section() {
    return <div className='projects_section'>
        <div className='wrapper'>
            <Block1 />
            <div className='Bbox'>
                <BImage1 />
                <BImage2 />
            </div>
            <Block2 />
            <Block2 />
            {/* <div> */}
            <div className='Sbox'>
                    <Simage />
                    <Simage />
                    <Simage />
                </div>
            {/* </div> */}
            <Block2 />
        </div>

    </div>
}
