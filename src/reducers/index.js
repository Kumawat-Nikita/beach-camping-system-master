import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import userSessionReducer from "./userSessionReducer";
import userReducer from "./userReducer";

export default combineReducers({
  errors: errorReducer,
  userSession: userSessionReducer,
  user: userReducer,
});