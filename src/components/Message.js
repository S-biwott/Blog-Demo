//Changing Text When A Button Is Clicked

import React, { Component } from 'react'

class Message extends Component {

    // step 1: initialization of the state object
    constructor() {
        super() 
        this.state = {
            Message: 'Welcome Visitor'
        };
    }

    //Step 3 method definition
    changeMessage(){
        this.setState({
            Message: 'Thank you for subscribing'
        });

    }   
    
    
    render() {
        return(
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe </button>
            </div>
        );
        
    }
}

export default Message;

