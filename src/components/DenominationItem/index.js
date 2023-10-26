import './index.css'

const DenominationItem = props => {
  const {userWithdraw, addAmountInAccount} = props
  const {value} = userWithdraw

  const addAmount = () => {
    addAmountInAccount(value)
  }

  return (
    <li className="list">
      <button type="button" className="btn" onClick={addAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
