
export default `
type User {
  _id        : String,
  addresses  : [Address],
  created    : String,
  createdBy  : User,
  dateOfBirth: String,
  email      : String,
  firstName  : String,
  lastLogin  : String,
  lastName   : String,
  notes      : [Note],
  telephone  : String,
  updated    : String,
  updatedBy  : User,
  username   : String
}
`;


export const userQueries = `
  usersFind(_id: String, name: String): [User]
  userFindById(_id: String, name: String): User
  userFindOne(_id: String, name: String): User
`;


export const userMutaions = `
  userCreate(_id: String): User
`;
