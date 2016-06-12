import mongoose, { Schema} from 'mongoose';


const postingSchema = new Schema({
  description: {
    type    : String,
    required: 'Please enter an account description.'
  },
  referense : String,
  credit    : String,
  debit     : String,
  currency  : String
});

export default mongoose.model('Posting', postingSchema);
