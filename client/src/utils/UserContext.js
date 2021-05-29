import React, { createContext, useReducer, useContext } from "react";
// const router = require('express').Router();
// const { User, Badge } = require('../../../models');

const UsersInfoContext = createContext({
  email: "",
  password: "",
  movies_watched: [],
  watchlist:[],
  id:"",
  isLoggedIn: false
});

const { Provider } = UsersInfoContext;
// ///////////////////////////////////////////////////////
function reducer(state, action) {
  switch (action.type) {
  case "add":
    return [
      ...state,
      {
        id: state.length * Math.random(),
        name: action.name
      }
    ];
  case "remove":
    return state.filter((_, index) => {
      return index !== action.index;
    });
//   case "prioritize":
//     return state.map((item, index) => {
//       if (index === action.index) {
//         return Object.assign({}, item, {
//           priority: !item.priority
//         });
//       }
//       return item;
//     });
  default:
    return state;
  }
}

function UserProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, []);

  return <Provider value={[state, dispatch]} {...props} />;
}

function useUsersInfoContext() {
  return useContext(UsersInfoContext);
}

export { UserProvider, useUsersInfoContext };
