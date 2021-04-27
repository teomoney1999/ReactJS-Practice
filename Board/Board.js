import React from 'react'; 
import Square from '../Square/Square';


const Board = (props) => {

    const renderSquare = (index, addClass) => {
        return (
            <Square 
                key = { index }
                value={ props.squares[index] }
                onClick={ () => props.onClick(index) }
                addClass ={ addClass ? addClass : null }
            />
        );
    }

    const renderBoardRow = () => {
        let boardRow = [],
            index = 0; 

        for (let i = 0; i < props.rows; i++){
            let row = [];

            for (let j = 0; j < props.cols; j++){
                let rowEl,
                    winPattern = props.winPattern;

                if (winPattern && winPattern.includes(index)){
                    rowEl = renderSquare(index++, 'win-square');
                } else {
                    rowEl = renderSquare(index++, null);
                }
                // row.push(renderSquare(index++));
                row.push(rowEl);
            }
            
            boardRow.push(
                <div key = {i} 
                        className='board-row' >
                    { row }
                </div>
            )
            
        }

        return boardRow;
    }
    

    return (
        <div>
            { renderBoardRow() }
        </div>
    )
    
}

export default Board;