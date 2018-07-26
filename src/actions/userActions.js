import { FETCH_USERS, NEW_USER, DELETE_USER } from "./types";

export const fetchUsers = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users =>
      dispatch({
        type: FETCH_USERS,
        payload: users
      })
    );
};

export const createUser = userData => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(user =>
      dispatch({
        type: NEW_USER,
        payload: user
      })
    );
};

export const deleteUser = userId => dispatch => {
  dispatch({
    type: DELETE_USER,
    payload: userId
  });
};
