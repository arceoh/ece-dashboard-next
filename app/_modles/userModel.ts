import mongoose from "mongoose";
import { User } from "@/app/entities/User";

const schoolsSchema = new mongoose.Schema({
  id: Number,
  name_full: String,
  name: String,
  aeriesID: Number,
});

const userSchoolsSchema = new mongoose.Schema();
userSchoolsSchema
  .add(schoolsSchema)
  .add({ active: { type: Boolean, default: false } });

const columnsSchema = new mongoose.Schema({
  title: String,
  value: Boolean,
});

const UserSchema = new mongoose.Schema<User>(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
    },
    picture: {
      type: String,
    },
    settings: {
      theme: {
        type: String,
        default: "dark",
      },
      mySchools: {
        type: Map,
        of: userSchoolsSchema,
        default: {},
      },
      columns: {
        type: [columnsSchema],
        default: [],
      },
    },
  },
  {
    timestamps: true,
  }
);

const User: mongoose.Model<User> =
  mongoose.models.User || mongoose.model<User>("User", UserSchema);

export { User };
