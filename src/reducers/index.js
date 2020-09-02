import loggedReducer from "../reducers/isLogged";
import loggedUser from "../reducers/loggedUser";
import EducationDetails from "../reducers/educationDetails";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isLogged: loggedReducer,
  loggedUserName: loggedUser,
  educationDetails: EducationDetails,
});
export default rootReducer;
