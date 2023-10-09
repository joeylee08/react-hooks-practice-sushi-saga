import React from 'react'

function Wallet({handleSetMoney}) {
  return (
    <form className="wallet" onSubmit={handleSetMoney}>
      <label htmlFor="wallet">Add Money!</label>
      <br />
      <input name="amount" type="number" placeholder='How much dineros?'></input>
      <input type="submit"></input>
    </form>
  )
}


export default Wallet