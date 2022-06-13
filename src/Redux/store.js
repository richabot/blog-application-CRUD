import { legacy_createStore,combineReducers,applyMiddleware,compose } from "redux";
import blogreducer from "./Blogs/reducer";
import thunk from "redux-thunk";

const rootReducer=combineReducers({blogreducer});
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_|| compose

export const store=legacy_createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);