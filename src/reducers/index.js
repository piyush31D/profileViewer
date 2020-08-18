import loggedReducer from "../reducers/isLogged";
import loggedUser from "../reducers/loggedUser";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isLogged: loggedReducer,
  loggedUserName: loggedUser,
});
export default rootReducer;
