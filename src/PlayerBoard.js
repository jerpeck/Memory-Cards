import React, { Component } from 'react';
import './PlayerBoard.css';

class PlayerBoard extends Component{

    render(){
        const {player} = this.props;
        return(
            <div className='PlayerBoard'>
                <h1>
                    {player}
                </h1>
            </div>
        );
    };
};

export default PlayerBoard;