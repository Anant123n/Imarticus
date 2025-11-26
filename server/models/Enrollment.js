import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    countryCode: { type: String, default: "+91" },
    mobile: { type: String, required: true },
    location: { type: String, required: true },
    experience: {
      type: String,
      enum: [
        "undergraduate",
        "fresh-graduate",
        "0-1-years",
        "1-2-years",
        "2-3-years",
        "3-5-years",
        "5-7-years",
        "7-plus-years",
      ],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Enrollment", EnrollmentSchema);
