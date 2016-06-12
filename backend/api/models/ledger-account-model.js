import mongoose, { Schema} from 'mongoose';


export function ledgerAccountRef () {
  return {
    type:  mongoose.Schema.Types.ObjectId,
    ref: 'Ledger.account'
  };
}

const ledgerAccountSchema = new Schema({
  description: {
    type: String,
    required: 'Please enter an account description.'
  },
  name       : {
    type: String,
    required: 'Please enter an account name.'
  },
  status     : {
    type: String,
    enum: [
      'active',
      'closed'
    ]
  }
});

export default mongoose.model('Ledger.account', ledgerAccountSchema);
