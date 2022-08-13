import React, { useContext } from "react";
import { AppContext } from "../hooks/useAppContext";

export const ListPlans = () => {
  const { plans, changePlan } = useContext(AppContext);

  return (
    <p>
    <select onChange={(e) => changePlan(e.target.value)}>
      {plans.map((option) => (
        <option value={option.id} key={option.id}>{option.name}</option>
      ))}
    </select>
    </p>
  );
};
