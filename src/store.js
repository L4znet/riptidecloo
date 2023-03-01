import { configureStore } from '@reduxjs/toolkit'
import mapDataReducer from "./store/map/mapDataSlice"
export default configureStore({
    reducer: {
        map: mapDataReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})

