
export default `
type Authentiaction {
  _id      : String,
  password : String,
  roles    : [String],
  token    : String,
  username : String
}
`;

export const authentiactionQueries = `
  authenticate(username: String, password: String): Authentiaction
`;

export const authentiactionMutations = `
  register(username: String, password: String): Authentiaction
  unauthenticate(username: String, password: String): Authentiaction
`;
