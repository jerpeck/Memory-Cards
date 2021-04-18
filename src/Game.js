import React, { Component } from 'react';
import GameBoard from './GameBoard';
import cardDeck from './cardDeck';
import {createGrid, shuffle, addKeyVals} from './cardHelpers';
import PlayerBoard from './PlayerBoard';
import './Game.css';

class Game extends Component{
    constructor(props){
        super(props);
        this.state={
            cardGrid: [],
            cardsFlipped: [],
            numCardsFlipped: 0
        }
        this.flipCard = this.flipCard.bind(this);
        this.handleCardClicked = this.handleCardClicked.bind(this);
        this.checkMatch = this.checkMatch.bind(this);
        this.handleMatch = this.handleMatch.bind(this);
        this.handelNoMatch = this.handelNoMatch.bind(this);
    }
    async handleCardClicked(x, y){
        // flip card
        await this.flipCard(x, y);
        // if flipped cards = 2
        if(this.state.numCardsFlipped === 2){           
            // check match
            this.checkMatch() ?
                // yes - handle match
                this.handleMatch()
                // no - flip cards back over
                : this.handelNoMatch();
        }
    }
    handleMatch(){
        // Award Cards
        // Remove Cards from Grid
        // Reset State
    }
    handelNoMatch(){
        // Flip Cards Back
        // Reset State
    }
    checkMatch(){
        const firstCard = this.state.cardGrid[this.state.cardsFlipped[0][0]][this.state.cardsFlipped[0][1]];
        const secondCard = this.state.cardGrid[this.state.cardsFlipped[1][0]][this.state.cardsFlipped[1][1]];
        return firstCard.id === secondCard.id ? true : false;
    }
    flipCard(x, y){
        const cardGridToChange = this.state.cardGrid;
        cardGridToChange[x][y].flipped = true;
        const cardsFlippedToChange = this.state.cardsFlipped;
        cardsFlippedToChange.push([x, y]);
        const newNumCardsFlipped = this.state.numCardsFlipped + 1;
        this.setState({
            cardGrid: cardGridToChange,
            cardsFlipped: cardsFlippedToChange,
            numCardsFlipped: newNumCardsFlipped
        });
    }
    componentDidMount(){
        const deck = shuffle(cardDeck);
        addKeyVals(deck, ['flipped', false]);
        const newCardGrid = createGrid(deck);
        this.setState({cardGrid: newCardGrid});
    }
    render(){
        return(
            <div className='Game'>
                <PlayerBoard player='Player 1'/>
                <GameBoard cardGrid={this.state.cardGrid} handleCardClicked={this.handleCardClicked}/>
            </div>
        );
    };
};

export default Game;