import React, {Component} from 'react';
import './Card.css';

class Card extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        if(!this.props.isMatching){
            this.props.handleCardClicked(this.props.x, this.props.y);
        }
    }
    render(){
        const {flipped} = this.props;
        return(
            <div className='Card' onClick={this.handleClick}>
                <h1>{flipped ? this.props.text : '@'}</h1>
            </div>
        )
    }
}

export default Card;