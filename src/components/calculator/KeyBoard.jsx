import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

import { addChar, deleteChar, clearExpression, addStory } from 'actions';

class KeyBoard extends React.Component {
    constructor() {
        super();

        this.calculate = this.calculate.bind(this);
        this.clickBtn = this.clickBtn.bind(this);

        this.state = {
            brackets: 0,
            solved: false
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', ({ key: char, keyCode }) => {
            this.calculate(char, keyCode);
        })
    }

    clickBtn(e) {
        let char = e.target.innerText,
            keyCode = 0;

        if(char === 'C') keyCode = 8;

        this.calculate(char, keyCode);
    }

    calculate(char, keyCode) {
        let reg = /[\d\/*\-+=()\.]/,
            { addChar, deleteChar, display, clearExpression, addStory } = this.props,
            { brackets, solved } = this.state;

        if(keyCode == 13) char = '=';
        if(char == '-') char = ' - ';

        if(solved) {
            clearExpression();
            this.setState({
                solved:false
            });
            if(char === '=') return false;
        }


        if(reg.test(char)) {
            let { length } = display,
                space = / $/.test(display),
                openBracket = /\($/.test(display),
                closeBracket = /\)$/.test(display);

            if(char == '=') {
                if(space || !length) return false;

                if(brackets) {
                    let bracket = '';
                    if(openBracket) bracket = '0';
                    for(let i = 0; i < brackets; i++) {
                        bracket += ')';
                    }
                    this.setState({
                        brackets: 0,
                        solved: true
                    });

                    let result = ' = ' + eval(display + bracket);
                    addChar(bracket + result);
                    addStory(display + bracket + result)
                } else {
                    this.setState({
                        solved: true
                    });

                    let result = ' = ' + eval(display);
                    addChar(result);
                    addStory(display + result)
                }

            } else if(char == '+') {

                if(!length || openBracket || solved) return false;
                char = ' + ';
                addChar(char);

            } else if(char === '*') {

                if(space || !length || openBracket || solved) return false;
                char = ' * ';
                addChar(char);

            } else if(char === '/') {

                if(space || !length || openBracket || solved) return false;
                char = ' / ';
                addChar(char);

            } else if(char === '(') {

                if(display.charAt(length - 1) !== ' ' && display.charAt(length - 1) !== '(' && length ) return false;
                this.setState({
                    brackets: brackets + 1
                });
                addChar(char);

            } else if(char === ')') {

                if(space || brackets < 1) return false;

                this.setState({
                    brackets: brackets - 1
                });
                addChar(char);

            } else if(char == '.') {
                if(/\d\.\d*$/.test(display) || closeBracket) return false;
                if(!/\d/.test(display.charAt(length - 1))) char = '0.';
                addChar(char);

            } else {
                if(closeBracket) return false;
                addChar(char);
            }
        }
        if(keyCode == 8) deleteChar();
    }

    render() {
        return(
            <div className="keyboard">
                <RaisedButton label="C" secondary={true} style={{marginBottom: '3px'}} onClick={this.clickBtn} />
                <RaisedButton label="(" secondary={true} style={{marginBottom: '3px'}} onClick={this.clickBtn} />
                <RaisedButton label=")" secondary={true} style={{marginBottom: '3px'}} onClick={this.clickBtn} />
                <RaisedButton label="/" secondary={true} style={{marginBottom: '3px'}} onClick={this.clickBtn} />
                <RaisedButton label="7" primary={true} style={{marginBottom: '3px'}} onClick={this.clickBtn} />
                <RaisedButton label="8" primary={true} style={{marginBottom: '3px'}} onClick={this.clickBtn} />
                <RaisedButton label="9" primary={true} style={{marginBottom: '3px'}} onClick={this.clickBtn} />
                <RaisedButton label="*" secondary={true} style={{marginBottom: '3px'}} onClick={this.clickBtn} />
                <RaisedButton label="4" primary={true} style={{marginBottom: '3px'}} onClick={this.clickBtn} />
                <RaisedButton label="5" primary={true} style={{marginBottom: '3px'}} onClick={this.clickBtn} />
                <RaisedButton label="6" primary={true} style={{marginBottom: '3px'}} onClick={this.clickBtn} />
                <RaisedButton label="-" secondary={true} style={{marginBottom: '3px'}} onClick={this.clickBtn} />
                <RaisedButton label="1" primary={true} style={{marginBottom: '3px'}} onClick={this.clickBtn} />
                <RaisedButton label="2" primary={true} style={{marginBottom: '3px'}} onClick={this.clickBtn} />
                <RaisedButton label="3" primary={true} style={{marginBottom: '3px'}} onClick={this.clickBtn} />
                <RaisedButton label="+" secondary={true} style={{marginBottom: '3px'}} onClick={this.clickBtn} />
                <RaisedButton label="0" primary={true} style={{marginBottom: '3px', width: '179px'}} onClick={this.clickBtn} />
                <RaisedButton label="." primary={true} style={{marginBottom: '3px'}} onClick={this.clickBtn} />
                <RaisedButton label="=" secondary={true} style={{marginBottom: '3px'}} onClick={this.clickBtn} />
            </div>
        )
    }
}

export default connect( ({ display }) => ({
    display
}), {
    addChar,
    deleteChar,
    clearExpression,
    addStory
})(KeyBoard)