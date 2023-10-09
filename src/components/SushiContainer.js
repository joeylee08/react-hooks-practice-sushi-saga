import React, {useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({handleClick, money}) {
  //sushi URL
  const fetchUrl = "http://localhost:3001/sushis"

  //complete sushi list, use here
  const [sushiList, setSushiList] = useState([])

  //sushi list start index
  const [sushiIndex, setSushiIndex] = useState(0)

  function handleEaten(id) {
    const mapEatenItem = sushiList.map(item => {
      if (item.id !== id) return item;
      else return {
        ...item,
        eaten: true
      }
    })
    setSushiList(() => mapEatenItem)
  }

  //sushi index handler, pass to morePlates onClick
  function handleSushiIndex() {
    if (sushiIndex + 4 > sushiList.length - 1) {
      setSushiIndex(0)
    } else {
      setSushiIndex(() => sushiIndex + 4)
    }
  }

  //fetch sushi list, use here
  useEffect(() => {
    fetch(fetchUrl)
      .then(res => res.json())
      .then(sushiArr => setSushiList(sushiArr))
  }, [])

  //render first four sushis
  const currentFourSushis = sushiList.slice(sushiIndex, sushiIndex + 4)
  const displayCurrentFour = currentFourSushis.map(item => {
    return <Sushi key={item.id} {...item} money={money} handleEaten={handleEaten} handleClick={handleClick} handleSushiIndex={handleSushiIndex} />
  })

  return (
    <div className="belt">
      {displayCurrentFour}
      <MoreButton handleSushiIndex={handleSushiIndex} />
    </div>
  );
}

export default SushiContainer;
