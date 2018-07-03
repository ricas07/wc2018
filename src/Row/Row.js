import React from 'react';
import { brackets } from '../data/brackets';
import { games } from '../data/games';
import './Row.css';

const Row = (name) => {
    const title = name.name;
    const bracket = brackets[title];
    const sixteen = bracket['roundOf16'];
    const quarter = bracket['quarterFinals'];
    const semi = bracket['semiFinals'];
    const final = bracket['finals'];
    const third = bracket['third'];

    const games16 = games.roundOf16;
    const games4 = games.quarerFinals;
    const games2 = games.semiFinals;
    const champs = games.finals;
    const thirds = games.third;

    let roundOfSixteen = 0;
    let quarters = 0;
    let semis = 0;
    let thirdPlace = 0;
    let championship = 0;

    for( let game in sixteen) {
        if (!!games16[game] && games16[game] === sixteen[game]) {
            roundOfSixteen += 1;
        }
    }

    for( let game in quarter) {
        if (!!games4[game] && games4[game] === quarter[game]) {
            quarters += 2;
        }
    }

    for( let game in semi) {
        if (!!games2[game] && games2[game] === semi[game]) {
            semis += 3;
        }
    }

    for( let game in final) {
        if (!!champs[game] && champs[game] === final[game]) {
            championship += 4;
        }
    }

    if( thirds.winner === third.winner) {
        thirdPlace += 2;
    }

    let total = roundOfSixteen + quarters + semis + thirdPlace + championship;

    return (
        <div className='card'>
            <div className='cell'>
                {title}
            </div>
            <div className='cell'>
                {roundOfSixteen}
            </div>
            <div className='cell'>
                {quarters}
            </div>
            <div className='cell'>
                {semis}
            </div>
            <div className='cell'>
                {thirdPlace}
            </div>
            <div className='cell'>
                {championship} <br/>
                {bracket.finals.winner}
            </div>
            <div className='cell'>
                {total}
            </div>
        </div>
    )
};

export default Row;
