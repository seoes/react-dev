import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { useMemo } from "react";
import logger from "redux-logger";
import thunk from "redux-thunk";

const useLogger = process.env.NODE_ENV !== "production";

function initializeStore() {
    const middleware: any[] = [thunk];
    if (useLogger) {
        middleware.push(logger);
    }
    const store = configureStore({ reducer: rootReducer, middleware });
    return store;
}

export function useStore() {
    const store = useMemo(() => initializeStore(), []);
    return store;
}
