
export default `
type Authentiaction {
  _id      : String,
  email    : String,
  password : String
}
`;


export const authentiactionQueries = `
  authentiacte(_id: [String]): Authentiaction
  register(_id: String): Authentiaction
  unauthentiacte(_id: String): Authentiaction
`;
