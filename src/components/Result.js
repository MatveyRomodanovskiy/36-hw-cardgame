import React from 'react';
import {game} from '../utils/constants'

const Result = ({changePage, score}) => {
    return (
        <div>
            <h1>{`${score.gameScore}`}</h1>
            <h2>Total Score: {`Comp (${score.compScore}) : (${score.playerScore}) Player`}</h2>
            <button onClick={() => changePage(game)}>Again</button>
        </div>
    );
};

export default Result;
