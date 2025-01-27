import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategory = createAsyncThunk(
  "products/fetchProducts",
  async (categories) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${categories}`
    );
    return response.json();
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const categoryReducer = categorySlice.reducer;

export default categorySlice;
