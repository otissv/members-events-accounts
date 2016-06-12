import posting from '../models/posting-model';

export default class Posting {
  findOne () {
    return posting.findOne().then(doc => doc);
  }

  find () {
    return posting.find().then(docs => docs);
  }
}
