import React from 'react'
import './index.css'


export default class MessageComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sendBy: props.sendBy
        }
    }
    render() {
        return (
            <div className={this.state.sendBy === 'user' ? "message user " : "message"}>
                <p>{this.props.text}</p>
            </div>
        )
    }
}