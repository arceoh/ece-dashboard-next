import mongoose from "mongoose";

interface IUserSchool {
  active: boolean;
}

interface IColumn {
  title: string;
  value: boolean;
}

interface IUser extends mongoose.Document {
  name: string;
  email: string;
  settings: {
    theme: string;
    mySchools: Map<string, IUserSchool>;
    columns: IColumn[];
  };
  password?: string;
  picture?: string;
}

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

const UserSchema = new mongoose.Schema<IUser>(
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

const User: mongoose.Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export { User };
