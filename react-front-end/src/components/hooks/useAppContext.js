import { createContext, useReducer, useContext } from "react";
import AppReducer, { initialState } from './useAppReducer';

const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addToMap = (lat, lng) => {
    const updatedMap = state.events.push({lat,lng});
    
    dispatch({
      type: "ADD_TO_MAP",
      payload: {
        events: updatedMap
      }
    });
  };

  const data = {
    events: state.events,
    addToMap,   
  };

  // eslint-disable-next-line react/react-in-jsx-scope
  return <AppContext.Provider data={data}>{children}</AppContext.Provider>;
};

const useApp = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useShop must be used within AppContext");
  }

  return context;
};

export default useApp;