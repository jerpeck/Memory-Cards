import React, {Component} from 'react';
import Card from './Card';
import CardContainer from './CardContainer';
import './GameBoard.css';

class GameBoard extends Component{
    /*
    grid of card containers each containing random card from deck
    */

    render(){
        // const cardContainers = cardDeck.map(card => <CardContainer ><Card text={card.text}/></CardContainer>)
        const {cardGrid} = this.props;
        const newCardGrid = cardGrid ? cardGrid.map((row, idxX) => 
                <div className='card-row'>
                    {row.map((o, idxY) => 
                        <CardContainer>
                            <Card
                                text={o.text}
                                x={idxX}
                                y={idxY}
                                id={o.id}
                                key={o.id}
                                flipped={o.flipped}
                                handleCardClicked={this.props.handleCardClicked}
                            />
                        </CardContainer>
                    )}
                </div>
            ) : <h1>!</h1>
        return(
            <div className='GameBoard'>{newCardGrid}</div>
        )
    }
}

export default GameBoard;