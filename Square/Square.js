import React, {Component} from 'react'; 

class Square extends Component{
    state = {
        value: null,
    }

    click = () => {
        this.setState({value: "X"});
    }

    render(){
        return (
            <button className='square' 
                    onClick={this.click} 
            >{ this.state.value }</button>
        )
    }
}

export default Square;