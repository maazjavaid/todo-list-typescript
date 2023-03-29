import configureStore from "state/configureStore.dev";
import { rootReducer } from "./ducks";
export type RootState = ReturnType<typeof rootReducer>;
export default configureStore;
