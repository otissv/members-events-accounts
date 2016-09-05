
export default `
type Address {
  _id       : String,
  address1  : String,
  address2  : String,
  city      : String,
  country   : String,
  created   : String,
  createdBy : User
  current   : Boolean,
  notes     : [Note],
  postCode  : String,
  rooms     : String,
  state     : String,
  status    : String,
  updated   : String,
  updatedBy : User
}
`;


export const addressQueries = `
  addressesFind(_id: [String]): [Address]
  addressFindById(_id: String): Address
  addressFindOne(_id: String): Address
`;
