import { configureStore } from "@reduxjs/toolkit";
import { LoginSliceReducer } from "./services/userServices";
import { RoleSliceReducer } from "./services/roleServices";
import { TaskSliceReducer } from "./services/taskService";
import { ObservationSliceReducer } from "./services/obsServices";
import { NcrSliceReducer } from "./services/ncrServices";
import { NcrOptionSliceReducer } from "./services/ncroptionServices";
import { obsFinalSliceReducer } from "./services/submittedobsServices";
import {NcrModifySliceReducer} from "./services/ncrmodifyservices"
import {TaskObjectSliceReducer} from "./services/TaskObjectServices"
const store = configureStore({
  reducer: {
    userReducer: LoginSliceReducer, 
    roleReducer: RoleSliceReducer,
    taskReducer: TaskSliceReducer,
    obsReducer:ObservationSliceReducer,
    NcrReducer:NcrSliceReducer,
    NcrOptionReducer:NcrOptionSliceReducer,
    obsFinalReducer:obsFinalSliceReducer,
    ncrmodifyReducer:NcrModifySliceReducer,
    taskObjectReducer: TaskObjectSliceReducer,
  },
});

export default store;
