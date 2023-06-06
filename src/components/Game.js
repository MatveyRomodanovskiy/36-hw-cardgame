import React, {useEffect, useRef, useState} from 'react';
import {result} from '../utils/constants'
import {sattoloRandomSorting} from "../utils/sattoloRandomSorting";


const Game= ({changePage, name, changeScore, score}) => {
    const compDeck = useRef([]);
    const playerDeck =useRef([]);
    const commonDeck=useRef([]);
    const [compCard, setCompCard] = useState();
    const [playerCard, setPlayerCard] = useState();
    const [playerWin, setPlayerWin] = useState(0);
    const [compWin, setCompWin] = useState(0)

    useEffect(() => {
     for (let i=0; i<13; i++){
         commonDeck.current.push({rank : i, suit:'diamonds' });
         commonDeck.current.push({rank : i, suit:'clubs'});
         commonDeck.current.push({rank : i, suit:'hearts' });
         commonDeck.current.push({rank : i, suit:'spades' });
         }
        sattoloRandomSorting(commonDeck.current)
        compDeck.current = commonDeck.current.slice(0,26);
        playerDeck.current = commonDeck.current.slice(26,52);
        compDeck.current.forEach(p => console.log(p));
        oneTurn();
    },[])

    function oneTurn() {
        const comp = compDeck.current.pop()
        const player = playerDeck.current.pop()
        setCompCard(`${comp.rank} ${comp.suit}`);
        setPlayerCard(`${player.rank} ${player.suit}`)
        const winner = comp.rank - player.rank;
        if(winner){
            if (winner > 0){
                setCompWin(compWin+1);
            }else{
                setPlayerWin(playerWin+1);
            }
        }
    }

    const handleClickNext = () => {
        if(compDeck.current.length){
            oneTurn();
        } else {
            if (compWin - playerWin){
                if((compWin - playerWin) >0){
                    const finalScore = 'Comp is winner! ' + compWin + ' : ' + playerWin +'';
                    changeScore({...score, compScore: score.compScore+1,  gameScore: finalScore});
                } else {
                    const finalScore =  `${name} is winner!` + compWin + ' : ' + playerWin +'';
                    changeScore({...score, playerScore: score.playerScore+1,  gameScore: finalScore})
                }
            } else {changeScore({...score, gameScore: "DRAWN"});}
            changePage(result);
        }
    }
    return (
        <div>
            <h1>Score: </h1>
            <h2>Computer {compWin}</h2>
            <p>{compCard}</p>
            <p>{playerCard}</p>
            <h2>{name} {playerWin}</h2>
            <button onClick={handleClickNext}>Next</button>
        </div>
    );
};

export default Game;