import React from 'react';
import { DoiliesStyle } from '../styling/doilies';

const complete = 19;
const percentage = ((complete / 101) * 100).toFixed(1);

const mapEmptyBoxes = (number, filled) => {
    const createArray = () => {
        const array = []
        for (let i = 0; i < number; i++) {
            array.push(i)
        }
        return array;
    }

    return createArray().map((box, i) => {
        return <div key={i} className={`box ${filled ? 'gray' : 'white'}`}>{filled && i + 1}</div>
    })
}

export const Doilies = () => {
    return (
        <div className='container tab'>
            <DoiliesStyle>
                <h1>101 Doilies</h1>
                <h2>{complete} of 101 ({percentage}%)</h2>
                <div className='container doilies'>
                    {mapEmptyBoxes(complete, true)}
                    {mapEmptyBoxes(101 - complete)}
                </div>
            </DoiliesStyle>
        </div>
    )
}