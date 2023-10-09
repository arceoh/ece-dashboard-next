import mongoose from 'mongoose'

interface IUserSchool {
  active: boolean;
}

interface IColumn {
  title: string;
  value: boolean;
}
  
const schoolsSchema = new mongoose.Schema({
  id: Number,
  name_full: String,
  name: String,
  aeriesID: Number,
});

interface IBaseUser extends mongoose.Document {
  name: string;
  email: string;
  settings: {
    theme: string;
    mySchools: Map<string, IUserSchool>;
    columns: IColumn[];
  };
}

interface IUser extends IBaseUser {
  password?: string;
}

interface ISocialUser extends IUser {
  picture?: string;
}

const userSchoolsSchema = new mongoose.Schema();
userSchoolsSchema.add(schoolsSchema).add({active: {type: Boolean, default: false}})

    
const columnsSchema = new mongoose.Schema({
  title: String,
  value: Boolean,
});
  

const baseUserSchema = new mongoose.Schema<IBaseUser>(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
    },
    settings: {
      theme: {
        type: String,
        default: 'dark',
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
  

const socialUserSchema = new mongoose.Schema()
socialUserSchema.add(baseUserSchema).add({picture: {type:String}})


const userSchema = new mongoose.Schema()
userSchema.add(baseUserSchema).add({password: {type: String, required: [true, "Please enter a password"]}})
  

const User: mongoose.Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);
const SocialUser: mongoose.Model<ISocialUser> = mongoose.models.SocialUser || mongoose.model<ISocialUser>('SocialUser', socialUserSchema);
  
export { User, SocialUser };

