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
            numCardsFlipped: 0,
            player1Cards: [],
            player2Cards: [],
        }
        this.flipCard = this.flipCard.bind(this);
        this.handleCardClicked = this.handleCardClicked.bind(this);
        this.checkMatch = this.checkMatch.bind(this);
        this.handleMatch = this.handleMatch.bind(this);
        this.handelNoMatch = this.handelNoMatch.bind(this);
    }
    async handleCardClicked(x, y){
        this.flipCard(x, y);
        const newNumCardsFlipped = this.state.numCardsFlipped + 1;
        await this.setState({numCardsFlipped: newNumCardsFlipped})
        if(this.state.numCardsFlipped === 2){           
            this.checkMatch() ?
                this.handleMatch()
                : this.handelNoMatch();
        }
    }
    handleMatch(){
        setTimeout(() => {
            const {cardGrid, cardsFlipped} = this.state;
            const cardsToPlayer = [cardGrid[cardsFlipped[0][0]][cardsFlipped[0][1]], cardGrid[cardsFlipped[1][0]][cardsFlipped[1][1]]];
            cardGrid[cardsFlipped[0][0]][cardsFlipped[0][1]] = {};
            cardGrid[cardsFlipped[1][0]][cardsFlipped[1][1]] = {};
            const newCardGrid = cardGrid;
            this.setState({
                cardGrid: newCardGrid,
                player1Cards: [
                    ...this.state.player1Cards,
                    ...cardsToPlayer
                ],
                cardsFlipped: [],
                numCardsFlipped: 0
        })}, 1000)
    }
    handelNoMatch(){
        setTimeout(() => {
            this.state.cardsFlipped.forEach(card => this.flipCard(card[0], card[1]));
            this.setState({cardsFlipped: [], numCardsFlipped: 0})
        }, 1000)
    }
    checkMatch(){
        const firstCard = this.state.cardGrid[this.state.cardsFlipped[0][0]][this.state.cardsFlipped[0][1]];
        const secondCard = this.state.cardGrid[this.state.cardsFlipped[1][0]][this.state.cardsFlipped[1][1]];
        return firstCard.id === secondCard.id ? true : false;
    }
    flipCard(x, y){
        const cardGridToChange = this.state.cardGrid;
        cardGridToChange[x][y].flipped = !cardGridToChange[x][y].flipped;
        const cardsFlippedToChange = this.state.cardsFlipped;     
        cardsFlippedToChange.push([x, y]);
        this.setState({
            cardGrid: cardGridToChange,
            cardsFlipped: cardsFlippedToChange,
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
                <PlayerBoard player='Player 1' cards={this.state.player1Cards}/>
                <GameBoard cardGrid={this.state.cardGrid} handleCardClicked={this.handleCardClicked}/>
                <PlayerBoard player='Player 2' cards={this.state.player2Cards}/>
            </div>
        );
    };
};

export default Game;