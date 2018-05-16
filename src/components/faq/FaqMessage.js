import React, { Component } from 'react';
import './FaqMessage.scss';

class FaqMessage extends Component  {

    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            menuActive: false
        };
    }

    toggleMenu() {
        this.setState({
            menuActive: !this.state.menuActive
        });
    }

    render() {
      const {question, response} = this.props;

        let answer =""
        if(this.state.menuActive) {
            let sentences = [];
            response.split('\n').map(data => {
                sentences.push((data.indexOf('\t') !== -1) ? <p className="bigger">{data}</p>
                    : (data.indexOf("//")  !== -1) ? <p><a href={data}>{data}</a></p> : <p>{data}</p>);
            })
            answer = <div>{sentences}</div>
        }

        return (
          <div className="FaqMessage">
              <div className="question" onClick={this.toggleMenu.bind(this)}>
                  <div className="request">{question}</div>
              </div>
              {answer}
          </div>
        )
    }
}

module.exports = FaqMessage;
