import React, { useContext } from 'react'
import { AppContext } from '../hooks/useAppContext'

export const ListPlans = () => {

  const { plans } = useContext(AppContext);

  return (
    <select >
      {plans.map((option) => (
        <option value={option.name}>{option.name}</option>
      ))}
    </select>
  )
}
