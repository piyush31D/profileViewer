const initialState = { userName: "", userId: "", email: "" };
const loggedUser = (state = initialState, action) => {
  switch (action.type) {
    case "Logged_User":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default loggedUser;
