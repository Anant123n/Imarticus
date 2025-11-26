import Enrollment from "../models/Enrollment.js";

export const saveEnrollment = async (req, res) => {
  try {
    const data = req.body;

    if (!data.name || !data.email || !data.mobile || !data.location || !data.experience) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const enroll = await Enrollment.create(data);

    return res.status(200).json({
      success: true,
      message: "Enrollment saved successfully!",
      enrollment: enroll,
    });
  } catch (error) {
    console.error("Error saving enrollment:", error);
    return res.status(500).json({
      success: false,
      message: "Server error, please try again later.",
    });
  }
};
