import mongoose, { Schema} from 'mongoose';


const postingSchema = new Schema({
  description: {
    type    : String,
    required: 'Please enter an account description.'
  },
  reference : String,
  credit    : String,
  debit     : String,
  currencyId  : String
});


export default mongoose.model('Posting', postingSchema);
