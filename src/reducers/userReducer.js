import { FETCH_USERS, NEW_USER, DELETE_USER } from "../actions/types";

const initialState = {
  users: [],
  user: {}
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_USERS:
      return {
        ...state,
        users: payload
      };
    case NEW_USER:
      return {
        ...state,
        user: payload
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== payload)
      };
    default:
      return state;
  }
}
