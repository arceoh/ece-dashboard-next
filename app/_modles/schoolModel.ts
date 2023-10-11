import mongoose from 'mongoose'


interface ISchool extends mongoose.Document {
    aeriesID: string;
    name_full: string;
    name: string;
  }

const schoolSchema = new mongoose.Schema({
  aeriesID: {
    type: String,
    required: [true, "Aeries ID Required"],
    unique: true,
  },
  name_full: { type: String, required: [true, "Full Name Required"] },
  name: { type: String, required: [true, "Short Name Required"] },
});


const School = mongoose.models.School || mongoose.model<ISchool>('School', schoolSchema);

export { School };