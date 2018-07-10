import React from 'react';
import { brackets } from '../data/brackets';

const Picks = () => {
    return (
        <div>
            {Object.keys(brackets).map(person => (
                <div>
                    <h3>{`${person}'s Picks`}</h3>
                    {Object.keys(brackets[person]).map(rounds =>
                        <div className="rounds">
                            {rounds}
                            {Object.keys(brackets[person][rounds]).map(games =>
                                <div className="games">
                                {games}
                                <div>
                                    <strong>{brackets[person][rounds][games]}</strong>
                                </div>
                            </div>)}
                    </div>)}
                </div>)
            )}
        </div>
    );
};

export default Picks;
