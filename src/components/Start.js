import React, {useState} from 'react';
import {game} from '../utils/constants'

const Start = ({changePage, changeName}) => {
   const[name, setName] = useState('')
    const handleClickStart = () => {
       changeName(name);
       changePage(game);
    }
    return (
        <div>
            <h1>Ready for War</h1>
            <input
                type={'text'}
                placeholder={'Enter your name'}
                value={name}
                onChange={e => setName(e.target.value.toUpperCase())}
            />
            <button onClick={handleClickStart}>Start</button>
        </div>
    );
};

export default Start;