import React from 'react'; 
import Square from '../Square/Square';

class Board extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            squares: Array(9).fill(null),
        }
    }

    handleClick = (index) => {
        const squares = this.state.squares.slice();
        squares[index] = 'X'; 
        this.setState({squares: squares});
    }

    renderSquare = (index) => {
        return (
            <Square 
                value={ this.state.squares[index] }
                onClick={ () => this.handleClick(index) }
            />
        );
    }

    render(){
        const status = 'Next player: X'; 

        return (
            <div>
                <div className='status'>{ status }</div>
                <div className='board-row'>
                    { this.renderSquare(1) }
                    { this.renderSquare(2) }
                    { this.renderSquare(3) }
                </div>
                <div className='board-row'>
                    { this.renderSquare(4) }
                    { this.renderSquare(5) }
                    { this.renderSquare(6) }
                </div>
                <div className='board-row'>
                    { this.renderSquare(7) }
                    { this.renderSquare(8) }
                    { this.renderSquare(9) }
                </div>
            </div>
        )
    }
}

export default Board;