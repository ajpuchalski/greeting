import React, { Component } from 'react';
import { render } from 'react-dom';

class Greeting extends Component{
    state = {
        greetingInput: null,
        greetingOutput: null
    }

    setValue(e) {
        this.setState({greetingInput: e.target.value})
    }

    displayGreeting(){
        this.setState({greetingOutput: this.state.greetingInput})
    }

    render(){
       return(
         <div>
             <h1>{this.state.greetingOutput}</h1>
             <input type="text" placeholder="greeting" onChange={e => this.setValue(e)} />
             <button onClick={() => this.displayGreeting()} >submit</button>
             </div>
       )
    }
}

render(
    <Greeting />,
    document.getElementById('root')
)
