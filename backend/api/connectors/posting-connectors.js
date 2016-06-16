export default function postingConnector (client) {
	return class Posting {
	  findOne () {
	    return posting.findOne().then(doc => doc);
	  }

	  find () {
	    return posting.find().then(docs => docs);
	  }
	}
}
