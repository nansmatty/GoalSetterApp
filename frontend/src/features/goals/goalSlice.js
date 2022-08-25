import {
	createSlice,
	createAsyncThunk,
} from "@reduxjs/toolkit";

const initialState = {
	goals: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

export const goalSlice = createSlice({
	name: "goal",
	initialState,
	reducers: {
		resetGoalState: (state) => initialState,
	},
	extraReducers: () => {},
});

export const { resetGoalState } =
	goalSlice.actions;
export default goalSlice.reducer;
