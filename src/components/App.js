import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Wallet from "./Wallet"

function App() {
  //empty plates array, pass to table
  const [emptyPlates, setEmptyPlates] = useState([]);

  //money count, pass to table
  const [money, setMoney] = useState(100)

  //eat handler, adds empty plate and decrements money, pass to 
  //pass to sushi onClick
  function handleClick(spent) {
    setEmptyPlates(([
      ...emptyPlates,
      "plate"
    ]))
    setMoney(() => money - spent)
  }

  //add money to wallet
  function handleSetMoney(e) {
    e.preventDefault()
    const amount = +e.target.amount.value;
    setMoney(() => money + amount)
    e.target.amount.value = ""
  }

  return (
    <div className="app">
      <SushiContainer money={money} handleClick={handleClick} />
      <Table emptyPlates={emptyPlates} money={money} />
      <Wallet handleSetMoney={handleSetMoney}/>
    </div>
  );
}

export default App;
