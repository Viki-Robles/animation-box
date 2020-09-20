import React from 'react';
import icon from '../Animation/icon.svg';
import './Animation.css';

export default function Animation() {
    return (
        <>
            <div className='icons'>
                <img src={icon} alt='' className='img1' />
                <img src={icon} alt='' className='img2' />
                <img src={icon} alt='' className='img3' />
            </div>
            <div className='square'></div>
        </>
    )
}