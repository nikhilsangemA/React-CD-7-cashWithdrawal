import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {initialAmt: 2000}

  addAmountInAccount = value => {
    this.setState(prevState => ({initialAmt: prevState.initialAmt - value}))
  }

  render() {
    const {denominationsList} = this.props

    const {initialAmt} = this.state
    return (
      <div className="container">
        <div className="inner-container">
          <div className="sarahContainer">
            <div className="bg-container">s</div>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="sarahContainer2">
            <p className="para"> Your Balance</p>
            <div className="rupeesContainer">
              <p className="para2000">{initialAmt}</p>
              <p className="paraInRupees">in Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="ulList">
            {denominationsList.map(each => (
              <DenominationItem
                addAmountInAccount={this.addAmountInAccount}
                key={each.id}
                userWithdraw={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
