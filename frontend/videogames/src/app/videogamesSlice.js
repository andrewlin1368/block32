import { createSlice } from "@reduxjs/toolkit";
import { videogamesApi } from "./videogamesApi";

const videogamesSlice = createSlice({
  name: "videogamesSlice",
  initialState: { games: [] },
  extraReducers: (builder) => {
    builder.addMatcher(
      videogamesApi.endpoints.getVideoGames.matchFulfilled,
      (state, { payload }) => {
        console.log(payload);
        state.games = payload;
        return state;
      }
    );
  },
});

export default videogamesSlice.reducer;
