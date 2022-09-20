import { useReducer, createContext } from "react";

const initialState = {
  menuToggle: false,
  mobileMenuToggle: false,
  mobileProfile: false,
  popNewTeam: false,
  popTeamProfile: false,
};

export const contentCreate = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        menuToggle: !state.menuToggle,
      };
    case "MOBILETOGGLE":
      return {
        mobileMenuToggle: !state.mobileMenuToggle,
      };
    case "MOBILEPROFILE":
      return {
        mobileProfile: !state.mobileProfile,
      };

    case "NEWTEAM":
      return {
        popNewTeam: !state.popNewTeam,
      };

    case "TEAMPROFILE":
      return {
        popTeamProfile: !state.popTeamProfile,
      };

    default:
      return state;
  }
};

export const DataProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <contentCreate.Provider value={{ state, dispatch }}>
      {props.children}
    </contentCreate.Provider>
  );
};
