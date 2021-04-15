import React, { Component } from 'react';
import GameBoard from './GameBoard';
import cardDeck from './cardDeck';
import {createGrid, shuffle, addKeyVals} from './cardHelpers';

class Game extends Component{
    constructor(props){
        super(props);
        this.state={
            cardGrid: [],
            cardsFlipped: []
        }
        this.flipCard = this.flipCard.bind(this);
        this.handleCardClicked = this.handleCardClicked.bind(this);
    }
    handleCardClicked(x, y){
        // flip card
        this.flipCard(x, y)
        // if flipped cards = 2
            // check match
                // yes - handle match
                // no - flip cards back over
    }
    flipCard(x, y){
        const cardGridToChange = this.state.cardGrid;
        cardGridToChange[x][y].flipped = true;
        const cardsFlippedToChange = this.state.cardsFlipped;
        cardsFlippedToChange.push([x, y]);
        this.setState({cardGrid: cardGridToChange, cardsFlipped: cardsFlippedToChange});
    }
    componentDidMount(){
        const deck = shuffle(cardDeck);
        addKeyVals(deck, ['flipped', false]);
        const newCardGrid = createGrid(deck);
        this.setState({cardGrid: newCardGrid});
    }
    render(){
        return(
            <GameBoard cardGrid={this.state.cardGrid} handleCardClicked={this.handleCardClicked}/>
        );
    };
};

export default Game;