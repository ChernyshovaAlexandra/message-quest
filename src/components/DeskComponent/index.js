import React from 'react'
import './index.css'
import MessageComponent from '../MessageComponent'
import AnswerComponent from '../AnswerComponent'
import { messages } from '../../constants/messages'

export default class DeskComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: 0,
            sendBy: 'user',
            userAnswered: false
        }
    }
    clicker = () => {
        console.log(1)
        this.setState({
            userAnswered: true
        })
    }
    render() {
        const { sendBy } = this.state
        const curMessages = messages
        return (
            <div className="desk">
                {curMessages.map((item, index) => (
                    item.length ? <AnswerComponent text={item} onClick={this.clicker} userAnswered={this.state.userAnswered} /> : <MessageComponent key={index} text={item.text} />
                ))}
            </div>
        )
    }
}