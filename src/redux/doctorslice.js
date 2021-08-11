import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "doctors",
  initialState: [
    {
      name: "Sikshya Parajuli",
      image:
        "https://cdn-prod.medicalnewstoday.com/content/images/articles/317/317991/doctor-in-branding-article.jpg",
      workplace: "Institute of Medicine",
      education: "MBBS/MD",
      description:
        "She is an experienced member of KIST hospital.She deals with pediatric patient."
    },
    {
      name: "Sadikshya Regmi",
      image:
        "https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=6&m=1189304032&s=612x612&w=0&h=SJPF2M715kIFAKoYHGbb1uAyptbz6Tn7-LxPsm5msPE=",
      workplace: "KIST medical hospital",
      education: "BDS",
      description:
        "She is an experienced member of KIST hospital.She deals with pediatric patient."
    },
    {
      name: "Deepak Pant",
      image:
        "http://www.beautydayclinic.ir/wp-content/uploads/2018/11/St-Petersburg-Accident-Doctor.jpg",
      workplace: "KIST medical hospital",
      education: "BDS",
      description:
        "She is an experienced member of KIST hospital.She deals with pediatric patient."
    }
  ],
  reducers: {
    allDoctors: (state) => state
  }
});

const medicineSlice = createSlice({
  name: "madicine",
  initialState: [
    {
      medicineName: "Aspirin",
      uses:
        "This drug acts as anti-pyretic agent and can also be used as a mild analgesic drug.",
      dose: ""
    }
  ],
  reducers: {
    allMedicine: (state) => state
  }
});
export const { medicineReducer } = medicineSlice.reducer;
export const { allMedicine } = medicineSlice.actions;

export const { allDoctors } = doctorSlice.actions;
export default doctorSlice.reducer;
