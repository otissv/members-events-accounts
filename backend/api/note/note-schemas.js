
export default `
type Note {
  _id       : String,
  created   : String,
  createdBy : User,
  flag      : Boolean,
  note      : String,
  updated   : String,
  updatedBy : User,
}
`;


export const noteQueries = `
  notesFind(_id: [String]): [Note]
  noteFindById(_id: String): Note
  noteFindOne(_id: String): Note
`;
