import legdgerAccount from './legdger-account-resolvers';
import posting from './posting-resolvers';


export default {
  Query: {
    ...legdgerAccount,
    ...posting
  }
};
