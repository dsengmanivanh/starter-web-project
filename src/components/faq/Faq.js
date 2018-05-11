import React, { Component } from 'react'
import FaqModel from './FaqModel'
import FaqMessage from './FaqMessage'

class Faq extends Component  {

    render() {
        const qr = this.props.isCandidat ? FaqModel.candidatQR : FaqModel.recruteurQR;
        return (
            <div>
            {
              qr.map(data => {
                return (
                  <FaqMessage question={data.question} response={data.response} isCandidat={this.props.isCandidat}/>
                )
              })
            }
            </div>
        )
    }
}

module.exports = Faq;
