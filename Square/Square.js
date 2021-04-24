import React, {Component} from 'react'; 

class Square extends Component{

    click = () => {
        this.setState({value: "X"});
    }

    render(){
        return (
            <button className='square' 
                    onClick={() => this.props.onClick()}
            >
            { this.props.value }
            </button>
        )
    }
}

export default Square;