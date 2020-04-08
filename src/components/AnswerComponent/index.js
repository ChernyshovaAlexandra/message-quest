import React from 'react'
import './index.css'
import MessageComponent from '../MessageComponent'
import $ from 'jquery'


class But extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messageAns: false
        }
    }
    handleClick = () => {
        this.setState({
            messageAns: this.props.text,
            checked: this.props.checked
        })
    }
    render() {
        const { text, onClick } = this.props

        return (
            <button onClick={() => onClick(text)}>{text}</button>
        )
    }

}

export default class AnswerComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            message: '',
            text: props.text,
            userAnswered: props.userAnswered
        }

    }
    handleParentClick = (txt) => {
        this.setState({
            message: txt,
            checked: true
        })
        console.log('message', this.state, txt)
    }
    render() {
        const { text } = this.state
        const { onClick } = this.props
        const answer = text

        return (
            <>
                {!this.state.checked && <div className="answer" onClick={() => { onClick() }} >
                    <But text={answer[0].text} onClick={(txt) => this.handleParentClick(txt)} />
                    <But text={answer[1].text} onClick={(txt) => this.handleParentClick(txt)} />
                </div>}
                {this.state.checked && <MessageComponent text={this.state.message} sendBy="user"/>}

            </>
        )
    }
}