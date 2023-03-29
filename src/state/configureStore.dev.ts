import { configureStore } from "@reduxjs/toolkit";
import { rootReducer, rootSaga } from "state/ducks";
import sagaMiddleware from "state/middlewares/sagas";

export default configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
