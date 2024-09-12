import React from "react";

const InputHeader = ({ setEstate, estate }) => {
  return (
    <input
      id="seach"
      placeholder="Busque por pratos ou ingredientes"
      type="text"
      onChange={(e) => setEstate(e.target.value)}
      value={estate}
    />
  );
};

export default InputHeader;
