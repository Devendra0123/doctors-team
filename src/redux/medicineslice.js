import { createSlice } from "@reduxjs/toolkit";

const medicineSlice = createSlice({
  name: "medicine",
  initialState: [
    {
      name: "Aspirin",
      uses:
        "Aspirin can be used as an anti-pyretic agent,it also act as a mild analgesic drug.",
      image:
        "https://creakyjoints.org/wp-content/uploads/2018/10/0818_Aspirin-Heart-Disease.jpg"
    }
  ],
  reducers: {
    allMedicine: (state) => state
  }
});

export const { allMedicine } = medicineSlice.actions;
export default medicineSlice.reducer;
