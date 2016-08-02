
export default `
type EventCategory {
  _id 	    : String,
  color     : String,
  created   : String,
  createdBy : User,
  notes     : [Note],
  status    : String,
  students  : [User],
  title     : String,
  updated   : String,
  updatedBy : User
}
`;


export const eventCategoryQueries = `
  eventCategoriesFind(_id: String, name: String): [EventCategory]
  eventCategoryFindById(_id: String, name: String): EventCategory
  eventCategoryFindOne(_id: String, name: String): EventCategory
`;
