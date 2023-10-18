import mongoose from "mongoose";
import { Survey } from "@/app/entities/Survey";

const surveySchema = new mongoose.Schema(
  {
    student: {
      firstName: {
        type: String,
        required: [true, "Student First Name Required"],
      },
      middleName: String,
      lastName: {
        type: String,
        required: [true, "Student Last Name Required"],
      },
      birthdate: { type: Date, required: [true, "Student Birthdate Required"] },
      enrollInIEP: Boolean,
      isReturningStudent: Boolean,
    },
    guardian: {
      firstName: {
        type: String,
        required: [true, "Guardian First Name Required"],
      },
      lastName: {
        type: String,
        required: [true, "Guardian Last Name Required"],
      },
      email: { type: String, required: [true, "Guardian Email Required"] },
      phone: {
        type: String,
        required: [true, "Guardian Phone Number Required"],
      },
      preferedLanguage: String,
      address_1: {
        type: String,
        required: [true, "Guardian Address Required"],
      },
      address_2: String,
      city: { type: String, required: [true, "Guardian City Required"] },
      state: { type: String, required: [true, "Guardian State Required"] },
      zip: { type: Number, required: [true, "Guardian Zip Required"] },
      cashAid: Boolean,
      familySize: {
        type: Number,
        required: [true, "Guardian Family Size Required"],
      },
      monthlyIncome: {
        type: Number,
        required: [true, "Guardian Monthly Income Required"],
      },
      preferedLocation: {
        type: String,
        required: [true, "School of Interest  Required"],
      },
      dliInterest: Boolean,
    },
    status: {
      type: String,
      default: "New",
    },
    note: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Survey =
  mongoose.models.Survey<Survey> ||
  mongoose.model<Survey>("Survey", surveySchema);

export { Survey };
