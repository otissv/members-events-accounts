
export default `
type Authentiaction {
  _id      : String,
  password : String,
  token    : String,
  created  : String
}
`;


export const authentiactionQueries = `
  authenticate(_id: String): Authentiaction
  register(_id: String): Authentiaction
  unauthenticate(_id: String): Authentiaction
`;


export const authentiactionMutations = `
  authenticate(_id: String): Authentiaction
  register(_id: String): Authentiaction
  unauthenticate(_id: String): Authentiaction
`;
