import React from "react";

function Table({emptyPlates, money}) {
  console.log(emptyPlates)
  // renders an empty plate for every element in the array
  const emptyPlatesImg = emptyPlates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${money} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlatesImg}</div>
      </div>
    </>
  );
}

export default Table;
