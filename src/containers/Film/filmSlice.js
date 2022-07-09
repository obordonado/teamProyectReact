import { createSlice } from "@reduxjs/toolkit";
 
export const filmSlice = createSlice({

    name: 'film',
    initialState: {
        films: []
    },
    reducers: {
        addFilmCard: (state, action) => {
            state.films = action.payload
        },
    }
})

export const { addFilmCard } = filmSlice.actions

export const selectFilm = (state) => {

    return state.film.films
}

export default filmSlice.reducer

