import { createSlice } from '@reduxjs/toolkit'

export const mapDataSlice = createSlice({
    name: 'mapData',
    initialState: {
        bikeStations:[]
    },
    reducers: {
        updateBikeStation: (state, action) => {
            state.bikeStations.push(action.payload)
        },
    }
})

export const { updateBikeStation } = mapDataSlice.actions

export const bikeStations = state => state.bikeStations

export default mapDataSlice.reducer