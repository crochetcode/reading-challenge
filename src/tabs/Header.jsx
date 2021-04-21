import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
    const days = 31 + 28 + 31 + 20;
    const yearPercentage = (days / 365 * 100).toFixed(2);
    return (
        <header>
            <nav>
                <h2><span>April 20th, 2021</span></h2>
                <h2>{`${days} days (${yearPercentage}%)`}</h2>
                <Link to='/'>
                    <h2>Reading</h2>
                </Link>
                <Link to='/doilies'>
                    <h2>Doilies</h2>
                </Link>
            </nav>
        </header>
    )
}