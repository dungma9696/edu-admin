import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "@/features/profile/profile.store";

const rootReducer = combineReducers({
  profile: userReducer,
});

export default rootReducer;
