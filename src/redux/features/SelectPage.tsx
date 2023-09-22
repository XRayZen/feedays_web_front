import { createSlice, } from '@reduxjs/toolkit';
import type {PayloadAction} from "@reduxjs/toolkit"

type SelectPageState = {
  value: string;
};

const initialState = {
  value: "Home",
} as SelectPageState;

export const selectPage = createSlice({
  name: 'selectPage',
  initialState,
  reducers: {
    reset: () => initialState,
    // BUG: ステートが変更できていない
    selectHome: (state) => {
      state.value = "Home";
    },
    selectTrending: (state) => {
      console.log("selectTrending");
      state.value = "Trending";
    },
    selectExplore: (state) => {
      state.value = "Explore";
    },
    selectFavorite: (state) => {
      state.value = "Favorite";
    },
    selectSettings: (state) => {
      state.value = "Settings";
    },
    // selectHomeByAmount: (state, action: PayloadAction<string>) => {
    //   state.value = action.payload;
    // },
    // selectTrendingByAmount: (state, action: PayloadAction<string>) => {
    //   console.log("selectTrendingByAmount");
    //   state.value = action.payload;
    // },
    // selectExploreByAmount: (state, action: PayloadAction<string>) => {
    //   state.value = action.payload;
    // },
    // selectFavoriteByAmount: (state, action: PayloadAction<string>) => {
    //   state.value = action.payload;
    // },
    // selectSettingsByAmount: (state, action: PayloadAction<string>) => {
    //   state.value = action.payload;
    // },
  },
});

export const { selectHome, selectTrending, selectExplore, selectFavorite, selectSettings, reset } = selectPage.actions;
export default selectPage.reducer;



