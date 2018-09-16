import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import projects from "../store/reducers/projects";
import slides from "../store/reducers/slides";
import contents from "../store/reducers/contents";
import activeProjectID from "../store/reducers/activeProjectID";
import activeSlideID from "../store/reducers/activeSlideID";
import activeContentID from "../store/reducers/activeContentID";
import isContentEditable from "../store/reducers/isContentEditable";

const persistConfig = {
  key: "root",
  storage
};

const reducers = combineReducers({
  projects,
  slides,
  contents,
  activeProjectID,
  activeSlideID,
  activeContentID,
  isContentEditable
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
