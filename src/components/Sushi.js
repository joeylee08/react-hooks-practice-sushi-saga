import React from "react";

function Sushi({id, name, img_url, eaten, price, money, handleEaten, handleClick}) {
  //handle sushi click and set eaten status
  function handleClickAndEaten(id, spent) {
    if (spent > money) {
      alert("You are out of money. Get a job.")
      return;
    }
    handleClick(spent)
    handleEaten(id)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleClickAndEaten(id, price)}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
