import React, { Component } from 'react';
import Card from './Card'
import { v4 as uuidv4 } from 'uuid';
import './PlayerBoard.css';

class PlayerBoard extends Component{

    render(){
        const {player, cards} = this.props;
        const playerCards = cards.map(o =>
            <Card
                text={o.text}
                id={o.id}
                key={uuidv4}
                flipped={o.flipped}
            />  
            )
        return(
            <div className='PlayerBoard'>
                <h1>
                    {player}
                </h1>
                {playerCards}
            </div>
        );
    };
};

export default PlayerBoard;