import React from "react";
import { Container } from "./styles";

export const InputContainer = ({
  setEstate,
  nameLabel,
  placeholherName,
  type,
  id,
  value,
}) => {
  return (
    <Container>
      <label htmlFor={id}>{nameLabel}</label>
      <input
        onChange={(e) => setEstate(e.target.value)}
        required
        placeholder={placeholherName}
        type={type}
        id={id}
        value={value}
      />
    </Container>
  );
};
