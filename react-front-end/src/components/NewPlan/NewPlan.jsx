import React, { useContext } from "react";
import { AppContext } from "../hooks/useAppContext";

export const NewPlan = () => {
  const { addPlan } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addPlan(event.target[0].value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Create a New Plan:
        <input type="text" />
      </label>
      <input type="submit" />
    </form>
  );
};
