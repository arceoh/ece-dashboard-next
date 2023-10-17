import mongoose from "mongoose";
import { School } from "@/app/entities/School";

// export interface ISchool extends mongoose.Document {
//   aeriesID: string;
//   name_full: string;
//   name: string;
//   active?: boolean; // Used for User model settings
// }

const schoolSchema = new mongoose.Schema({
  aeriesID: {
    type: String,
    required: [true, "Aeries ID Required"],
    unique: true,
  },
  name_full: { type: String, required: [true, "Full Name Required"] },
  name: {
    type: String,
    enum: [
      "AEOA",
      "Barton",
      "Edison",
      "Franklin",
      "Gauer",
      "Guinn",
      "Henry",
      "Jefferson",
      "Juarez",
      "Lincoln",
      "Loara",
      "Madison",
      "Mann",
      "Marshall",
      "Olive Street",
      "Orange Grove",
      "Ponderosa",
      "Price",
      "Revere",
      "Roosevelt",
      "Ross",
      "Stoddard",
      "Sunkist",
      "Westmont",
    ],
    required: [true, "Short Name Required"],
  },
});

const School =
  mongoose.models.School || mongoose.model<School>("School", schoolSchema);

export { School };
